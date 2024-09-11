import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="container mx-auto flex justify-between">
            <Link to="/" className="text-2xl font-bold">Logo</Link>
            <Link to="/converter">Time Converter</Link>
            <Link to="/interesting">Interesting Facts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}