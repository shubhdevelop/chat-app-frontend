import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="h-[70px] text-center border-t-2 p-2 npm install --save-dev tailwind-scrollbar">
      <h4 className=" text-md font-semibold tracking-tight">
        <Link
          className="text-blue-600 underline"
          to={"https://github.com/shubhdevelop"}
          target="blank"
        >
          By Shubham
        </Link>
        &#32; with love ❤️
      </h4>
      <p className="leading-2 [&:not(:first-child)]:mt-[2px]">
        Tailwind,Shadcn, Reactrouter, Recoil, Typescript
      </p>
    </div>
  );
};
