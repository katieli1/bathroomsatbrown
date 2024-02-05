import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./modal.css";

const idToImage: { [key: number]: string } = {
  2: "drive-download-20240204T020153Z-001/IMG_3893.JPG",
  3: "drive-download-20240204T020153Z-001/IMG_3894.JPG",
  4: "drive-download-20240204T020153Z-001/IMG_3897.JPG",
  5: "drive-download-20240204T020153Z-001/IMG_3898.JPG",
  6: "drive-download-20240204T020153Z-001/IMG_3901.JPG",
  7: "drive-download-20240204T020153Z-001/IMG_3903.JPG",
  8: "drive-download-20240204T020153Z-001/IMG_3935.JPG",
  9: "drive-download-20240204T020153Z-001/IMG_3941.JPG",
  10: "drive-download-20240204T020153Z-001/IMG_3942.JPG",
  11: "drive-download-20240204T020153Z-001/IMG_3946.JPG",
  12: "drive-download-20240204T020153Z-001/IMG_3948.JPG",
  13: "drive-download-20240204T020153Z-001/IMG_3951.JPG",
  14: "drive-download-20240204T020153Z-001/IMG_3955.JPG",
  15: "drive-download-20240204T020153Z-001/IMG_3957.JPG",
  16: "drive-download-20240204T020153Z-001/IMG_3959.JPG",
  17: "drive-download-20240204T020153Z-001/IMG_3965.JPG",
  18: "drive-download-20240204T020153Z-001/IMG_3967.JPG",
  19: "drive-download-20240204T020153Z-001/IMG_3968.JPG",
  20: "drive-download-20240204T020153Z-001/IMG_3977.JPG",
  21: "drive-download-20240204T020153Z-001/IMG_3979.JPG",
  22: "drive-download-20240204T020153Z-001/IMG_3981.JPG",
  23: "drive-download-20240204T020153Z-001/IMG_3983.JPG",
  24: "drive-download-20240204T020153Z-001/IMG_3986.JPG",
  25: "drive-download-20240204T020153Z-001/IMG_3988.JPG",
  26: "drive-download-20240204T020153Z-001/IMG_3993.JPG",
  27: "drive-download-20240204T020153Z-001/IMG_4021.JPG",
  28: "drive-download-20240204T020153Z-001/IMG_4023.JPG",
};

interface Bathroom {
  id: number;
  reviews: string[];
  building: string;
  floor: number;
  roomNumber: string;
  gender: string;
  wheelchairAccessible: boolean;
  singleOccupancy: boolean;
  avgOverallRating: number;
  avgCleanlinessRating: number;
  avgSizeRating: number;
}

export default function BathroomModal({ onClose, photoId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [curBathroom, setCurBathroom] = useState<Bathroom | null>(null);

  useEffect(() => {
    fetchBathrooms();
    console.log(curBathroom);
  }, []);

  // dict of id : dict of info for each marker so on click is specific
  const fetchBathrooms = async () => {
    setIsLoading(true);

    const bathrooms = await fetch("http://localhost:8080/bathrooms/" + photoId);
    if (bathrooms.ok) {
      const bathroom = await bathrooms.json();
      console.log(bathroom);
      setCurBathroom(bathroom.data);
    }

    //setCurBathroom(testBathroom);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <img className="loading-gif" src="/loading.gif" />
          <img className="stars" src="/stars.png" />
        </div>
      )}
      <Modal closeOnOverlayClick={false} isOpen={true} onClose={onClose}>
        <div className="modal-font">
          <ModalOverlay className="modal-overlay" />
          <ModalContent className="modal-content">
            {isLoading && (
              <div className="loading-screen">
                <img className="loading-gif" src="/loading.gif" />
                <img className="stars" src="/stars.png" />
              </div>
            )}
            <ModalCloseButton
              className="close-button"
              onClick={onClose}
              style={{ backgroundColor: "var(--dark-purple100)" }}
            />
            <ModalBody className="modal-body">
              <div className="all" style={{ display: "flex", padding: "2vw" }}>
                {curBathroom && (
                  <>
                    <div
                      className="info-container"
                      style={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h1 className="building" style={{ fontSize: "4vw" }}>
                        {curBathroom.building}
                      </h1>
                      <div className="info-row">
                        <div className="field-name">Floor</div>
                        <div className="field-text">{curBathroom.floor}</div>
                      </div>
                      <div className="info-row">
                        <div className="field-name">Gender</div>
                        <div className="field-text">{curBathroom.gender}</div>
                      </div>
                      <div className="info-row">
                        <div className="field-name">Wheelchair Accessible</div>
                        <div className="field-text">
                          {curBathroom.wheelchairAccessible ? "yes" : "no"}
                        </div>
                      </div>
                      <div className="info-row">
                        <div className="field-name">Single Occupancy</div>
                        <div className="field-text">
                          {curBathroom.singleOccupancy ? "yes" : "no"}
                        </div>
                      </div>
                      <div className="main-img">
                        <img
                          src={idToImage[curBathroom.id]}
                          alt=""
                          style={{
                            borderRadius: "10px",
                            border: "3px",
                            borderColor: "var(--dark-purple100)",
                          }}
                        />
                      </div>
                      <div
                        className="carosel"
                        style={{ display: "flex" }}
                      ></div>
                    </div>
                    <div
                      className="reviews"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div className="info-row">
                        <div className="field-name">Overall</div>
                        <div className="field-text">
                          {curBathroom.avgOverallRating == -1
                            ? "N/A"
                            : curBathroom.avgOverallRating}
                        </div>
                      </div>
                      <div className="info-row">
                        <div className="field-name">Cleanliness</div>
                        <div className="field-text">
                          {curBathroom.avgCleanlinessRating == -1
                            ? "N/A"
                            : curBathroom.avgCleanlinessRating}
                        </div>
                      </div>
                      <div className="info-row">
                        <div className="field-name">Size</div>
                        <div className="field-text">
                          {curBathroom.avgSizeRating == -1
                            ? "N/A"
                            : curBathroom.avgSizeRating}
                        </div>
                      </div>

                      <div
                        className="review-list"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        {curBathroom.reviews.map((review, index) => (
                          <div key={index} className="review">
                            <p className="review-text">{review}</p>
                            <p>This is my favorite bathroom ever!</p>
                          </div>
                        ))}
                        <p className="review">
                          This is my favorite bathroom ever!
                        </p>
                        <p className="review">
                          The paper towels in this bathroom are so weird...
                        </p>
                        <p className="review">I hate this one!!!</p>
                        <p className="review">
                          The sinks have great water pressure here.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </ModalBody>
          </ModalContent>
        </div>
      </Modal>
    </>
  );
}
