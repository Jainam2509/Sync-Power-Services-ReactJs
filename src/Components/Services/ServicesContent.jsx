import React, { useState, useRef, useLayoutEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import gsap from "gsap";

const ServicesContent = ({
  images,
  lines,
  title,
  subLine,
  imageURl,
  mainParagraph,
  sliderParagraph,
  bottomParagraph,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextIndex = () => {
    const lastSlide = currentIndex === images.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // animation code
  const animate = useRef(null);

  useLayoutEffect(() => {
    const animateElement = animate.current.children;
    console.log(animateElement);
    gsap.from(animateElement, {
      yPercent: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.6,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="pt-10 w-full h-full font-['Open_Sans'] mb-10">
      {/* Heading */}
      <h1 className="capitalize text-3xl mb-3  font-thin text-zinc-900">
        {title}
      </h1>

      {/* Line and logo */}
      <div className="flex ">
        {/* Line */}
        <div className="w-[85%]">
          <p className=" text-zinc-400 text-lg my-6 leading-6 text-justify">
            {subLine}
          </p>
        </div>
        {/* Logo */}
        <div className="ml-5 pt-3">
          <img src={imageURl} alt={title} />
        </div>
      </div>

      {/* Paragraph */}
      <p className="my-1 text-justify text-sm leading-8 font-medium text-zinc-500">
        {mainParagraph}
      </p>

      {/* Text and Image slider */}
      <div className="flex flex-col lg:flex-row gap-4 my-8">
        {/* text */}
        <div className="lg:w-1/2 w-full">
          <p className=" text-zinc-500 text-sm leading-6 text-justify">
            {sliderParagraph}
          </p>
        </div>
        {/* slider */}
        <div className="lg:w-1/2 w-full h-44 bg-center bg-cover relative  group">
          <div
            style={{ backgroundImage: `url(${images[currentIndex].url})` }}
            className="w-full h-full bg-cover object-contain  duration-500"
          ></div>

          {/* Left Arrow */}
          <div
            onClick={prevIndex}
            className="absolute  -translate-x-0 top-[50%] translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black hidden group-hover:block "
          >
            <BsChevronCompactLeft size={30} />
          </div>
          <div
            onClick={nextIndex}
            className="absolute  -translate-x-0 top-[50%] translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  hover:bg-black hidden group-hover:block"
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      </div>

      {/*Bottom paragraph */}
      <p className=" mb-8 text-zinc-600 text-sm my-6 leading-6 text-justify">
        {bottomParagraph}
      </p>

      {/* Sub heading */}
      <h1 className="capitalize text-xl sm:text-2xl font-thin text-zinc-900">
        Our Progress
      </h1>

      {/* Features lines */}
      <div ref={animate} className="my-3 flex flex-col mt-5 gap-5">
        {lines.map((line, index) => (
          <h3 className=" text-zinc-600 text-sm text-justify">
            <FaCheck color="orangered" className="inline mr-3" /> {line}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default ServicesContent;
