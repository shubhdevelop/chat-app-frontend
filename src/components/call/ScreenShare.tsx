import { SetStateAction, useRef } from "react";
type Props = {
  setIsScreenSharing: React.Dispatch<SetStateAction<boolean>>;
};

const ScreenShare = ({ setIsScreenSharing }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startScreenShare = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = screenStream as MediaStream;
      }
      if (screenStream) {
      }
      screenStream.getVideoTracks()[0].onended = () => {
        setIsScreenSharing(false);
      };
    } catch (error) {
      console.error("Error accessing screen share:", error);
    }
  };

  startScreenShare();
  return (
    <div className=" w-full bg-black absolute top-0 left-0  rounded-r-lg h-full">
      <video
        style={{
          width: "100%",
          height: "100%",
        }}
        ref={videoRef}
        muted={false}
        height={360}
        autoPlay
        playsInline
      />
    </div>
  );
};

export default ScreenShare;
