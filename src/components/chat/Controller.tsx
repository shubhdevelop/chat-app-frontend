import { MicOff, Mic, Video, VideoOff, PhoneOff } from "lucide-react";
import React, { SetStateAction } from "react";

type Props = {
  setIsCalling: React.Dispatch<SetStateAction<boolean>>;
  isVideo: boolean;
  setIsVideo: React.Dispatch<SetStateAction<boolean>>;
  isMuted: boolean;
  setIsMuted: React.Dispatch<SetStateAction<boolean>>;
};

const Controller = ({
  setIsCalling,
  isMuted,
  isVideo,
  setIsMuted,
  setIsVideo,
}: Props) => {
  return (
    <div className=" bg-white max-w-min gap-4 px-4 flex justify-center items-center rounded-full h-[50px] absolute bottom-[5px] drop-shadow-lg shadow-emerald-800 ">
      <div
        onClick={() => {
          setIsMuted((prev) => {
            return !prev;
          });
        }}
        className="rounded-full bg-red-700  p-2 cursor-pointer "
      >
        {isMuted ? <MicOff /> : <Mic />}
      </div>

      <div
        className="rounded-full bg-red-700  p-2 cursor-pointer "
        onClick={() => {
          setIsVideo((prev) => {
            return !prev;
          });
        }}
      >
        {isVideo ? <Video /> : <VideoOff />}
      </div>

      <div
        className="rounded-full bg-red-700  p-2 cursor-pointer "
        onClick={() => {
          setIsCalling(false);
        }}
      >
        <PhoneOff />
      </div>
      {/* 
      {isScreenSharing ? (
        <ScreenShare
          onClick={() => {
            setIsScreenSharing((prev) => !prev);
          }}
        />
      ) : (
        <ScreenShareOff
          onClick={() => {
            setIsScreenSharing((prev) => !prev);
          }}
        />
      )} */}
    </div>
  );
};

export default Controller;
