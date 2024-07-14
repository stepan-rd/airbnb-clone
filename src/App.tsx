import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="w-full h-full font-SF-pro">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
