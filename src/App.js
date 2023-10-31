import "./App.css";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import RightSidebar from "./components/rightSidebar/RightSidebar";

function App() {
  return (
    <main className="padding-10">
      <div className="m-auto main-content">
        <div className="main-content d-lg-flex justify-content-lg-between">
          <LeftSidebar />
          <RightSidebar />
        </div>
      </div>
    </main>
  );
}

export default App;
