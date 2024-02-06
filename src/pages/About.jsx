import React from "react";
import SideBar from "../components/Sidebar/SideBar";

const About = () => {
  return (
    <div className="section flex justify-center w-full gap-[10px]">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start main w-[90%]">
        <div className="side w-[25%]">
          <div className="Sidebar">
            <SideBar />
          </div>
        </div>
        <div className="content flex flex-col gap-6 w-[75%] pb-3">
          <h1 className="text-[#f38f50] font-bold md:font-extrabold text-xl md:font-2xl mt-3">
            About Bethany's Pie Shop
          </h1>
          <p className=" font-bold">
            In this videos you see how we create our pies
          </p>
          <iframe
            width="90%"
            height="450"
            src="https://www.youtube.com/embed/PSXAXST7Row?si=0mmG9lleDyk9fVFa"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
