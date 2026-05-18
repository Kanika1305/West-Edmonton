import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Attractions from "./components/Attractions";
import Events from "./components/Events";
import Spotlight from "./components/spotlight";
import CTA from "./components/CTA";
import Loader from "./components/loader";
import FutureConcept from "./components/FutureComponent";

import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <Loader />;
}
  return (
    <div>
    
      <Navbar />
      <Hero />
      <Stats />
      <Attractions />
      <Events />
      <FutureConcept />
      <Spotlight />
      <CTA />
    </div>
  );
}

export default App;