import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #000000, #050505)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        letterSpacing: "3px",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "clamp(2rem, 8vw, 4rem)",
          marginBottom: "20px",
          lineHeight: "1",
          letterSpacing: "4px",
        }}
      >
        WEST EDMONTON
        <br />
        MALL
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        style={{
          color: "#888",
          fontSize: "clamp(0.9rem, 2vw, 1rem)",
          letterSpacing: "2px",
        }}
      >
        Loading Experience...
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "180px" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          height: "2px",
          background:
            "linear-gradient(to right, transparent, white, transparent)",
          marginTop: "35px",
          borderRadius: "10px",
        }}
      />
    </motion.div>
  );
}

export default Loader;