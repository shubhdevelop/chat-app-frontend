import { NavLink } from "react-router-dom";
import chattingImage from "../assets/Texting.svg";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="h-full text-center flex-col  overflow-y-auto">
      <h1 className="scroll-m-20 text-[72px] mt-8 font-extrabold tracking-tight lg:text-5xl">
        Have Your Best Chat!{" "}
        <span className="underline text-blue-400">Safe</span> and{" "}
        <span className="underline text-blue-400">Securely</span>
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Easy, Fast and Encrypted
      </p>
      <center className="w-full">
        <img
          className="m-y-auto "
          width={700}
          src={chattingImage}
          alt="Chatting"
        />
        <div>
          <NavLink className="mx-4" to={"/Signup"}>
            <Button> Sign Up</Button>
          </NavLink>
          <NavLink to={"/login"}>
            <Button variant={"outline"}>Login</Button>
          </NavLink>
        </div>
      </center>
    </div>
  );
};

export default Home;
