import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//document ready

//component of blog
function MyBlog() {
  const [blog, setBlog] = useState(null);


  // const [searchblog, setsearchblog] = useState(null);




  
   const [category, setcategory] = useState('');

  const handleCatogeryChange = (event,linkdata) => {
    
      setcategory(event.target.value);
  
   
  };


  const handlesearch=()=>{
    axios.get(`http://127.0.0.1:8000/all/Blog/data//?Catogery=${category}`).then(response=>{
      setBlog(response.data)
     
    })
    .catch(error=>console.log("some error"))
  }
 

  //fetch the blog data using api(from backend)
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all/Blog/data//")
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {});
  }, []);

  //render the blog in the card form(render the api data )
  return (
    <div
      className="container mx-auto "
      style={{ backgroundImage: "url('/Book6.jpg')" }}
    >
      <h1 className="text-3xl text-white mb-4 text-center font-mono underline mt-4 ">
        Some Most Popular Blog 2023
      </h1>

     
   <select name="category" value={category} onChange={handleCatogeryChange}  className="p-4 w-72 ml-20">
      <option value="Search">Search</option>
      <option value="Python">Python</option>
      <option value="Java">Java</option>
      <option value="Data Structures">Data Structures </option>
      <option value="Data Science">Data Science </option>
      <option value="Javascript">Javascript </option>
      <option value="C++">C++</option>
      <option value="Chatgpt">Chatgpt</option>
     </select>
     <button onClick={handlesearch} className="p-4 w-28 ml-2 bg-indigo-800 text-white">Search</button>
       


      {/* 

      {isNameEntered ? (
        <h2 className="text-xl text-green-700s text-center font-mono">
          Welcome, {name}!
        </h2>
      ) : (
        <form className="text-center" onSubmit={handleNameSubmit}>
        
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={handleNameInputChange}
            className="mx-auto border-2 border-gray-300 p-2 ml-1  outline-none"
            required
            placeholder="Enter Your Name"
          />
          <button type="submit" className="bg-blue-900 text-white p-2 mt-2 ml-1">
            Submit
          </button>
        </form>
      )}




 */}

      {blog ? (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
         
        
         
          {blog.map((e, index) => (
            <div key={index} className="p-4">
              <section className="text-gray-60s0 body-font">
                
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24  overflow-hidden text-center relative">
                  <div className="mb-4">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="mx-auto rounded-md w-full h-full object-cover "
                    />
                  </div>
                  <h2 className="tracking-widest text-xs title-font font-mono text-gray-700 mb-1">
                    CATEGORY
                  </h2>
                  <span>
                    <p className="leading-relaxed mb-3 font-bold">
                      {e.Catogery}
                    </p>
                  </span>
                  <h1 className="title-font sm:text-2xl text-xl  text-gray-800 mb-3 font-mono ">
                    {e.title}
                  </h1>
                  <br />

                  <Link
                    to={`/each/${e.id}`}
                    className="bg-blue-900 text-white w-96 p-4 "
                  >
                    Read More
                  </Link>
                </div>
              </section>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading Blogs....</p>
      )}
      <footer className="bg-gray-700 mt-2 py-8 rounded">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h2 className="text-xl font-bold mb-4 text-white">
                Social Links
              </h2>
              <ul className="text-white">
                <li className="mb-2">
                  <a
                    href="https://www.linkedin.com/in/sachin-saini-652a02232/"
                    className="hover:text-gray-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.linkedin.com/in/sachin-saini-652a02232/"
                    className="hover:text-gray-300"
                  >
                    Mobile - +918393919669
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.linkedin.com/in/sachin-saini-652a02232/"
                    className="hover:text-gray-300"
                  >
                    Email - sainisachin602060@gmail.com
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
                
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h2 className="text-xl font-bold mb-4 text-white">
                Blog Catogery
              </h2>
              <ul className="text-white">
                <li className="mb-2">
                Python
               
                </li>
                <li className="mb-2">
                  Java
                </li>
                <li className="mb-2">
                Javascript
                </li>
                <li className="mb-2">
                 Data Structure and algorithum
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="text-white text-center">
          Copyright © 2023. All Rights Reserved
        </h1>
      </footer>
    </div>
  );
}

export default MyBlog;
