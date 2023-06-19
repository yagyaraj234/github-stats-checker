
import "./App.css";
import Search from "./components/Home";

function App() {

  return (
    <div className="bg-[#F1F1F1] text-[#413E4E] flex flex-col items-center min-w-screen min-h-screen relative  ">
      <Search  />

      <div className=" flex flex-row  gap-2 absolute bottom-0 w-full justify-center items-center py-2 border-t-2">
        <p>Created by Yagyaraj</p>
          <a href="https://github.com/yagyaraj234" target="_blank" rel='noreferrer'>
          <ion-icon name="logo-github"></ion-icon>
          </a>
      </div>
    </div>
  );
}

export default App;
