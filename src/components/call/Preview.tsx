import { useRef, useState } from "react";
import { Button } from "../ui/button";

const Preview = () => {
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream as MediaStream;
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
        if (isMuted) {
          context.drawImage(
            videoRef.current,
            0,
            0,
            canvas.width,
            canvas.height
          );
        }
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const imageSrc = canvas.toDataURL("image/jpeg");
        // Now you can use the captured image source as needed
        console.log(imageSrc);
      }
    }
  };

  startWebcam();
  capture();
  return (
    <div>
      <div
        className={`bg-slate-700 min-w-[500px] h-full  rounded-lg overflow-auto `}
      >
        <video
          muted={isMuted}
          ref={videoRef}
          width={640}
          height={360}
          autoPlay
          playsInline
        />
        <div className=" bg-white max-w-min gap-4 px-4 flex justify-center items-center rounded-full h-[50px]">
          <Button
            className="rounded-full"
            onClick={() => {
              setIsMuted((prev) => !prev);
            }}
          >
            Mute
          </Button>
          <Button
            className="rounded-full"
            onClick={() => {
              setIsMuted((prev) => !prev);
            }}
          >
            video
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
