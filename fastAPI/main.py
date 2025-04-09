from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from qr_code_generator import generate_qr_code
from fastapi.responses import StreamingResponse

class QRcode(BaseModel):
    url: str
    color: str
    bgColor: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def index():
    return "FastAPI is listening"

@app.post("/api/generateQRCode")
async def generateQRCode(qrCode: QRcode):
    qr_image = generate_qr_code(qrCode.url, qrCode.color, qrCode.bgColor)
    return StreamingResponse(qr_image, media_type="image/png")
    