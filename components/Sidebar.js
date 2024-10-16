import { auth } from "@/firebase";
import { closeLoginModal, closeSignUpModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  async function handleSignOut() {
    await signOut(auth)
    dispatch(signOutUser())
    dispatch(closeSignUpModal());
    dispatch(closeLoginModal());
  }

  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
      <nav className="h-full relative xl:space-y-1.5">
        <div className="xl:p-3 py-3 flex justify-center items-center xl:justify-start">
          <Image src="/assets/white-twitter-logo.png" width={34} height={34} />
        </div>
        <SideBarLink Icon={HomeIcon} text={"Home"} />
        <SideBarLink Icon={HashtagIcon} text={"Explore"} />
        <SideBarLink Icon={InboxIcon} text={"Notifications"} />
        <SideBarLink Icon={BookmarkIcon} text={"Messages"} />
        <SideBarLink Icon={ClipboardListIcon} text={"Bookmarks"} />
        <SideBarLink Icon={BellIcon} text={"Twitter Blue"} />
        <SideBarLink Icon={UserIcon} text={"Profile"} />
        <SideBarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        <button className="hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] text-lg font-bold mt-2">
          Tweet
        </button>
        <div onClick={handleSignOut} className="hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer absolute xl:p-3 bottom-0 flex justify-center items-center space-x-3">
          <img
            src={user.photoUrl || "/assets/frank.png"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <DotsHorizontalIcon className="h-5 hidden xl:inline" />
        </div>
      </nav>
    </div>
  );
};

function SideBarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}

export default Sidebar;
