import { useState } from "react";

import { shrekMovies } from "../utils";

// Time converter from anythin to shrek units
export default function Converter() {

    const [inputMinutes, setInputMinutes] = useState("");
    const [shrekUnits, setShrekUnits] = useState(0);
    const [selectedMovie, setSelectedMovie] = useState(shrekMovies[0].minutes);

    function convert() {
        const minutes = parseFloat(inputMinutes);
        if (!isNaN(minutes)) {
            const convertedUnits = minutes / selectedMovie;
            setShrekUnits(convertedUnits);
        }
    }

    return (
        <div className="p-6 max-w-lg mx-auto bg-base-200 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Convert Time to Shrek Units</h2>
            
            <div className="mb-4">
                <label htmlFor="timeInput" className="block text-lg font-semibold mb-2">
                    Enter time in minutes:
                </label>
                <input
                    id="timeInput"
                    type="number"
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(e.target.value)}
                    placeholder="Minutes"
                    className="input input-bordered w-full"
                />
            </div>
    
            <div className="mb-4">
                <label htmlFor="movieSelect" className="block text-lg font-semibold mb-2">
                    Select Shrek movie:
                </label>
                <select
                    id="movieSelect"
                    value={selectedMovie}
                    onChange={(e) => (
                        setSelectedMovie(e.target.value)
                    )}
                    className="select select-bordered w-full"
                >
                    {shrekMovies.map((movie) => (
                    <option key={movie.name} value={movie.minutes}>
                        {movie.name}
                    </option>
                    ))}
                </select>
            </div>
    
            <div className="mb-4">
            <button 
                onClick={convert} 
                className="btn btn-primary w-full">
                Convert
            </button>
            </div>
    
            <div className="bg-base-100 p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold">Result:</h3>
                <p className="text-lg">{shrekUnits} Shrek units</p>
            </div>
        </div>
    );
}