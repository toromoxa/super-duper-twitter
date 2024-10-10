import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

const Trending = () => {
  return (
    <div className="hidden lg:flex flex-col p-2 ml-7 mt-4">
      <div className="flex space-x-3 bg-white bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl">
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent focus:outline-none placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[500px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">What's happening</h1>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">Hurricane Milton</h1>
          <p className="text-xs text-gray-500">240k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">2024 Election</h1>
          <p className="text-xs text-gray-500">600k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">
            Giant Meteor - impact immenent!
          </h1>
          <p className="text-xs text-gray-500">999k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">Does God hate Capitalism?</h1>
          <p className="text-xs text-gray-500">333k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">
            Aliens say Earth is a prison colony
          </h1>
          <p className="text-xs text-gray-500">666k Tweets</p>
        </div>
      </div>
      <div className="w-[500px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to follow</h1>

        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              src="/assets/barney-prof-pic.png"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Barney</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@TheBarney</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold h-8 hover:bg-[#1d9bf0]">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              src="/assets/lahey.png"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Mr. Lahey</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@theLiquor</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold h-8 hover:bg-[#1d9bf0]">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              src="/assets/carl.png"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Carl</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@widdlyWahh</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold h-8 hover:bg-[#1d9bf0]">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
