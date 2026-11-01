from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="TechNova Solutions API")
api_router = APIRouter(prefix="/api")


class ContactIn(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=30)
    service: Optional[str] = Field(default=None, max_length=80)
    message: str = Field(min_length=10, max_length=2000)


class Contact(ContactIn):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "TechNova Solutions API", "status": "online"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/contact", status_code=201)
async def create_enquiry(payload: ContactIn):
    enquiry = Contact(**payload.model_dump())
    await db.contact_enquiries.insert_one(enquiry.model_dump())
    return {"success": True, "id": enquiry.id, "message": "Enquiry received. Our team will reach out shortly."}


@api_router.get("/contact", response_model=List[Contact])
async def list_enquiries():
    docs = await db.contact_enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()