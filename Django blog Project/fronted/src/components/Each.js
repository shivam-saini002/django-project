import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

//document ready

const Each = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  //fetch the data from backend api
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/all/EachPost/data//${id}/`
        );
        setBlog(response.data);
      
        
      } catch (error) {
        //
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  // destructure the data
  const { title, description, good_name, Catogery, postedDate } = blog;

  return (
    //display the all content of blog
    <div>
      <div className="container mx-auto py-8 ">
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="bg-neutral-400 text-center">
            <p className="text-xl">
              Article BY-{" "}
              <span className="text-blue-900 font-mono underline">
                {good_name}
              </span>{" "}
            </p>
            <hr />
            <br />

            <p className="text-xl">
              Posted Date-
              <span className="text-blue-900 font-mono underline">122
                {postedDate}
              </span>
            </p>
            <hr />
            <br />

            <p className="text-xl">
              Article Catogery-
              <span className="text-blue-900 font-mono underline">
                {Catogery}
              </span>
            </p>
            <hr />
            <br />
            <p className="text-xl">
              Article Topic-
              <span className=" text-blue-900 font-mono underline">
                {title}
              </span>
            </p>
          </div>

          <h2 className="text-3xl font-mono mb-2 text-gray-800 mt-20">
            {title}
          </h2>
          <hr />
          <br />
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-gray-600 mb-4 font-serif"
          />

          <div className="flex items-center justify-between text-gray-600"></div>
        
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold underline text-slate-900 mb-9">
          If you have any query or You want to publish your own blog ⬇️
        </h1>
        <br />

        <br />

        <Link
          to="/Contact"
          className="bg-green-800 text-white rounded w-100 h-8 p-2 items- ml-52 "
        >
          Send A Message
        </Link>
      </div>
    </div>
  );
};

export default Each;
