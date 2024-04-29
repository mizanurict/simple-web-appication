import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;