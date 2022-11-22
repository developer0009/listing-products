import React from "react";

const Rating = ({ rating, total, color = "#f8e825" }) => {
  return (
    <div className="rating mb-1">
      <span>
        {" "}
        {rating >= 1 ? (
          <i className="fa-solid fa-star" style={{ color }}></i>
        ) : rating >= 0.5 ? (
          <i className="fa-solid fa-star-half-stroke" style={{ color }}></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
      <span>
        {" "}
        {rating >= 2 ? (
          <i className="fa-solid fa-star" style={{ color }}></i>
        ) : rating >= 1.5 ? (
          <i className="fa-solid fa-star-half-stroke" style={{ color }}></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
      <span>
        {" "}
        {rating >= 3 ? (
          <i className="fa-solid fa-star" style={{ color }}></i>
        ) : rating >= 2.5 ? (
          <i className="fa-solid fa-star-half-stroke" style={{ color }}></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
      <span>
        {" "}
        {rating >= 4 ? (
          <i className="fa-solid fa-star" style={{ color }}></i>
        ) : rating >= 3.5 ? (
          <i className="fa-solid fa-star-half-stroke" style={{ color }}></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
      <span>
        {" "}
        {rating >= 5 ? (
          <i className="fa-solid fa-star" style={{ color }}></i>
        ) : rating >= 4.5 ? (
          <i className="fa-solid fa-star-half-stroke" style={{ color }}></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
      <span className="text-dark ml-auto"> {` ${rating}`}</span>
    </div>
  );
};

export default Rating;
