import React, { useState } from "react";
import axios from "axios";

//document ready
const Contact = () => {
  const [data, setdata] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  //function to get cookie from backend

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  //set the blog data to state
  function handleinput(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
    
  }


//submit form of users query
  function formsubmit(event) {
    // event.preventDefault();
    var csrftoken = getCookie("csrftoken");
  
//create a post request from react to django 
    axios
      .post("http://127.0.0.1:8000/all/User/Query//", data, {
        headers: {
          "Content-type": "application/json",
          "X-CSRFToken": csrftoken,
        },
      })

      .then((response) => {
       
        // if data has been sucessfully reach to backend
        alert("Your Message Has Been successfully Recived! ");
      
        })

      .catch((error) => {
        // Handle any errors
        
      });
  }

  return (
    //user query form 
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-600">CONTACT-US</h1>
      <p className="font-mono text-xl mt-2 ">For any further update query and regrading any problem realted to our content.</p>

      <div className="w-full sm:w-1/2 lg:w-1/3">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={formsubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="Name"
              onChange={handleinput}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="Email"
              onChange={handleinput}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Message"
            >
              Message
            </label>

            <textarea
              className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Enter your message"
              name="Message"
              onChange={handleinput}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className=" w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
