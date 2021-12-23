import React from "react";
import "./Card.css";

const PromotionCard = ({ promotion }) => (
  <div className="promotion-card">
    <img src={promotion.imageUrl} className="promotion-card__image" />
    <div className="promotion-card__info">
      <h1 className="promotion-card__title">{promotion.title}</h1>
      <span className="promotion-card__price">R$ {promotion.price}</span>
      <footer className="promotion-card__footer">
        {promotion.comments.length > 0 && (
          <div>{promotion.comments[0].comment}</div>
        )}
      </footer>
    </div>
  </div>
);

export default PromotionCard;
