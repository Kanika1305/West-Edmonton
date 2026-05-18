import { motion } from "framer-motion";

function Spotlight() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <img
        src="/nightmall.jpg"
        alt="Mall"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: "0.45",
          filter: "brightness(0.8)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.8))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(40px, 6vw, 100px)",
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            color: "#cccccc",
            marginBottom: "22px",
            fontSize: "0.85rem",
          }}
        >
          IMMERSIVE DESTINATION
        </p>

        <h1
          style={{
            fontSize: "clamp(2.7rem, 8vw, 7rem)",
            maxWidth: "900px",
            lineHeight: "0.95",
            marginBottom: "35px",
            letterSpacing: "1px",
          }}
        >
          More Than Retail.
          <br />
          A World Built
          <br />
          For Experience.
        </h1>

        <p
          style={{
            maxWidth: "700px",
            color: "#dddddd",
            lineHeight: "1.9",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
          }}
        >
          Combining entertainment, hospitality,
          attractions, and large-scale experiences,
          West Edmonton Mall transforms foot traffic
          into unforgettable engagement.
        </p>
      </div>
    </motion.div>
  );
}

export default Spotlight;