import { useSearchParams } from "react-router-dom";
import DailUp from "./DailUp";
import { useEffect, useState } from "react";
import Preview from "./Preview";
import ReceiverVideo from "./ReceiverVideo";
import Controller from "../chat/Controller";
import ScreenShare from "./ScreenShare";

const Call = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(true);

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const hasVideo = searchParams.get("has_video");
    setIsVideo(() => (hasVideo === "true" ? true : false));
  }, []);

  return (
    <div className="w-full bg-green-100 h-full flex mt-1 relative lg:flex-row justify-center items-center rounded-lg">
      {isCalling ? <ReceiverVideo isScreenSharing={isScreenSharing} /> : null}
      {isCalling && isScreenSharing ? (
        <ScreenShare setIsScreenSharing={setIsScreenSharing} />
      ) : null}
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
