import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

export default function BathroomModal({ onClose }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={true} onClose={onClose}>
        <div className="modal-font">
          <ModalOverlay className="modal-overlay" />
          <ModalContent className="modal-content">
            {isLoading && (
              <div className="loading-screen">
                <img className="loading-gif" src="/loading.gif" />
              </div>
            )}
            <ModalHeader className="modal-header">Upload a Poster</ModalHeader>
            <ModalCloseButton
              className="close-button"
              onClick={onClose}
              style={{ backgroundColor: "var(--dark-purple100)" }}
            />
            <ModalBody className="modal-body">
              <div
                className="all"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  className="info-container"
                  style={{
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="building">Andrews</div>
                  <div className="floor">1</div>
                  <div className="gender">F</div>
                  <div className="main-img">
                    <img
                      src="drive-download-20240204T020153Z-001/IMG_3891.JPG"
                      alt=""
                    />
                  </div>
                  <div className="carosel" style={{ display: "flex" }}></div>
                </div>
                <div
                  className="reviews"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="stars">5</div>
                  <div className="review-list">
                    {/* map revew objects  */}
                    <div className="review">
                      <p className="review-text">a review</p>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </div>
      </Modal>
    </>
  );
}
