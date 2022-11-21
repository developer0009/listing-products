import React from "react";
import { categories } from "../utils/constants";
import { Link, Navigate } from "react-router-dom";
const Navbar = ({ button }) => {
  const handleClick = (evt) => {
    console.log("iam clickked");
    return <Navigate to={"/product/cart"} />;
  };
  return (
    <div className="nav">
      <div className="first d-flex">
        <div class="dropdown ">
          <a
            class="btn btn-secondary dropdown-toggle btn btn-light rounded"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </a>

          <ul class="dropdown-menu">
            {categories.map((str) => (
              <li>
                <Link to={"/" + str} className="dropdown-item">
                  {str[0].toUpperCase() + str.substring(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="reset d-inline align-self-start my-auto text-danger"
          style={{ alignSelf: "self-start" }}
        >
          {" "}
          RESET{" "}
          <Link to="/" className="text-danger">
            {" "}
            <i class="fa-solid fa-clock-rotate-left"></i>{" "}
          </Link>
        </div>
      </div>
      <div className="search-button  " style={{ marginLeft: "auto" }}>
        <h5 className="fw-bold d-inline" style={{ fontWeight: "bolder" }}>
          {" "}
          Search{" "}
        </h5>
        :{" "}
        <input
          type="text"
          placeholder="Product Name"
          style={{ marginRight: "10px" }}
        />
        <button
          ref={button}
          className="btn "
          disabled
          style={{
            cursor: "pointer",
            objectFit: "contain",
            padding: 0,
          }}
        >
          <Link
            to={"/product/cart"}
            style={{
              display: "block",
              // border: "2px solid red",
              objectFit: "cover",
              textDecoration: "none",
            }}
            className="link link2 text-light btn btn-sm rounded-pill btn-info "
          >
            Add To Cart
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
