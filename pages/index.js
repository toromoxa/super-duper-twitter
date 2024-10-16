import { Inter } from "@next/font/google";
import Sidebar from "@/components/Sidebar";
import PostsFeed from "@/components/PostsFeed";
import Trending from "@/components/Trending";
import BottomBanner from "@/components/ui/BottomBanner";
import { useSelector } from "react-redux";
import CommentModal from "@/components/ui/modal/CommentModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const username = useSelector(state => state.user.username)
  
  return (
    <div>
      <div className="bg-black min-h-screen text-[#e7e9ea] max-w-[1400px] mx-auto flex">
        <Sidebar />
        <PostsFeed />
        <Trending />
      </div>
      <CommentModal />
      {!username && <BottomBanner />}
    </div>
  );
}
