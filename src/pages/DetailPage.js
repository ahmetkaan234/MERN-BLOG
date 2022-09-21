import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  getDetailArticeAsync,
  getArticleAsync,
  deleteArticleAsync,
  
} from "../redux/articleSlice";
import Button from "@mui/material/Button";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Navbar from "../components/Navbar";

//modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import DetailPages from "./DetailPages";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DetailPage = () => {
  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let history = useHistory();

  const dispatch = useDispatch();
  let { slug } = useParams();

  const items = useSelector((state) => state.article.filteredItems);

  useEffect(() => {
    
    dispatch(getArticleAsync());
    dispatch(getDetailArticeAsync(slug));
  }, []);
  

  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   await dispatch(
  //     uptadeArticleAsync({
  //       data: { title: data.title, description: data.description ,id:items._id },
  //     })
  //   );
  // };

  // const [data, setData] = useState({
  //   title: items.title,
  //   description: items.description,
  // });

  return (
    <div className="w-full     h-full flex flex-col  items-center">
      <div className="   w-full   md:w-3/4 transition-all duration-700  ">
        <Navbar />
      </div>
      <div className="w-full min-h-full flex justify-center mt-20">
        <div className="    w-full  md:w-3/4    transition-all duration-700 h-full flex-col  p-6 bg-white">
          <div className="flex justify-between mb-5 ">
            <div className="text-2xl font-semibold">{items.title}</div>
            <div className="flex space-x-2">
              <Button
              size="small"
                onClick={handleOpen}
                style={{
                  background: "rgba(107, 33, 168, 1)",
                  color: "rgba(255,255, 255, 1)",
                  border: "none",
                }}
                variant="outlined"
              >
                <div className="flex flex-row justify-between items-center  ">
                  <div className="text-white">
                    <BsFillPencilFill />
                  </div>

                  <div className=" text-white pl-4 ">DÜZENLE </div>
                </div>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box   sx={style}>
                  <div className="mb-5">
                    <p className="text-lg font-semibold">DÜZENLE</p>
                    <hr className="bg-black" />
                  </div>
                  <DetailPages  items={items} />
                </Box>
              </Modal>

              <Button
              size="small"
                style={{
                  background: "rgba(107, 33, 168, 1)",
                  color: "rgba(255,255, 255, 1)",
                  border: "none",
                }}
                variant="outlined"
                onClick={() =>
                  dispatch(deleteArticleAsync(items._id)).then(() => {
                    history.push("/");
                  })
                }
              >
                <div className="flex flex-row justify-between items-center  ">
                  <div className="text-white text-lg">
                    <AiFillDelete />
                  </div>

                  <div className=" text-white pl-4">SİL </div>
                </div>
              </Button>
            </div>
          </div>
          <hr />
          <div className="mt-5">
            <p>{items.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
