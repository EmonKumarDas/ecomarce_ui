import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ImageWithTimeCounter = () => {
  const [time, setTime] = useState(new Date());

  const timeDiff = time.getTime() - Date.parse("2023-03-02T00:00:00Z");
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
  const seconds = Math.floor((60 - (time.getSeconds() % 60)) % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link to=''>
    <div style={{ position: "relative", height: "30vh",marginTop:"10px",overflow:"hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem",fontWeight:"bold",color:"white", margin: 0 }}>
          Get Ready for Our Flash Sale!
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ margin: "1rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight:"bold", color: "#ff7473", margin: 0 }}>
              {days}
            </h2>
            <p style={{ fontSize: "1.5rem", color: "#ff7473", margin: 0 }}>
              Days
            </p>
          </div>
          <div style={{ margin: "1rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight:"bold", color: "#ffb347", margin: 0 }}>
              {hours}
            </h2>
            <p style={{ fontSize: "1.5rem", color: "#ffb347", margin: 0 }}>
              Hours
            </p>
          </div>
          <div style={{ margin: "1rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight:"bold", color: "#9acd32", margin: 0 }}>
              {minutes}
            </h2>
            <p style={{ fontSize: "1.5rem", color: "#9acd32", margin: 0 }}>
              Minutes
            </p>
          </div>
          <div style={{ margin: "1rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight:"bold", color: "#00bfff", margin: 0 }}>
              {seconds}
            </h2>
            <p style={{ fontSize: "1.5rem", color: "#00bfff", margin: 0 }}>
              Seconds
            </p>
          </div>
        </div>
      </div>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
    </Link>
  );
};

export default ImageWithTimeCounter;
