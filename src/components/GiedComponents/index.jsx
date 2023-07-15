import React from "react";
import './style.css'
const GiedComponents = ({
  title,
  subTitle,
  paragraph,
  moreRead,
  image,
  nameOfImage,
}) => {
  return (
    <div className="reservation">
      <div className="text">
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{paragraph}</p>
        <div className="a-CTA">
          <a className="a-CTA2" href="#">
            {moreRead}
          </a>
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src={image} alt={nameOfImage} />
        </div>
      </div>
    </div>
  );
};

export default GiedComponents;
