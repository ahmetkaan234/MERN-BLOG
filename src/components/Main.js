import React from "react";
import Navbar from "./Navbar";
import ArticleList from "./ArticleList";

const Main = () => {
  return (
    <div className="  w-full md:w-3/4   duration-700   transition-all  contaniner flex flex-col items-center  h-full">
        <div  className="w-full">
        <Navbar/>
        </div>
        <div className="sm:w-10/12 md:w-full " >
        <ArticleList   />
        </div>
    </div>
  );
};

export default Main;
