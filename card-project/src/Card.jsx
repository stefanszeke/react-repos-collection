import "./Card.css";
import Button from "./Button/Button";

function Card({ img, title, description }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
        <Button />
    </div>
  );
}

export default Card;
