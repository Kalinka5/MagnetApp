import { useEffect, useState } from "react";

import img1 from "../_next/brand1.png";
import img2 from "../_next/brand2.png";
import img3 from "../_next/brand3.png";
import img4 from "../_next/brand7.png";
import img5 from "../_next/brand4.png";
import img6 from "../_next/brand5.png";
import img7 from "../_next/brand6.png";
import img8 from "../_next/brand8.png";
import img9 from "../_next/brand9.png";

function Carousel(props) {
  const page = props.page;
  const [style, setStyle] = useState("");

  const [slide, setSlide] = useState(0);
  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  useEffect(() => {
    if (page === "whoweare") {
      setStyle("md:w-full m-auto");
    } else if (page === "clients") {
      setStyle("w-full m-auto bg-white");
    } else if (page === "candidates") {
      setStyle("w-full bg-white md:h-44 md:px-10");
    } else if (page === "home") {
      setStyle("w-full mx-auto");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      <div className={style}>
        <div className="w-full">
          <div className="mx-auto px-16 max-h-[300px]">
            <div
              className="slick-slider w-full p-2 slick-initialized"
              dir="ltr"
            >
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-prev"
                style={{ display: "block" }}
              >
                Previous
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: "700%",
                    left: "-100%",
                    transform: `translateX(-${slide * 4.761904761904762}%)`,
                    transition: "transform 1s ease-in-out",
                  }}
                >
                  <div
                    data-index="-3"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img7} 1x, ${img7} 2x`}
                          src={img7}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-2"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img8} 1x, ${img8} 2x`}
                          src={img8}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-1"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img9} 1x, ${img9} 2x`}
                          src={img9}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="0"
                    className="slick-slide slick-active slick-current"
                    tabIndex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img1} 1x, ${img1} 2x`}
                          src={img1}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    className="slick-slide slick-active"
                    tabIndex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img2} 1x, ${img2} 2x`}
                          src={img2}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    className="slick-slide slick-active"
                    tabIndex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img3} 1x, ${img3} 2x`}
                          src={img3}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                    className="slick-slide"
                    tabIndex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img4} 1x, ${img4} 2x`}
                          src={img4}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                    className="slick-slide"
                    tabIndex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img5} 1x, ${img5} 2x`}
                          src={img5}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="5"
                    className="slick-slide"
                    tabIndex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img6} 1x, ${img6} 2x`}
                          src={img6}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="6"
                    className="slick-slide"
                    tabIndex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img7} 1x, ${img7} 2x`}
                          src={img7}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="7"
                    className="slick-slide"
                    tabIndex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img8} 1x, ${img8} 2x`}
                          src={img8}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="8"
                    className="slick-slide"
                    tabIndex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img9} 1x, ${img9} 2x`}
                          src={img9}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="9"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img1} 1x, ${img1} 2x`}
                          src={img1}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="10"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img2} 1x, ${img2} 2x`}
                          src={img2}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="11"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img3} 1x, ${img3} 2x`}
                          src={img3}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="12"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img4} 1x, ${img4} 2x`}
                          src={img4}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="13"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img5} 1x, ${img5} 2x`}
                          src={img5}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="14"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img6} 1x, ${img6} 2x`}
                          src={img6}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="15"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img7} 1x, ${img7} 2x`}
                          src={img7}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="16"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img8} 1x, ${img8} 2x`}
                          src={img8}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="17"
                    tabIndex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.761904761904762%" }}
                  >
                    <div>
                      <div
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          alt="/"
                          srcSet={`${img9} 1x, ${img9} 2x`}
                          src={img9}
                          width="400"
                          height="1"
                          decoding="async"
                          data-nimg="1"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-next"
                style={{ display: "block" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
