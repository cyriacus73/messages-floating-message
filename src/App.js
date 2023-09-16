import React, { useState } from "react";
import phoneIcon from "./Assets/phoneIcon.svg";
import teleIcon from "./Assets/telegramIcon.svg";
import whatsappIcon from "./Assets/whatsappIcon.svg";
import chatIcon from "./Assets/chatIcon.svg";
import { MdClose } from "react-icons/md";

// Create a Modal component
function Modal({ isOpen, onClose, phoneNumber }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Implement your logic to send the message here
    alert(`Sending message to ${phoneNumber}: ${message}`);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <MdClose />
        </span>
        <h2>Send a message</h2>
        <div className="centered-content">
          <textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="center-button">
            <button onClick={handleSend}>Send</button>
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
          {isMenuOpen ? <MdClose className="text-xl" /> : <img src={chatIcon} alt="Chat icon" />}
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

      <Modal isOpen={showTeleModal} onClose={closeTeleModal} phoneNumber="+905338587737" />
      <Modal isOpen={showWhatsappModal} onClose={closeWhatsappModal} phoneNumber="+905338587737" />
    </div>
  );
}

export default App;
