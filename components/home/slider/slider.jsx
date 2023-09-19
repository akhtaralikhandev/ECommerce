"use client";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}
export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className=" overflow-hidden mt-14 mb-28 leftPadding rightPadding">
        <span className="our_clients mt-14 mb-14">OUR HAPPY CUSTOMERS</span>
        <Slider {...settings}>
          <div className="card_client m-2 w-32">
            <div className="flex items-start  justify-start">
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
            </div>
            <div className="flex items-start justify-start gap-2">
              <span className="sarah_">Sarah M.</span>
              <img src="/images/stars/tick.png" alt="" />
            </div>
            <div className="flex flex-col">
              {`  I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casua wear to elegant dresses, every piece I've
              bought as exceeded my expectations.`}
            </div>
          </div>
          <div className="card_client m-2 w-32">
            <div className="flex items-start  justify-start">
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
            </div>
            <div className="flex items-start justify-start gap-2">
              <span className="sarah_">Sarah M.</span>
              <img src="/images/stars/tick.png" alt="" />
            </div>
            <div className="flex flex-col">
              {` I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casua wear to elegant dresses, every piece I've
              bought as exceeded my expectations. `}
            </div>
          </div>
          <div className="card_client m-2 w-32">
            <div className="flex items-start  justify-start">
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
            </div>
            <div className="flex items-start justify-start gap-2">
              <span className="sarah_">Sarah M.</span>
              <img src="/images/stars/tick.png" alt="" />
            </div>
            <div className="flex flex-col">
              {`     I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casua wear to elegant dresses, every piece I've
              bought as exceeded my expectations.`}
            </div>
          </div>
          <div className="card_client m-2">
            <div className="flex items-start  justify-start">
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
            </div>
            <div className="flex items-start justify-start gap-2">
              <span className="sarah_">Sarah M.</span>
              <img src="/images/stars/tick.png" alt="" />
            </div>
            <div className="flex flex-col">
              {` I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casua wear to elegant dresses, every piece I've
              bought as exceeded my expectations. `}
            </div>
          </div>
          <div className="card_client m-2">
            <div className="flex items-start  justify-start">
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
            </div>
            <div className="flex items-start justify-start gap-2">
              <span className="sarah_">Sarah M.</span>
              <img src="/images/stars/tick.png" alt="" />
            </div>
            <div className="flex flex-col">
              {`    I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casua wear to elegant dresses, every piece I've
              bought as exceeded my expectations.`}
            </div>
          </div>
          <div className="card_client m-2">
            <div className="flex items-start  justify-start">
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
              <img src="/images/stars/Star 1.png" alt="" />
            </div>
            <div className="flex items-start justify-start gap-2">
              <span className="sarah_">Sarah M.</span>
              <img src="/images/stars/tick.png" alt="" />
            </div>
            <div className="flex flex-col">
              {`I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casua wear to elegant dresses, every piece I've
              bought as exceeded my expectations. `}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
