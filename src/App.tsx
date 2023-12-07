import { Outlet } from "react-router-dom";
import "./App.css";
import FriendList from "./components/FriendList";
import { users } from "./types/user.types";

function App() {
  return (
    <>
      <div className=" h-[calc(100vh-140px)] container-lg grid grid-cols-12 gap-x-2">
        <FriendList users={users} />
        <Outlet />
      </div>
    </>
  );
}

export default App;
