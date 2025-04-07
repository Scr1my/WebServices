import qrcode

def generateQRCode(data, fileName):
    qr = qrcode.QRCode(
        version = 1,
        error_correction = qrcode.constants.ERROR_CORRECT_L,
        box_size = 10,
        border = 4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(fileName)

    print("qr code saved as: ", fileName)

generateQRCode("https://it.wikipedia.org/wiki/Codice_QR", "qr.png")