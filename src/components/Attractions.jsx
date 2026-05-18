function Attractions() {
  const attractions = [
    {
      title: "Galaxyland",
      image: "/galaxy.jpg",
    },
    {
      title: "World Waterpark",
      image: "/waterpark.jpg",
    },
    {
      title: "Ice Palace",
      image: "/ice.jpg",
    },
  ];

  return (
    <div
      id="attractions"
      style={{
        background:
          "linear-gradient(to bottom, #0a0a0a, #050505)",
        color: "white",
        padding: "clamp(40px, 6vw, 100px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2.5rem, 7vw, 4rem)",
          marginBottom: "20px",
          lineHeight: "1.05",
          letterSpacing: "1px",
          maxWidth: "900px",
        }}
      >
        Attractions & Entertainment
      </h1>

      <p
        style={{
          color: "#d0d0d0",
          maxWidth: "700px",
          lineHeight: "1.8",
          marginBottom: "60px",
          fontSize: "clamp(1rem, 2vw, 1.15rem)",
        }}
      >
        From roller coasters to massive indoor waterparks,
        West Edmonton Mall transforms shopping into an unforgettable
        experience.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {attractions.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
              cursor: "pointer",
              backgroundColor: "#111",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "clamp(320px, 50vw, 500px)",
                objectFit: "cover",
                transition:
                  "transform 0.5s ease, filter 0.5s ease",
                filter: "brightness(0.9)",
              }}
              className="attraction-image"
            />

            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                padding: "25px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: "600",
                  letterSpacing: "1px",
                }}
              >
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attractions;