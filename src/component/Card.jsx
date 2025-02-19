import React from "react";
import { FaShareAlt, FaHeart, FaComment } from "react-icons/fa"; // Import FAB icons
import Style from "./Card.module.css";

const Card = ({ title, ReleaseDate, director, duration, genre, description, posterImg, mainImg }) => {
    return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${mainImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={Style.container}
    >
      <div className={Style.details}>
        <div className={Style.firstHalf}>
          <img src={posterImg} alt="image" />
          <div className={Style.subDetails}>
            <div className={Style.subpart}>
              <h3>{title}</h3>
              <div className={Style.year}>
                <p style={{ fontSize: "16px" }}>{ReleaseDate},</p>
                <p style={{ fontSize: "16px" }}>{director}</p>
              </div>
            </div>
            <div className={Style.timegenre}>
              <p style={{ border: "1px solid", fontSize: "12px" }}>{duration}</p>
              <p style={{ fontSize: "14px" }}>{genre}</p>
            </div>
          </div>
        </div>
        <p style={{ maxWidth: "350px" }}>{description}</p>
      </div>

      {/* Floating Action Buttons (FAB) */}
      <div className={Style.fabContainer}>
        <FaHeart className={Style.fabIcon} title="Like" />
        <FaComment className={Style.fabIcon} title="Comment" />
        <FaShareAlt className={Style.fabIcon} title="Share" />
      </div>
    </div>
  );
};

export default Card;
