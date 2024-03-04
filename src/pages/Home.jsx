import React from "react";
import Logohidzie from "../images/Logohidzie1.png";
import Hoodie from "../images/hoodie.jpg";
import Baju from "../images/baju.jpg";
import Pants from "../images/pants.jpg";
import Button from "../component/Button";
const Home = () => {
  return (
    <div className="">
      <div className="bg-black w-full h-[700px] flex flex-col justify-center items-center">
        <div className="w-40">
          <img className="items-center" src={Logohidzie} alt="" />
        </div>
        <h1 className="text-white font-bold text-6xl">HIDZIE</h1>
        <Button />
      </div>
      <div className="w-56 my-6 mx-auto">
        <img className="items-center" src={Logohidzie} alt="" />
      </div>
      <div className="text-center my-6 mx-auto">
        <h1 className="font-bold text-4xl items-center">
          Produk Unggulan Kami
        </h1>
      </div>
      <div className="flex justify-center my-28 gap-10">
        <div className="w-96 h-[480px] bg-black rounded-3xl relative">
          <img
            src={Baju}
            alt=""
            className="h-full w-full object-cover rounded-3xl opacity-50"
          />
          <span className="absolute inset-0 flex flex-col justify-end items-center text-white font-bold mx-7 mb-9">
            <div>
              <h1 className="text-5xl">Baju</h1>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </span>
          {/* kolom 1 */}
        </div>
        <div className="w-96 h-[480px] bg-black rounded-3xl relative">
          <img
            src={Pants}
            alt=""
            className="h-full w-full object-cover rounded-3xl opacity-50"
          />
          <span className="absolute inset-0 flex flex-col justify-end items-center text-white font-bold mx-7 mb-9">
            <div>
              <h1 className="text-5xl">Celana</h1>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </span>
          {/* kolom 2 */}
        </div>
        <div className="w-96 h-[480px] bg-black rounded-3xl relative">
          <img
            src={Hoodie}
            alt=""
            className="h-full w-full object-cover rounded-3xl opacity-50"
          />
          <span className="absolute inset-0 flex flex-col justify-end items-center text-white font-bold mx-7 mb-9">
            <div>
              <h1 className="text-5xl">Hoodie</h1>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </span>
          {/* kolom 3 */}
        </div>
      </div>
      <div className="bg-orange-100 w-full h-screen">
        <div className="py-12">
          <h2 className="text-center text-3xl font-bold font-[Poppins]">
            Produk Terbaru Kami
          </h2>
        </div>
        <div className="flex justify-center items-center gap-6 mt-8">
          <div className="bg-gray-500 w-64 h-72">kotak 1</div>
          <div className="bg-gray-500 w-64 h-72">kotak 2</div>
          <div className="bg-gray-500 w-64 h-72">kotak 3</div>
          <div className="bg-gray-500 w-64 h-72">kotak 4</div>
          <div className="bg-gray-500 w-64 h-72">kotak 5</div>
        </div>
        <div className="flex justify-center items-center gap-6 mb-8 py-6">
          <div className="bg-gray-500 w-64 h-72">kotak 1</div>
          <div className="bg-gray-500 w-64 h-72">kotak 2</div>
          <div className="bg-gray-500 w-64 h-72">kotak 3</div>
          <div className="bg-gray-500 w-64 h-72">kotak 4</div>
          <div className="bg-gray-500 w-64 h-72">kotak 5</div>
        </div>
        <div>next content</div>
      </div>
    </div>
  );
};

export default Home;
