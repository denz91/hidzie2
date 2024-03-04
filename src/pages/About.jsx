import React from "react";
import About_us from "../images/aboutus.jpg";
import Aboutus from "../images/about.jpg";

const About = () => {
  return (
    <div>
      <div className="bg-black w-full h-[560px] flex flex-col justify-center items-center">
        <div className="text-center ">
          <h3 className="text-white font-bold text-6xl">ABOUT US</h3>
        </div>
      </div>
      <div className="bg-orange-50 w-full h-[480px] flex">
        <div className="flex py-10 px-10">
          <div className=" w-full flex flex-col justify-center items-start ml-36">
            <h2 className="text-5xl font-bold">Who We Are?</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
                nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
                vitae erat consequat auctor eu in elit.
              </p>
            </div>
          </div>
          <div className=" w-full justify-center items-center ml-40">
            <img
              src={Aboutus}
              alt=""
              className="object-cover h-full max-w-full ml-auto"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-slate-400 w-[780px] flex flex-col justify-center text-center">
            <div>
              <h2 className="font-bold text-2xl">A Few Words About</h2>
            </div>
            <div>
              <h2 className="font-bold text-4xl">Our Team</h2>
            </div>
            <div>
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra.
              </p>
            </div>
          </div>
        </div>
        <div>New Content</div>
      </div>
    </div>
  );
};

export default About;
