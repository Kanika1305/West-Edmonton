import { motion } from "framer-motion";

function CTA() {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #050505, #000000)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "clamp(40px, 6vw, 100px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p
        style={{
          letterSpacing: "5px",
          color: "#888",
          marginBottom: "25px",
          fontSize: "0.85rem",
        }}
      >
        PARTNER WITH US
      </p>

      <h1
        style={{
          fontSize: "clamp(2.4rem, 8vw, 5rem)",
          maxWidth: "950px",
          lineHeight: "1.05",
          marginBottom: "30px",
          letterSpacing: "1px",
        }}
      >
        Bring Your Brand Into
        <br />
        The Experience.
      </h1>

      <p
        style={{
          maxWidth: "720px",
          color: "#d0d0d0",
          lineHeight: "1.8",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          marginBottom: "55px",
        }}
      >
        Explore leasing opportunities, sponsorship activations,
        entertainment partnerships, and large-scale event
        experiences inside one of the world’s most iconic
        destinations.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <button
          style={{
            padding: "16px 38px",
            borderRadius: "50px",
            border: "none",
            backgroundColor: "white",
            color: "black",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "0.95rem",
            letterSpacing: "0.5px",
            minWidth: "260px",
          }}
        >
          Leasing Opportunities
        </button>

        <button
          style={{
            padding: "16px 38px",
            borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.5)",
            backgroundColor: "transparent",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "0.95rem",
            letterSpacing: "0.5px",
            minWidth: "260px",
            backdropFilter: "blur(10px)",
          }}
        >
          Sponsorship Inquiries
        </button>
      </div>
    </motion.div>
  );
}

export default CTA;