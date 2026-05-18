import { motion } from "framer-motion";

function Stats() {
  const statsData = [
    {
      number: "800+",
      label: "Stores & Services",
    },
    {
      number: "30M+",
      label: "Annual Visitors",
    },
    {
      number: "100+",
      label: "Dining Experiences",
    },
    {
      number: "9",
      label: "World-Class Attractions",
    },
  ];

  return (
    <motion.div
      id="stats"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        background:
          "linear-gradient(to bottom, #000000, #0a0a0a)",
        color: "white",
        minHeight: "100vh",
        padding: "clamp(40px, 6vw, 100px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.7rem, 8vw, 5rem)",
            marginBottom: "25px",
            lineHeight: "0.95",
            letterSpacing: "1px",
            maxWidth: "850px",
          }}
        >
          More Than A Mall
        </h1>

        <p
          style={{
            color: "#d0d0d0",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: "760px",
            lineHeight: "1.9",
            marginBottom: "90px",
            fontWeight: "300",
          }}
        >
          West Edmonton Mall is a complete entertainment
          destination combining retail, attractions,
          hospitality, and live experiences under one roof.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "30px",
          }}
        >
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: "40px 30px",
                borderRadius: "28px",
                background:
                  "rgba(255,255,255,0.03)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.25)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 3.8rem)",
                  marginBottom: "15px",
                  lineHeight: "1",
                }}
              >
                {item.number}
              </h2>

              <p
                style={{
                  color: "#cccccc",
                  letterSpacing: "1px",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Stats;