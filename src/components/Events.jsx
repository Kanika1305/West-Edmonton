import { motion } from "framer-motion";

function Events() {
  return (
    <motion.div
      id="events"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        background:
          "linear-gradient(to bottom, #050505, #000000)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(40px, 6vw, 100px)",
        gap: "60px",
        flexWrap: "wrap",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          flex: 1,
          minWidth: "280px",
        }}
      >
        <p
          style={{
            color: "#888",
            marginBottom: "20px",
            letterSpacing: "3px",
            fontSize: "0.85rem",
          }}
        >
          LIVE EXPERIENCES
        </p>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            marginBottom: "30px",
            lineHeight: "1.05",
            maxWidth: "700px",
          }}
        >
          A Global Platform For
          <br />
          Events & Activations
        </h1>

        <p
          style={{
            color: "#d0d0d0",
            lineHeight: "1.9",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            marginBottom: "45px",
            maxWidth: "620px",
          }}
        >
          From large-scale brand activations to entertainment
          experiences, West Edmonton Mall creates unforgettable
          audience engagement opportunities for global brands,
          sponsors, and event partners.
        </p>

        <button
          style={{
            padding: "16px 36px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "50px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "0.95rem",
            letterSpacing: "0.5px",
          }}
        >
          Explore Partnerships
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          flex: 1,
          minWidth: "280px",
        }}
      >
        <img
          src="/events.jpg"
          alt="Events"
          style={{
            width: "100%",
            borderRadius: "28px",
            height: "clamp(350px, 70vw, 700px)",
            objectFit: "cover",
            transition: "0.5s ease",
            filter: "brightness(0.92)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Events;