import { MouseEventHandler, SetStateAction, useState } from "react";
import { Image, SendHorizonal, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { AllChat, Chat } from "@/types/chat.types";

type TextInputProps = {
  setAllChats: React.Dispatch<SetStateAction<AllChat>>;
};

const ImageInput: React.FC<TextInputProps> = ({
  setAllChats,
}: TextInputProps) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleImageChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget && e.currentTarget.files) {
      const file: FileList[0] | null = e.currentTarget.files[0];
      if (file) {
        // Check if the selected file is an image
        if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
          setIsPreviewVisible(true);
          // Do something with the selected image (e.g., set it to
          const reader = new FileReader();
          reader.onloadend = () => {
            //runs when reader done with reading
            setSelectedImage(reader.result as string);
          };
          reader.readAsDataURL(file);
        } else {
          alert("Please select a valid image file.");
        }
      }
    }
  };

  const handleImageSumbit: MouseEventHandler<HTMLButtonElement> = () => {
    const newChat: Chat = {
      content: "",
      id: Math.random(),
      type: "sent",
      img: new String(selectedImage) as string,
    };

    if (newChat) {
      console.log(selectedImage);
      setIsPreviewVisible(false);
      setSelectedImage("");
      setAllChats((prev) => [...prev, newChat]);
    }
  };

  return (
    <div>
      <div
        className={` ${
          isPreviewVisible ? "" : "hidden"
        }   absolute right-[70px] bottom-[70px] p-4 bg-blue-700 drop-shadow-2xl rounded-lg`}
      >
        <h3 className="text-2xl mb-2 text-white">Preview</h3>
        <img width={500} className="" src={selectedImage} alt="preview" />
        <XCircle
          onClick={() => {
            setSelectedImage("");
            setIsPreviewVisible(false);
          }}
          color="white"
          size={40}
          strokeWidth={1}
          className="absolute top-[-30px] left-[-20px] bg-black rounded-full bottom-[-7px] cursor-pointer"
        />
        <Button
          variant={"outline"}
          onClick={handleImageSumbit}
          className="mt-2"
        >
          <SendHorizonal />
        </Button>
      </div>
      <label
        htmlFor="fileInput"
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <input
          type="file"
          id="fileInput"
          accept="image/* video/*,.mp4,.mov,.png,.jpg,.jpeg,.svg "
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            opacity: 0,
            cursor: "pointer",
          }}
          onChange={handleImageChange}
        />
        <span
          style={{
            display: "inline-block",
            padding: "1px",
            border: "0px solid #ccc",
            borderRadius: "4px",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <Image
            size={40}
            strokeWidth={1}
            className="relative bottom-[-12px] cursor-pointer"
          />
        </span>
      </label>
    </div>
  );
};

export default ImageInput;
