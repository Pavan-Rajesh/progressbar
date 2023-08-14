"use client";
import { Content } from "@radix-ui/react-accordion";
import React, { useState, useEffect } from "react";
const Page = () => {
  const [progress, setProgress] = useState(0);
  console.log("rendered");
  useEffect(() => {
    const mytimeout = setTimeout(() => {
      setProgress((prev) => prev + 1);
    }, 100);
    if (progress > 99) {
      clearTimeout(mytimeout);
    }
  }, [progress]);

  return (
    <>
      <div
        style={{
          width: "400px",
          height: "20px",
          border: "2px solid red",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: progress > 49 ? "white" : "black",
        }}
      >
        {progress}
        <div
          style={{
            height: "30px",
            width: progress * 4,
            // transform: `scaleX(${progress})`,
            backgroundColor: "green",
            position: "absolute",
            zIndex: "-1",
            left: "0",
            transformOrigin: "left",
            transition: "width 0.3s",
          }}
        ></div>
      </div>
    </>
  );
};

export default Page;
