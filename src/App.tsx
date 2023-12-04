import "./App.css";
import ChatWindow from "./components/ChatWindow";
import FriendList from "./components/FriendList";

function App() {
  return (
    <>
      <div className="container-lg grid grid-cols-12 gap-x-2">
        <FriendList />
        <ChatWindow />
      </div>
    </>
  );
}

export default App;
