import React from "react";
import About_us from "../images/aboutus.jpg";
import Aboutus from "../images/about.jpg";
import Instagram from "../images/icon/instagram.svg";
import Tiktok from "../images/icon/tik-tok.svg";
import Twitter from "../images/icon/twitter.svg";
import Facebook from "../images/icon/facebook.svg";
import Orang1 from "../images/orang1.jpg";
import Orang2 from "../images/orang2.jpg";
import Orang3 from "../images/orang3.jpg";

const About = () => {
  return (
    <div>
      <div className="bg-black bg-fixed w-full h-[620px] flex flex-col justify-center items-center">
        {/* <div className="w-full h-[620px] flex flex-col justify-center items-center">
        <img src={About_us} alt="" className="h-full w-full object-cover" /> */}
        <div className="text-center ">
          <h3 className="text-white font-bold text-6xl">ABOUT US</h3>
        </div>
      </div>
      <div className="bg-orange-50 w-full h-[480px] flex font-[Poppins]">
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
        <div className=" w-full h-[720px] font-[Poppins]">
          <div className="bg-slate-400 w-full flex flex-col justify-center items-center text-center">
            <div>
              <h2 className="font-bold text-2xl pt-[5rem]">
                A Few Words About
              </h2>
            </div>
            <div>
              <h2 className="font-bold text-4xl mt-6">Our Team</h2>
            </div>
            <div className="w-[1024px] mt-6">
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra.
              </p>
            </div>
          </div>
          <div className="bg-orange-500 h-[720px] flex flex-col justify-center items-center">
            <div className="flex flex-wrap gap-4 ">
              <div className="bg-white w-[18rem] h-[18rem] rounded-md">
                <div>
                  <figure className="bg-slate-100  p-8 dark:bg-slate-800 h-[13rem]">
                    <img
                      className="w-24 h-24 rounded-full mx-auto"
                      src={Orang1}
                      alt=""
                    />
                  </figure>
                </div>
                <h2 className="text-3xl text-center font-bold">
                  Harvey Spector
                </h2>
                <p className="text-center text-[24px]">CEO</p>
              </div>
              <div className="bg-gray-600 w-[18rem] h-[18rem] rounded-md">
                <figure className="bg-slate-100  p-8 dark:bg-slate-800 h-[13rem]">
                  <img
                    className="w-24 h-24 rounded-full mx-auto"
                    src={Orang2}
                    alt=""
                  />
                </figure>
                <h2 className="text-3xl font-bold text-center">
                  Jessica Pearson
                </h2>
                <p>text</p>
              </div>
              <div className="bg-gray-800 w-[18rem] h-[18rem] rounded-md">
                <figure className="bg-slate-100  p-8 dark:bg-slate-800 h-[13rem]">
                  <img
                    className="w-24 h-24 rounded-full mx-auto"
                    src={Orang3}
                    alt=""
                  />
                </figure>
                <h2 className="text-3xl font-bold text-center">Rachel Zain</h2>
                <p>text</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white w-[18rem] h-[18rem] rounded-md">
                <h2 className="text-3xl font-bold text-center">Luise Litt</h2>
                <p>text</p>
              </div>
              <div className="bg-gray-600 w-[18rem] h-[18rem] rounded-md">
                <h2 className="text-3xl font-bold text-center">
                  Katrina Bennett
                </h2>
                <p>text</p>
              </div>
              <div className="bg-gray-800 w-[18rem] h-[18rem] rounded-md">
                <h2 className="text-3xl font-bold text-center">Mike Ross</h2>
                <p>text</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-600 w-full h-auto flex flex-col items-center">
            <div className="bg-white w-[400px] h-[450px] items-center justify-center">
              <div className="flex flex-col justify-center items-center mt-[13rem]">
                <h1 className="text-5xl font-bold font-[Poppins] text-center">
                  Follow Us
                </h1>
              </div>
              <div className="flex justify-center items-center mt-[5rem] gap-9">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} alt="Instagram" className="w-[40px]" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Tiktok} alt="" className="w-[40px]" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="" className="w-[40px]" />
                </a>
                {/* <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Facebook} alt="" className="w-[40px]" />
                </a> */}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative">
                    <img src={Facebook} alt="" className="w-[40px]" />
                  </span>
                </a>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
