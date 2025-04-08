import qrcode
from io import BytesIO

def generate_qr_code(url: str, color: str, bgColor: str) -> BytesIO:
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color=color, back_color=bgColor)

    buffer = BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)  # Rewind per poterlo leggere
    return buffer