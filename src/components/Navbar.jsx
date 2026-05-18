import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const { scrollYProgress } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    transition: "0.3s",
    fontSize: "0.88rem",
    letterSpacing: "0.5px",
    whiteSpace: "nowrap",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: scrolled
          ? "12px clamp(18px, 4vw, 40px)"
          : "18px clamp(18px, 4vw, 50px)",
        color: "white",
        zIndex: 1000,
        boxSizing: "border-box",
        backdropFilter: "blur(14px)",
        backgroundColor: scrolled
          ? "rgba(0,0,0,0.82)"
          : "rgba(0,0,0,0.35)",
        transition:
          "all 0.35s ease",
        borderBottom:
          scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
        flexWrap: "nowwrap",
        gap: "15px",
      }}
    >
      <div>
        <h2
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            letterSpacing: "3px",
            fontWeight: "600",
            lineHeight: "1",
          }}
        >
          WEST EDMONTON
        </h2>

        <p
          style={{
            fontSize: "0.65rem",
            color: "#999",
            letterSpacing: "2px",
            marginTop: "6px",
          }}
        >
          IMMERSIVE DESTINATION
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "clamp(14px, 1.5vw, 22px)",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="#hero"
          style={linkStyle}
          className="nav-link"
        >
          Home
        </a>

        <a
          href="#stats"
          style={linkStyle}
          className="nav-link"
        >
          About
        </a>

        <a
          href="#attractions"
          style={linkStyle}
          className="nav-link"
        >
          Attractions
        </a>

        <a
          href="#events"
          style={linkStyle}
          className="nav-link"
        >
          Events
        </a>

        <a
          href="#contact"
          style={linkStyle}
          className="nav-link"
        >
          Contact
        </a>
      </div>

      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
          height: "2px",
          background:
            "linear-gradient(to right, white, rgba(255,255,255,0.4))",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          boxShadow:
            "0 0 12px rgba(255,255,255,0.35)",
        }}
      />
    </nav>
  );
}

export default Navbar;