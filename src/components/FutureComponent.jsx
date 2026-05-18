import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

function FutureConcept() {
  const { scrollY } = useScroll();

  const imageY = useTransform(
    scrollY,
    [0, 2000],
    [0, -120]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        minHeight: "100vh",
        padding: "clamp(40px, 6vw, 100px)",
        background:
          "linear-gradient(to bottom, #0a0a0a, #000000)",
        color: "white",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          alignItems: "center",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            zIndex: 2,
          }}
        >
          <p
            style={{
              letterSpacing: "3px",
              color: "#999",
              marginBottom: "20px",
              fontSize: "0.85rem",
            }}
          >
            AI-ASSISTED FUTURE CONCEPT
          </p>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
              lineHeight: "0.95",
              marginBottom: "30px",
              letterSpacing: "1px",
              wordBreak: "break-word",
            }}
          >
            IMMERSIVE
            <br />
            ENTERTAINMENT
            <br />
            DOME
          </h1>

          <p
            style={{
              color: "#d0d0d0",
              lineHeight: "1.9",
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              maxWidth: "580px",
              marginBottom: "45px",
              fontWeight: "300",
            }}
          >
            A future-facing experiential venue concept
            blending immersive storytelling,
            holographic performances, luxury retail
            integration, and large-scale digital
            entertainment into one cinematic
            destination inside West Edmonton Mall.
          </p>

          <button
            style={{
              padding: "16px 36px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "600",
              letterSpacing: "1px",
              fontSize: "0.95rem",
            }}
          >
            VIEW CONCEPT PROPOSAL
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
          
            width: "100%",
            marginTop:"40px",
          }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/future-dome.png"
            alt="Future Entertainment Dome"
            style={{
              width: "100%",
              height: "clamp(320px, 45vw, 650px)",
              objectFit: "cover",
              borderRadius: "30px",
              boxShadow:
                "0px 20px 60px rgba(0,0,0,0.6)",
              transition: "0.5s ease",
              filter: "brightness(0.95)",
              display: "block",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FutureConcept;