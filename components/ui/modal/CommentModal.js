import { db } from "@/firebase";
import { closeCommentModal } from "@/redux/modalSlice";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import Modal from "@mui/material/Modal";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CommentModal = () => {
  const isOpen = useSelector((state) => state.modal.commentModalOpen);
  const userImg = useSelector((state) => state.user.photoUrl);
  const tweetDetails = useSelector((state) => state.modal.commentTweetDetails) || {};
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const router = useRouter();

  async function sendComment() {

    const docRef = doc(db, "posts", tweetDetails.id);
    const commentDetails = {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      comment: comment,
    };
    await updateDoc(docRef, {
      comments: arrayUnion(commentDetails)
    })
    dispatch(closeCommentModal())
    router.push("/" + tweetDetails.id)
  }

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
        className="flex justify-center items-center"
      >
        <div className="bg-black w-full h-full relative rounded-lg sm:w-[600px] sm:h-[386px] text-white border border-gray-500 sm:p-10 p-4">
          <div className="absolute w-[2px] h-[75px] bg-gray-500 ml-6 mt-20"></div>
          <div
            onClick={() => dispatch(closeCommentModal())}
            className="absolute top-4 cursor-pointer"
          >
            <XIcon className="w-6" />
          </div>
          <div className="mt-8">
            <div className="flex space-x-3">
              <img
                src={tweetDetails.photoUrl}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex space-x-1.5">
                  <h1 className="font-bold">{tweetDetails.name}</h1>
                  <h1 className="text-gray-500">@{tweetDetails.username}</h1>
                </div>
                <p className="mt-1">{tweetDetails.tweet}</p>
                <h1 className="text-gray-500 text-[15px]mt-2">
                  Replying to
                  <span className="text-[#1b9bf0]">
                    {" "}
                    @{tweetDetails.username}
                  </span>
                </h1>
              </div>
            </div>
            <div className="mt-11">
              <div className="flex space-x-3">
                <img
                  src={userImg}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="w-full">
                  <textarea
                    className="w-full text-lg outline-none bg-transparent resize-none"
                    placeholder="Tweet your reply"
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <div className="flex justify-between border-t border-gray-700 pt-4">
                    <div className="flex space-x-0">
                      <div className="iconsAnimation">
                        <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
                      </div>
                      <div className="iconsAnimation">
                        <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
                      </div>
                      <div className="iconsAnimation">
                        <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
                      </div>
                      <div className="iconsAnimation">
                        <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
                      </div>
                      <div className="iconsAnimation">
                        <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
                      </div>
                    </div>
                    <button
                      className="bg-[#1d9bf0] rounded-full px-4 py-1.5 disabled:opacity-50"
                      disabled={!comment}
                      onClick={sendComment}
                    >
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommentModal;
