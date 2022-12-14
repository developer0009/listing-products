import React, { useState } from "react";
import { categories } from "../utils/constants";
import { Link } from "react-router-dom";
import { checkPattern } from "../utils/constants";
const Navbar = ({ button, row, setSearchRow, selectRow }) => {
  const [search, setSearch] = useState("");
  const handleChange = (evt) => {
    setSearch(() => evt.target.value);
    const regex = new RegExp(`${evt.target.value}\w*`, "gmi");
    const array = checkPattern(row, regex);
    if (evt.target.value && array.length > 0) setSearchRow(() => array);
    if (!evt.target.value) setSearchRow([]);
  };
  const handleClick = () => {
    setSearch("");
    setSearchRow([]);
  };
  return (
    <div className="nav">
      <div className="first d-flex firstMedia">
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
          <a
            href="/"
            className="text-danger"
            onClick={handleClick}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <i class="fa-solid fa-clock-rotate-left"></i>{" "}
          </a>
          {/* <Link to="/" className="text-danger" onClick={handleClick}>
            {" "}
            <i class="fa-solid fa-clock-rotate-left"></i>{" "}
          </Link> */}
        </div>
      </div>
      <div
        className="search-button searchMedia "
        style={{ marginLeft: "auto" }}
        id="second"
      >
        <h5 className="fw-bold d-inline" style={{ fontWeight: "bolder" }}>
          {" "}
          Search{" "}
        </h5>
        :{" "}
        <input
          type="text"
          placeholder="Product Name"
          style={{ marginRight: "10px" }}
          value={search}
          onChange={handleChange}
          defaultValue={search}
        />
        <button
          ref={button}
          className="btn secondbutton"
          disabled={selectRow.length > 0 ? false : true}
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
            className={`link link2 text-light btn btn-sm rounded-pill ${
              selectRow.length > 0 ? `btn-success` : `btn-info`
            } `}
          >
            {selectRow.length > 0 ? `Check Cart` : `Add To Cart`}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
