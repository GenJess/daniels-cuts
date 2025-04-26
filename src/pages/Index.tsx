import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Inject ElevenLabs widget
    const container = document.getElementById("elevenlabs-convai-widget-container");
    if (container && !document.getElementById("elevenlabs-convai-element")) {
      const widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", "RaiuuYKBuyTqbxkY5pLq");
      widget.id = "elevenlabs-convai-element";
      container.appendChild(widget);
      // Inject script
      const script = document.createElement("script");
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      script.type = "text/javascript";
      script.id = "elevenlabs-convai-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {/* ElevenLabs Convai Widget */}
      <div id="elevenlabs-convai-widget-container" />
    </div>
  );
};

export default Index;
