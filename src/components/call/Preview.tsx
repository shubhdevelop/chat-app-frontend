import { useEffect, useRef, useState } from "react";

type Props = {
  isCalling: boolean;
  isVideo: boolean;
  isMuted: boolean;
};
const Preview = ({ isCalling, isVideo, isMuted }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: isVideo,
        audio: true,
      });

      if (videoRef.current && stream) {
        if (isMuted && isVideo) {
          const VideoTracks = stream.getVideoTracks();

          if (VideoTracks.length > 0) {
            const videoStreamOnly = new MediaStream(VideoTracks);
            videoRef.current.srcObject = videoStreamOnly;
          }
        } else if (isMuted && !isVideo) {
          videoRef.current.srcObject = new MediaStream();
        } else {
          videoRef.current.srcObject = stream as MediaStream;
        }
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const capture = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const imageSrc = canvas.toDataURL("image/jpeg");
        // Now you can use the captured image source as needed
        console.log(imageSrc);
      }
    }
  };
  // capture();
  startWebcam();

  const styleWhenCalling = `absolute bottom-4 drop-shadow-xl shadow-white right-4 w-[300px]`;

  return (
    <div>
      <div
        className={`bg-slate-700  flex flex-col mb-5 mx-4  items-center ${
          isCalling ? styleWhenCalling : ""
        } rounded-lg overflow-auto rounded-t-lg   `}
      >
        <video
          style={{
            transform: "rotateY(180deg)",
            width: "300px",
          }}
          muted={false}
          ref={videoRef}
          width={1000}
          height={360}
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};

export default Preview;
