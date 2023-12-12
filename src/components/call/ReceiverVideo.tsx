type Props = {
  isScreenSharing: boolean;
};

const ReceiverVideo = ({ isScreenSharing }: Props) => {
  const styleWhenScreenSharing = `z-10 absolute bottom-4 drop-shadow-xl left-4 w-[300px]`;

  return (
    <div className="w-full border-[1px] my-2 rounded-r-lg h-full">
      <div
        className={`bg-slate-700  flex flex-col mb-5 mx-4  items-center ${
          isScreenSharing ? styleWhenScreenSharing : "h-full"
        } rounded-lg overflow-auto rounded-t-lg  `}
      >
        <video
          style={{
            transform: "rotateY(180deg)",
          }}
          muted={false}
          width={1000}
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};

export default ReceiverVideo;
