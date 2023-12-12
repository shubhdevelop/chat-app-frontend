import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const currPath = useLocation().pathname;
  console.log(currPath);
  const isPathCall = currPath == "/call/";
  console.log(isPathCall);

  return (
    <div
      className={`${
        isPathCall ? "hidden" : ""
      } h-[20px] text-center border-t-2 `}
    >
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
