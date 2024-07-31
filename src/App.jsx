import { useEffect, useState, useRef } from "react";

import RealImage from "./assets/real.jpg";
import FakeImage from "./assets/fake.jpg";
import RealAudio from "./assets/real.mp3";
import FakeAudio from "./assets/fake.mp3";

import "./App.css";

const STATUS = {
  FAKE: "FAKE",
  REAL: "REAL",
};

const STYLE = {
  FAKE: {
    bgColor: "#EF5A6F",
    img: FakeImage,
    audio: FakeAudio,
  },
  REAL: {
    bgColor: "#536493",
    img: RealImage,
    audio: RealAudio,
  },
};

function App() {
  const [status, setStatus] = useState(STATUS.FAKE);

  const audioRef = useRef(null);

  const handleStatus = () => {
    setStatus((prev) => (prev === STATUS.FAKE ? STATUS.REAL : STATUS.FAKE));
  };

  useEffect(() => {
    audioRef?.current?.play();
  }, [status]);

  return (
    <>
      <audio key={status} ref={audioRef}>
        <source src={STYLE[status].audio} type="audio/mp3" />
      </audio>
      <main
        style={{ height: "100dvh", backgroundColor: STYLE[status].bgColor }}
        onClick={handleStatus}
      >
        <img src={STYLE[status].img} alt="image-1" />
        <h1>{status}</h1>
        <img src={STYLE[status].img} alt="image-2" />
      </main>
    </>
  );
}

export default App;
