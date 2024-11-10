import React from "react";
import { Link } from "react-router-dom";



//document ready
const About = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto">

        <h1 className="text-4xl font-Mono mb-8 text-gray-600">
          Join us For write something
        </h1>

        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/myimage.jpg"
            alt="images"
            className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 rounded-xl"
            style={{ maxWidth: "500px"}}
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-sans mb-4">Our Blog Portal</h2>
            <p className="text-lg mb-4 text-blue-500 font-mono">
              Welcome to our Tech blog website! We are passionate about sharing
              technical knowledge and insights with our readers. Whether you are
              a beginner or an experienced professional, our blog offers a wide
              range of technical articles to help you stay up-to-date with the
              latest trends and developments-{" "}
              <span className="mt-2 font-mono text-red-600 text-xl">
                SACHIN SAINI
              </span>
            </p>

          {/* our connection link */}
            <p>Lets Connect With Me!</p>
            <ul className="">
              <li className="mb-2">
                <a
                  href="https://github.com/sainisachin602060"
                  className="text-blue-900 underline"
                >
                  Github
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.example.com"
                  className="text-blue-900 underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <br />

          {/* button for send a query      */}

            <Link
              to="/Contact"
              className="bg-green-800 text-white text-center p-4 w-60"
            >
              Send Message
            </Link>
          </div>
        </div>
      </div>

      
   
    </section>
   
  );
};

export default About;
