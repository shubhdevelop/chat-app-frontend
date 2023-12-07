const ImagePreview = () => {
  return (
    <div>
      <div
        onClick={(e) => e.stopPropagation()}
        className=" flex flex-row items-center w-screen h-screen bg-slate-500/[.6]  absolute top-0 left-0"
      >
        <img
          style={{
            opacity: "100%",
            width: "90vh",
            margin: "0 auto",
            border: "solid 1px black",
          }}
          src="https://chat-app-frontend-beige.vercel.app/assets/Texting-Z-V7J-Hc.svg"
          alt="preview"
        />
      </div>
    </div>
  );
};

export default ImagePreview;
