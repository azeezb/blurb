# OpenCV program to scan barcodes. 

import cv2
import requests
from pyzbar import pyzbar

print(cv2.__version__)
print(requests.__version__)
print("It's working.")

def read_barcodes(frame):
    barcodes = pyzbar.decode(frame)
    for barcode in barcodes:
        x, y, w, h, = barcode.rect

        #1 Barcode Information
        barcode_info = barcode.data.decode('utf-8')
        cv2.rectangle(frame, (x, y),(x+w, y+h), (0, 255, 0), 1)

        #2 Writing Barcode Text
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, barcode_info, (x+8, y-8), font, 2.0, (255, 255, 255), 1)

        #3 Writing Bacrode into File
        with open("barcode_result.txt", mode = 'w') as file:
            file.write("Recognised Barcode:" + barcode_info)

    return frame

def main():

    #1
    camera = cv2.VideoCapture(2)
    ret, frame = camera.read()

    #2
    while ret:
        ret, frame = camera.read()
        frame = read_barcodes(frame)
        #frame = cv2.flip(frame, 1)
        cv2.imshow('Barcode/QR code Reader', frame)
        if cv2.waitKey(1) & 0xFF == 27:
            break

    #3
    camera.release()
    cv2.destroyAllWindows()

#4
if __name__ == '__main__':
    main()

