import Modal from "@mui/material/Modal"
import { useState } from "react";
import { useSelector } from "react-redux";

const SignUpModal = () => {

    // const [isOpen, setIsOpen] = useState(false)
    // const handleClose = () => setIsOpen(false)
    // const handleOpen = () => setIsOpen(true)

    const isOpen = useSelector(state => state.modals.SignUpModal)
    console.log(isOpen)
    

  return (
    <>
      <button className="bg-white text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]" onClick={handleOpen}>
        Sign Up
      </button>

        <Modal
        open={isOpen}
        onClose={handleClose}
        className="flex justify-center items-center"
        >
            <div className="w-[400px] h-[200px] bg-white">

            </div>
        </Modal>
      
    </>
  );
};

export default SignUpModal;
