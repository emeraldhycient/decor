import React, { useState } from "react";
import StartportBtn from "./startportBtn";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";

function OfferSection() {
  const [images, setimages] = useState([
    { id: 23, src: "/images/apart3.png" },
    { id: 34, src: "/images/apart1.png" },
    { id: 45, src: "/images/apart2.png" },
  ]);

  return (
    <section
      className="h-fit md:h-[92vh]"
      style={{
        backgroundImage: `url(/images/sun.png)`,
        backgroundSize: "contain",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-fit md:h-[92vh]"
        style={{ backgroundColor: "rgba(0,0,0,.2)" }}
      >
        <div className="w-fit mx-5 md:mx-auto md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          <div className="w-full h-fit md:h-[80vh]">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
            >
              <Slider
                className="bg-white h-fit md:h-[72vh]"
                isPlaying={true}
                infinite={true}
              >
                {images.map((image) => (
                  <Slide key={image.id}>
                    <Image
                      src={image.src}
                      height={500}
                      width={550}
                      alt="Mpdesigns images"
                    />
                  </Slide>
                ))}
              </Slider>
              <ButtonBack className="bg-white border-[.012rem] border-[#396051] rounded px-5 py-2 mx-3 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                </svg>{" "}
              </ButtonBack>
              <ButtonNext className="bg-white border-[.012rem] border-[#396051] rounded px-5 py-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>{" "}
              </ButtonNext>
            </CarouselProvider>
          </div>
          <div className="bg-white w-full h-fit md:h-[80vh] rounded pt-12">
            <div className="my-3 mx-5">
              <h1 className="text-4xl md:text-5xl font-extrabold md:font-extrabold  text-slate-800 mt-2 tracking-wide leading-normal md:leading-tight">
                Natural
                <br /> inspiration in <br /> every room
              </h1>
              <p className="mt-4 text-gray-400">
                The latest interior trend making its way around video sharing
                app TikTok? Anything coastal grandmother, an aesthetic coined by
              </p>
              <StartportBtn color="text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
