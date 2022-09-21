import React from "react";
import Navbar from "./Navbar";
import ArticleList from "./ArticleList";

const Main = () => {
  return (
    <div className="  w-full md:w-3/4   duration-700   transition-all  contaniner flex flex-col   h-full">
        <Navbar/>
        <ArticleList/>

    </div>
  );
};

export default Main;
