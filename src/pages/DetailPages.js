import React, { useState } from "react";
import { uptadeArticleAsync } from "../redux/articleSlice";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const DetailPages = ({ items }) => {
  const dispatch = useDispatch();

  let history = useHistory();

  const [data, setData] = useState({
    title: items.title,
    description: items.description,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      uptadeArticleAsync({
        data: {
          title: data.title,
          description: data.description,
          id: items._id,
        },
      })
    );
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-5">
        <TextField
          className="w-full"
          defaultValue={items.title}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </div>
      <div>
        <TextField
          className="w-full"
          defaultValue={items.description}
          id="outlined-multiline-static"
          label="Descirpiton"
          multiline
          rows={4}
          maxRows={50}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
      </div>
      <div className="mt-5">
        <button
          onClick={(e)=>handleSubmit(e).then(()=>{history.push(`/`)})}
          className="p-2  pl-8 pr-8 bg-purple-800 rounded-xl  text-white  text-md"
        >
          DÜZENLE
        </button>
      </div>
    </form>
  );
};

export default DetailPages;
