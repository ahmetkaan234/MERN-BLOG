import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import { Button, Modal } from "antd";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { postArticleAsync } from "../redux/articleSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState({ title: "", description: "" });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    handleSubmit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    await dispatch(
      postArticleAsync({
        data: { title: add.title, description: add.description },
      })
    );
  };

  return (
    <div className="w-full p-4 bg-white  flex justify-between  ">
      <div className="flex  items-center  space-x-4">
        <span className="text-purple-800 ">
          <BsPencilFill />
        </span>
        <Link to="/">
          <div className="font-bold text-purple-800  text-lg   "> BLOGIFY </div>
        </Link>
      </div>
      <div className="">
        <Button
          style={{ background: "rgba(107, 33, 168, 1)", border: "none" }}
          type=""
          onClick={showModal}
        >
          <div className="flex flex-row justify-between items-center  ">
            <div className="text-white">
              <BsPencilFill />
            </div>

            <div className="font-semibold text-white pl-4">YENİ YAZI </div>
          </div>
        </Button>
        <Modal
          title="Yeni Yazı oluştur"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 "
            action=""
          >
            <div>
              <TextField
                onChange={(e) => setAdd({ ...add, title: e.target.value })}
                size="small"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div>
              <TextField
                onChange={(e) =>
                  setAdd({ ...add, description: e.target.value })
                }
                size="small"
                className="w-full"
                
                id="outlined-multiline-static"
                label="Descirpiton"
                multiline
                rows={4}
                maxRows={50}
                variant="outlined"
              />
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
