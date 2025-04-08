import cv2

img = cv2.imread("qr.png")
det = cv2.QRCodeDetector()
val, pts, st_code = det.detectAndDecode(img)
print(val)