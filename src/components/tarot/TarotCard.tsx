import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { type CardTarotTy } from "./constant";
import BACK_TAROT from "./BACK_TAROT.png";

interface TarotCardProps {
  index: number;
  card: CardTarotTy;
  isFlipAll: boolean;
  title: string;
}
export function TarotCard({ card, isFlipAll, index, title }: TarotCardProps) {
  const [flipped, setFlipped] = useState(true);

  useEffect(() => {
    if (isFlipAll) {
      setFlipped(false);
    }
  }, [isFlipAll]);

  const CardContent = (
    <motion.div
      style={{
        width: 110,
        height: 190,
        perspective: 1000,
        cursor: "pointer",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {index == 1 && isFlipAll == true && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-sm text-white text-center"
          >
            {title}
          </motion.div>
        )}

        {/* Front */}
        <div
          style={{
            background: "#fff",
            color: "#333",
            border: "1px solid #999",
            borderRadius: 10,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
        >
          {card.name}
        </div>

        {/* Back */}
        {/* <div
          style={{
            background: "#333",
            color: "#fff",
            borderRadius: 10,
            border: "1px solid #666",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          BACK
        </div> */}
        <div
          style={{
            background: "#333",
            color: "#fff",
            borderRadius: 10,
            border: "1px solid #666",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: "bold",
            overflow: "hidden",
          }}
        >
          <img
            src={BACK_TAROT}
            alt="Tarot Card Back"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );

  return index === 2 ? (
    // ✅ For index 2: horizontal layout
    <div className="flex items-center">
      {CardContent}
      {isFlipAll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: 20, height: 110 }}
          className="flex items-center justify-center ml-2"
        >
          <div className="text-sm text-white rotate-[270deg] whitespace-nowrap">
            {title}
          </div>
        </motion.div>
      )}
    </div>
  ) : (
    // ✅ Default: vertical layout
    <motion.div className="flex flex-col items-center overflow-hidden">
      {CardContent}
      {isFlipAll && (
        <motion.div
          className="mt-2 text-sm text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.div>
      )}
    </motion.div>
  );
}
