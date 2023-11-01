import React, { useState } from "react";

const ImageGallery = () => {
  //event handler for checking every pictures action
  const handleCategory = (e) => {
    console.log("Okay");
  };
  return (
    <main className="section-padding">
      <section className="wrapper  bg-[#fefefe]  divide-y-4 rounded-lg">
        <h1 className="px-10 py-5 font-semibold text-2xl  divide-slate-700">
          Gallery
        </h1>
        {/* Grid Items */}
        <div className="categories grid gap-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:text-4xl text-2xl text-center font-medium text-gray-50 px-10 py-8 ">
          <div
            className="photo1  sm:row-span-2 sm:col-span-2 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Engine Parts"
            onClick={handleCategory}
          >
            Photo2
          </div>
          <div
            className="photo2 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Cummins Engine Spare Parts"
            onClick={handleCategory}
          >
            Photo3
          </div>
          <div
            className="photo3 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Cummins Spare Parts"
            onClick={handleCategory}
          >
            Photo4
          </div>
          <div
            className="photo4 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Automotive Engine Parts"
            onClick={handleCategory}
          >
            Photo5
          </div>
          <div
            className="photo5 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Caterpillar Engine Parts"
            onClick={handleCategory}
          >
            Photo6
          </div>
          <div
            className="photo5 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Caterpillar Engine Parts"
            onClick={handleCategory}
          >
            Photo7
          </div>
          <div
            className="photo5 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Caterpillar Engine Parts"
            onClick={handleCategory}
          >
            Photo8
          </div>
          <div
            className="photo5 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Caterpillar Engine Parts"
            onClick={handleCategory}
          >
            Photo9
          </div>
          <div
            className="photo5 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Caterpillar Engine Parts"
            onClick={handleCategory}
          >
            Photo10
          </div>
          <div
            className="photo5 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Caterpillar Engine Parts"
            onClick={handleCategory}
          >
            Photo11
          </div>
          <div
            className="photo5 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Caterpillar Engine Parts"
            onClick={handleCategory}
          >
            Photo12
          </div>
          <div
            className="photo5 h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
            data-category="Caterpillar Engine Parts"
            onClick={handleCategory}
          >
            Photo13
          </div>
        </div>
      </section>
    </main>
  );
};

export default ImageGallery;
