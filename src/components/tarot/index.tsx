import { Deck } from "./Deck";

function MyTarotSection() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated starfield background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
          radial-gradient(2px 2px at 20% 30%, white, transparent),
          radial-gradient(2px 2px at 60% 70%, white, transparent),
          radial-gradient(1px 1px at 50% 50%, white, transparent),
          radial-gradient(1px 1px at 80% 10%, white, transparent),
          radial-gradient(2px 2px at 90% 60%, white, transparent),
          radial-gradient(1px 1px at 33% 80%, white, transparent),
          radial-gradient(1px 1px at 15% 55%, white, transparent)
        `,
          backgroundSize: "200% 200%",
          animation: "twinkle 8s ease-in-out infinite",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Mystical glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(218, 165, 32, 0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      {/* Header Section */}
      <div
        style={{
          padding: "3rem 2rem 1rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          {/* Decorative top element */}
          <div
            style={{
              fontSize: "2rem",
              color: "#DAA520",
              marginBottom: "1rem",
              filter: "drop-shadow(0 0 10px rgba(218, 165, 32, 0.5))",
              animation: "pulse 3s ease-in-out infinite",
            }}
          >
            ✦
          </div>

          <h1
            style={{
              fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #DAA520 0%, #FFD700 25%, #E6BE8A 50%, #DAA520 75%, #B8860B 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 40px rgba(218, 165, 32, 0.3)",
              letterSpacing: "0.05em",
              margin: "0 0 1rem 0",
              animation: "shimmer 3s linear infinite",
              position: "relative",
            }}
          >
            Mystical Tarot
          </h1>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              color: "#E6D5F5",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 300,
              margin: "0 0 1.5rem 0",
              opacity: 0.9,
            }}
          >
            Unveil Your Destiny
          </p>

          {/* Decorative divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              margin: "0 auto",
              maxWidth: "400px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, #DAA520, transparent)",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                color: "#DAA520",
                fontSize: "1.2rem",
                filter: "drop-shadow(0 0 8px rgba(218, 165, 32, 0.4))",
              }}
            >
              ✧
            </div>
            <div
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, #DAA520, transparent)",
                opacity: 0.5,
              }}
            />
          </div>
        </div>
      </div>

      {/* Deck Component */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Deck />
      </div>

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

export default MyTarotSection;
