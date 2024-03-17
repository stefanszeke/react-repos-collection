import "./Card.css";
import Button from "./Button/Button";
import PropTypes from "prop-types";

function Card2(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
        <Button />
    </div>
  );
}

Card2.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

Card2.defaultProps = {
  img: "https://via.placeholder.com/150",
  title: "Placeholder",
  description: "Placeholder"
}

export default Card2;
