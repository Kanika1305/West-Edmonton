import { motion } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      id="hero"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(30px, 5vw, 60px)",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/mall-video.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          left: mousePosition.x - 60,
          top: mousePosition.y - 60,
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)",
          filter: "blur(18px)",
          transition:
            "left 0.08s linear, top 0.08s linear",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.78))",
          zIndex: 1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          color: "white",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            color: "#cccccc",
            marginBottom: "25px",
            fontSize: "0.85rem",
          }}
        >
          IMMERSIVE DESTINATION EXPERIENCE
        </p>

        <h1
          style={{
            fontSize: "clamp(2.8rem, 11vw, 7rem)",
            marginBottom: "25px",
            lineHeight: "0.9",
            letterSpacing: "2px",
          }}
        >
          THE NEXT
          <br />
          GLOBAL PLATFORM
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#dddddd",
            maxWidth: "760px",
            margin: "0 auto",
            lineHeight: "1.9",
            padding: "0 10px",
          }}
        >
          West Edmonton Mall transforms retail,
          entertainment, hospitality, and live
          experiences into one destination visited by
          millions every year.
        </p>

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "45px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "16px 34px",
              background: "white",
              color: "black",
              border: "none",
              borderRadius: "50px",
              fontWeight: "600",
              cursor: "pointer",
              letterSpacing: "1px",
              fontSize: "0.92rem",
              minWidth: "230px",
            }}
          >
            LEASING OPPORTUNITIES
          </button>

          <button
            style={{
              padding: "16px 34px",
              background: "transparent",
              color: "white",
              border:
                "1px solid rgba(255,255,255,0.4)",
              borderRadius: "50px",
              fontWeight: "600",
              cursor: "pointer",
              letterSpacing: "1px",
              fontSize: "0.92rem",
              minWidth: "230px",
              backdropFilter: "blur(10px)",
            }}
          >
            BOOK AN EVENT
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;