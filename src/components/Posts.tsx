import PostImage from "../assets/postimage.jpg";
import Profile from "../assets/profile.jpg";
import Profile2 from "../assets/profile2.jpg";
import Profile3 from "../assets/profile3.jpg";
import Twitter from "../assets/twitter-x.svg";
import Heart from "../assets/love.png";
import Laugh from "../assets/smiling-emoji.png";
import Astonished from "../assets/wow-emoji.png";
import Sad from "../assets/upset-emoji.png";
import Angry from "../assets/angry-emoji.png";

const ThumbsUp = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="thumbsup">
    <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm-90.062 357.875c0 6.731-5.457 12.188-12.188 12.188h-36.562c-6.731 0-12.188-5.457-12.188-12.188V205.531c0-6.731 5.457-12.188 12.188-12.188h36.562c6.731 0 12.188 5.457 12.188 12.188v152.344zm250.013-123.946-28.383 108.8c-4.2 16.1-18.74 27.333-35.378 27.333H251.25c-26.924 0-48.75-21.826-48.75-48.75V213.537a48.747 48.747 0 0 1 14.279-34.471l70.855-70.855a21.416 21.416 0 0 1 15.145-6.273c16.169 0 26.507 17.23 18.898 31.497l-22.202 41.628c-4.416 8.281 1.584 18.281 10.969 18.281h74.152c17.897 0 32.405 14.508 32.405 32.405a32.488 32.488 0 0 1-1.05 8.18z"></path>
  </svg>
);
const Like = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    height={18}
    width={18}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
    />
  </svg>
);

const Share = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    height={18}
    width={18}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
    />
  </svg>
);

const Comment = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    height={18}
    width={18}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
    />
  </svg>
);

const Posts = () => {
  return (
    <div className="lg:relative h-[800px] flex lg:grid flex-col gap-14 justify-center items-center mt-20 md:mt-14 lg:mt-0">
      {/* Insta Post Card */}
      <div className="w-[300px] h-[400px] bg-red-100/70 lg:absolute right-40 -rotate-[8deg] rounded-lg cursor-default">
        <div className="relative flex flex-col h-full">
          <div className="p-2 flex justify-start items-center flex-row gap-2">
            <img src={Profile} className="w-8 h-8 rounded-full" alt="profile" />
            <div className="flex flex-col flex-1">
              <span className="text-sm font-bold">Catzcommunity</span>
              <span className="text-xs">2 hours ago</span>
            </div>
            <span className="relative bottom-2 right-2 text-xl">...</span>
          </div>
          <div className="flex flex-1 flex-col">
            <p className="px-2 text-xs pb-1">
              It's a whole lotta cat-tastic love! Meow represent 😻 #FelineFan
            </p>
            <img
              className="h-full w-full object-cover"
              src={PostImage}
              alt="post images"
            />
          </div>
          <div className="p-2 flex flex-col relative">
            <hr className="border-t border-gray-400 relative bottom-1" />
            <div className="absolute rounded-full bottom-8 -left-6 bg-white flex gap-2 p-2">
              <div className="w-8 h-8 fill-blue-400">{ThumbsUp}</div>
              <img className="w-8 h-8" src={Heart} alt="Actions" />
              <img className="w-8 h-8" src={Laugh} alt="Actions" />
              <img className="w-8 h-8" src={Astonished} alt="Actions" />
              <img className="w-8 h-8" src={Sad} alt="Actions" />
              <img className="w-8 h-8" src={Angry} alt="Actions" />
            </div>
            <div className="flex justify-between items-center px-2 text-gray-400">
              <span className="flex justify-center items-center flex-row">
                {Like}
                Like
              </span>
              <span className="flex justify-center items-center flex-row">
                {Comment}
                Comment
              </span>
              <span className="flex justify-center items-center flex-row">
                {Share}
                Share
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Twitter Replay Tag1 */}
      <div className="w-[400px] h-[200px] bg-red-100/70 lg:absolute top-24 -rotate-6 rounded-lg cursor-default border">
        <div className="p-4 relative flex flex-col h-full">
          <div className="flex justify-start items-center flex-row gap-2">
            <img
              src={Profile2}
              className="w-10 h-10 rounded-full"
              alt="profile"
            />
            <div className="flex flex-col flex-1">
              <span className="text-sm font-bold">Ruth.</span>
              <span className="text-xs">@FelineFamClub</span>
            </div>
            <span className="relative right-4 text-xl">
              <img src={Twitter} alt="twitter" />
            </span>
          </div>
          <div className="flex flex-1 py-1">
            <p className="text-lg text-wrap">
              The juiciest cat gossip, It's the catz meow, baby! So come on over
              and lets celebrate our fur-bulous love for these little balls of
              whiskered joy.{" "}
              <span className="text-blue-400">#CatzCrew #CatLove</span>
            </p>
          </div>
          <div className="flex justify-start items-center">
            <p className="text-gray-400 flex justify-center items-center">
              <span>12:30 PM May 05,2024</span>{" "}
              <span className="text-4xl relative bottom-1 mx-1">.</span>{" "}
              <span className="text-blue-400">Twitter Web App</span>
            </p>
          </div>
        </div>
      </div>
      {/* Twitter Replay Tag2 */}
      <div className="w-[400px] h-[200px] bg-red-100/70 lg:absolute bottom-40 lg:bottom-52 -left-16 rotate-5 lg:rotate-6 rounded-lg cursor-default">
        <div className="p-4 relative flex flex-col h-full">
          <div className="flex justify-start items-center flex-row gap-2">
            <img
              src={Profile3}
              className="w-10 h-10 rounded-full"
              alt="profile"
            />
            <div className="flex flex-col flex-1">
              <span className="text-sm font-bold">John.</span>
              <span className="text-xs">@FelineFamClub</span>
            </div>
            <span className="relative right-4 text-xl">
              <img src={Twitter} alt="twitter" />
            </span>
          </div>
          <div className="flex flex-1 py-2">
            <p className="text-lg text-wrap">
              OMG, furreal?!" They bring the purfect combo of sass and snuggles,
              and i'm here for it. Let's keep the cat love going!{" "}
              <span className="text-blue-400">
                #CrazyCatPerson #MeowObsessed
              </span>
            </p>
          </div>
          <div className="flex justify-start items-center">
            <p className="text-gray-400 flex justify-center items-center">
              <span>01:00 PM May 01,2024</span>{" "}
              <span className="text-4xl relative bottom-1 mx-1">.</span>{" "}
              <span className="text-blue-400">Twitter Web App</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Posts;
