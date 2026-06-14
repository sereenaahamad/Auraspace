import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";

export default function App() {
  const [mood, setMood] = useState(null);

  return (
    <div>
      {!mood ? (
        <Home setMood={setMood} />
      ) : (
        <Experience mood={mood} setMood={setMood} />
      )}
    </div>
  );
}
