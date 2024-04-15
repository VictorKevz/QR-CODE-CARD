import React from "react";
import qrCode from "../assets/images/qr-code.png";

function Card() {
  return (
    <div className="contents">
      <img src={qrCode} alt="qr-code-image" />
      <div className="text">
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
export default Card;