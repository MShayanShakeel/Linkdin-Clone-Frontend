import React from "react";
import "./Banner.css";
import BannerImg from "../../Images/jobspicture.png";

const Banner = () => {
  return (
    <>
      <div className="row banner-main">
        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <div className="Banner-contant">
            <h1>Find a Jobs that suits your intres and Skills </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates aliquam iusto maiores amet non cupiditate reprehenderit
              quibusdam, sunt recusandae eum, ea voluptate earum qui a nam
              dicta, laboriosam tempore sed.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <div className="Left-side">
            <img src={BannerImg} alt="BannerImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
