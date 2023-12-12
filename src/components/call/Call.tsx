import { useSearchParams } from "react-router-dom";
import DailUp from "./DailUp";
import { useEffect, useState } from "react";
import Preview from "./Preview";
import ReceiverVideo from "./ReceiverVideo";
import Controller from "../chat/Controller";

const Call = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const hasVideo = searchParams.get("has_video");
    setIsVideo(() => (hasVideo === "true" ? true : false));
  }, []);

  return (
    <div className="w-full h-full flex bg-black mt-1 relative lg:flex-row justify-center items-center rounded-lg">
      {isCalling ? <ReceiverVideo /> : null}

      <Controller
        isScreenSharing={isScreenSharing}
        setIsScreenSharing={setIsScreenSharing}
        isVideo={isVideo}
        setIsVideo={setIsVideo}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        setIsCalling={setIsCalling}
      />
      <Preview isVideo={isVideo} isMuted={isMuted} isCalling={isCalling} />
      {isCalling ? null : (
        <DailUp isCalling={isCalling} setIsCalling={setIsCalling} />
      )}
    </div>
  );
};

export default Call;
