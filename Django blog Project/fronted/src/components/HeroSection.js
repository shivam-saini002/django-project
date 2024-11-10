import React from "react";
import Typed from "react-typed";
import { ImCheckmark } from "react-icons/im";
import { Link } from "react-router-dom";

//document ready




//define hero section where animation is working..
const HeroSection = () => {
  return (
    <div className="">
      <div
        className="mt-2 container mx-auto px-4 py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/pencil.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center">
          <Typed
            className="text-3xl md:text-4xl font-mono mb-4 text-green-800"
            strings={["Welcome to Our Blog....... "]}
            typeSpeed={70}
            backSpeed={70}
            loop={true}
          />

          <br />
          <p className="text-lg md:text-xl mb-8 text-green-800 font-mono">
            "Explore The Latest Technical Articles and stay Updated We Always
            With You!"
          </p>
          <Link
            to="/MyBlog"
            className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-40 text-center"
          >
            Get Started
          </Link>
        </div>
      </div>

      <h1 className="text-center text-3xl font-mono text-gray-700 font-bold mt-8">
        "Reasons To Read Our Blog"
      </h1>
    </div>
  );
};


//display the check marks and title of our blog(basically refer to the card)
const SpecialityCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="bg-gray-600 p-4">
        <div className="flex items-center justify-center h-12 w-12 bg-blue-500 text-white rounded-full">
          <ImCheckmark />
        </div>
      </div>
      <div className="px-2 py-4">
        <div className="font-bold font-mono text-gray-700 text-xl mb-2">
          {title}
        </div>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
      </div>
    </div>
  );
};


//cretaed a footer where are some useful link for users
export const Foot = () => {
  return (
    <footer className="bg-gray-700 mt-2 py-8 rounded">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="text-xl font-bold mb-4 text-white">Social Links</h2>
            <ul className="text-white">
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/sachin-saini-652a02232/"
                  className="hover:text-gray-300"
                >
                  Website
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/sainisachin602060"
                  className="hover:text-gray-300"
                >
                  Github
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.example.com"
                  className="hover:text-gray-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="text-xl font-bold mb-4 text-white">Blog Catogery</h2>
            <ul className="text-white">
              <li className="mb-2">
                <p className="hover:text-gray-300 font-mono">
                  PYTHON
                </p>
              </li>
              <li className="mb-2">
                <p className="hover:text-gray-300 font-mono">
                  JAVA
                </p>
              </li>
              <li className="mb-2">
                <p className="hover:text-gray-300 font-mono">
                  C++
                </p>
              </li>
              <li className="mb-2">
                <p className="hover:text-gray-300 font-mono">
                  DSA
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-white text-center">
        Copyright © 2023. All Rights Reserved
      </h1>
    </footer>
  );
};


// blog feactures with icon define in this component
const Footer = () => {
  const specialities = [
    {
      title: "READABLE",

      icon: <i className="fas fa-book text-3xl"></i>,
    },
    {
      title: "EASY TO UNDERSTAND",
      description:
        "Our articles are written in a clear and easy-to-understand manner.",
      icon: <i className="fas fa-lightbulb text-3xl"></i>,
    },
    {
      title: "CLEAR CONTENT",
      description:
        "Our all content is written in such manner all user can read it.",
      icon: <i className="fas fa-book text-3xl"></i>,
    },
    {
      title: "PROPER EXAMPLE",
      description:
        "We focus on providing concise and straightforward explanations.",
      icon: <i className="fas fa-lightbulb text-3xl"></i>,
    },
    // Add more specialities here
    {
      title: "WITH CODE SNIPPET",
      description:
        "Our articles are written in a clear and easy-to-understand manner.",
      icon: <i className="fas fa-book text-3xl"></i>,
    },
    {
      title: "CUSTOM SUPPORT",
      description:
        "We focus on providing concise and straightforward explanations.",
      icon: <i className="fas fa-lightbulb text-3xl"></i>,
    },
    // Add more specialities here
  ];

  return (
    //define the content of our blog
    <footer>
      {/* render the hero section inside component */}
      <HeroSection />
      <div className="container mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {specialities.map((speciality, index) => (
            <SpecialityCard
              key={index}
              title={speciality.title}
              description={speciality.description}
              icon={speciality.icon}
            />
          ))}
        </div>
        <Foot />
      </div>
    </footer>
  );
};

export default Footer;
