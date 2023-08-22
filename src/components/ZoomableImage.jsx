import React, { useRef, useEffect, useState } from "react";

export const ZoomableImage = ({ imageUrl }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = imageRef.current;

    const drawImage = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        image,
        position.x,
        position.y,
        canvas.width,
        canvas.height
      );
    };

    const handleZoom = () => {
      canvas.width = image.width * zoomLevel;
      canvas.height = image.height * zoomLevel;
      drawImage();
    };

    image.onload = handleZoom;
    image.src = imageUrl;

    return () => {
      image.onload = null;
    };
  }, [imageUrl, zoomLevel, position]);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
  };

  const handleMouseDown = (event) => {
    setDragging(true);
    setStartPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const deltaX = event.clientX - startPosition.x;
      const deltaY = event.clientY - startPosition.y;
      setPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));
      setStartPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <>
      <div className=" relative cursor-move select-none h-[500px] active:cursor-crosshair overflow-auto justify-center items-center">
        <canvas
          ref={canvasRef}
          style={{}}
          className="max-w-[160%] min-w-[80%] overflow"
          onMouseDown={handleMouseDown}
          // onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {" "}
          <img ref={imageRef} alt="Zoomable" style={{ display: "none" }} />
        </canvas>
      </div>
      <div className=" top-0 flex gap-3">
        <button onClick={handleZoomIn}>Aumentar zoom</button>
        <button onClick={handleZoomOut}>Disminuir zoom</button>
      </div>
    </>
  );
};
