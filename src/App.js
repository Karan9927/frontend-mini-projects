import { Link } from "react-router-dom";
import "./App.css";
import pic from "./profile.png";

function App() {
  return (
    <>
      <div>
        <ul className="flex justify-center my-10 main-cards">
          <Link to={"/Counter"}>
            <li className="flex flex-col gap-2">
              <p>Counter</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
          <Link to={"/Programming"}>
            <li className="flex flex-col gap-2">
              <p>Programming Multiverse</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
          <Link to={"/Anagram"}>
            <li className="flex flex-col gap-2">
              <p>Anagram Checker</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
          <Link to={"/Image-Gallery"}>
            <li className="flex flex-col gap-2">
              <p>Image Gallery</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
          <Link to={"/Accordian"}>
            <li className="flex flex-col gap-2">
              <p>Accordian</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
          <Link to={"/BackgroundChanger"}>
            <li className="flex flex-col gap-2">
              <p>Background Changer</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
          <Link to={"/LightDarkMode"}>
            <li className="flex flex-col gap-2">
              <p>Light Dark Mode</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
          <Link to={"/Pagination"}>
            <li className="flex flex-col gap-2">
              <p>Pagination</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
          <Link to={"/WordCount"}>
            <li className="flex flex-col gap-2">
              <p>Word Count</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
          <Link to={"https://zesty-florentine-3a2c62.netlify.app/"}>
            <li className="flex flex-col gap-2">
              <p>Expense Tracker</p>
              <img className="w-7" src={pic} />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default App;
