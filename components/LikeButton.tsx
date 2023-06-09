import React, { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import { AppState } from "../store";
interface IProps {
    likes: any[]
    handleLike:()=>void;
    handleDislike:()=>void;
}
const LikeButton = ({likes, handleLike, handleDislike}: IProps) => {
  const [alreadyLike, setAlreadyLike] = useState(false);
  const user = useSelector((state: AppState) => state.user);
  const { currentUser }: any = user;
  let filterLikes = likes?.filter((item)=>item._ref === currentUser?._id)
  useEffect(()=>{
      if(filterLikes?.length > 0)  {
        setAlreadyLike(true)
      }else{
        setAlreadyLike(false)
      }
  },[filterLikes, likes])
  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLike ? (
          <div className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]" onClick={handleDislike}>
            <MdFavorite className="text-lg md:text-2xl"></MdFavorite>
          </div>
        ) : (
            <div className="bg-primary rounded-full p-2 md:p-4 text-black" onClick={handleLike}>
            <MdFavorite className="text-lg md:text-2xl"></MdFavorite>
          </div>
        )}
        <p className="text-md font-semibold">{likes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
