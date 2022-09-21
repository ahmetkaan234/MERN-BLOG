import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArticleAsync } from "../redux/articleSlice";

const ArticleList = () => {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.article.items);

  useEffect(() => {
    dispatch(getArticleAsync());
  }, [dispatch]);


  return (
    <div className=" flex  flex-col items-center     sm:flex-row flex-wrap   sm:justify-start     w-full  mt-16 ">
     
      {todo.map((item,key) => (
         <Link  key={key} to={`${item.slug}`}>
        <div  key={key} className="   w-[250px] border h-[200px] sm:w-[250px]  sm:h-[200px]  rounded-sm shadow-lg mt-5   hover:border-t-0 hover:border-l-0 bg-white sm:mr-5   hover:border-2 hover:border-gray-800  transition-all hover:m-2">
          <div className="p-4 w-full  h-full  overflow-hidden ">
            <p className="text-lg font-semibold text-gray-600"> {item.title} </p>
            <hr />
            <p className="mt-2  text-sm font-semibold text-gray-600  overflow-hidden ">
            {item.description}
            </p>
          </div>
        </div>
        </Link>
      ))}
     
    </div>
  );
};

export default ArticleList;
