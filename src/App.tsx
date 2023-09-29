import "./App.css";
import Navbar from "./components/Navbar";
import CreateTextNote from "./components/CreateTextNote";
import DisplayFeed from "./components/DisplayFeed";

function App() {
  return (
    <div className={`app bg-background text-text w-full`}>
      <Navbar />
      {/* this is a spacer for the fist element under the nav bar */}
      <div className="h-20 w-1"></div>
      <div className="flex flex-col items-center justify-center ">
        <CreateTextNote />
        {/* <CreateWorkflows /> */}
        <DisplayFeed />
      </div>
    </div>
  );
}

export default App;
