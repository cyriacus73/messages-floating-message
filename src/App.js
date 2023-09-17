import React, { useState } from "react";
import phoneIcon from "./Assets/phoneIcon.svg";
import teleIcon from "./Assets/telegramIcon.svg";
import whatsappIcon from "./Assets/whatsappIcon.svg";
import chatIcon from "./Assets/chatIcon.svg";
import { MdClose } from "react-icons/md";
import "./App.css"; // Import your CSS file

// Create a Modal component
function Modal({ isOpen, onClose, phoneNumber, app }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (app === "whatsapp") {
      // You can replace this with logic to send a WhatsApp message via API or deep link
      // For example, you can open a WhatsApp link with the message and phone number
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    } else if (app === "telegram") {
      // You can replace this with logic to send a Telegram message via API or deep link
      // For example, you can open a Telegram link with the message and username
      window.open(`https://t.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    }
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "flex" : "hidden"}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <MdClose />
        </span>
        <h2>Send a message</h2>
        <div className="centered-content">
          <textarea
            className="modal-textarea"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="center-button">
            <button className="modal-send-button" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTeleModal, setShowTeleModal] = useState(false);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openTeleModal = () => {
    setShowTeleModal(true);
  };

  const openWhatsappModal = () => {
    setShowWhatsappModal(true);
  };

  const closeTeleModal = () => {
    setShowTeleModal(false);
  };

  const closeWhatsappModal = () => {
    setShowWhatsappModal(false);
  };

  return (
    <div>
      <div className="fixed bottom-5 right-5">
        <button className="py-2 px-4 rounded-full" onClick={toggleMenu}>
          {isMenuOpen ? (
            <MdClose className="text-xl" />
          ) : (
            <img src={chatIcon} alt="Chat icon" />
          )}
        </button>
        {isMenuOpen && (
          <div className="absolute bottom-14 right-0 space-y-2">
            <a href="tel:+905338587737">
              <img src={phoneIcon} alt="Phone icon" />
            </a>
            <button onClick={openWhatsappModal}>
              <img src={whatsappIcon} alt="WhatsApp icon" />
            </button>
            <button onClick={openTeleModal}>
              <img src={teleIcon} alt="Telegram icon" />
            </button>
          </div>
        )}
      </div>

      {showTeleModal && (
        <Modal isOpen={showTeleModal} onClose={closeTeleModal} phoneNumber="ProKibris" app="telegram" />
      )}
      {showWhatsappModal && (
        <Modal isOpen={showWhatsappModal} onClose={closeWhatsappModal} phoneNumber="905338427157" app="whatsapp" />
      )}
    </div>
  );
}

export default App;
