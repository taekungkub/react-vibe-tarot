import { useRef, useState } from "react";
import { motion } from "motion/react";
import MotionFlyCard from "./MotionFlyCard";
import { type FlyCardTy, mockCards } from "./constant";
import { Button } from "@/components/ui/button";
import DeckList from "./DeckList";
import BG from "./BG_BOARD.png";

const limitDraws = 10;

export function Deck() {
  const deckRefs = useRef({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerFlyRef = useRef<HTMLDivElement | null>(null);

  const [isSuffle, setIsShuffle] = useState(false);

  const [flyCards, setFlyCards] = useState<FlyCardTy[]>([]);
  const [drawnIds, setDrawnIds] = useState<number[]>([]);

  const [stage2, setStage2] = useState(false);
  const div2Ref = useRef<HTMLDivElement | null>(null);

  const [stage3, setStage3] = useState(false);
  const div3_1Ref = useRef<HTMLDivElement | null>(null);
  const div3_2Ref = useRef<HTMLDivElement | null>(null);
  const div3_3Ref = useRef<HTMLDivElement | null>(null);
  const div3_4Ref = useRef<HTMLDivElement | null>(null);
  const div3_5Ref = useRef<HTMLDivElement | null>(null);
  const div3_6Ref = useRef<HTMLDivElement | null>(null);
  const div3_7Ref = useRef<HTMLDivElement | null>(null);
  const div3_8Ref = useRef<HTMLDivElement | null>(null);
  const div3_9Ref = useRef<HTMLDivElement | null>(null);
  const div3_10Ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      style={{
        backgroundImage: `url("${BG}") `,
        backgroundRepeat: "repeat",
      }}
      className="relative flex justify-center w-full "
    >
      <div
        ref={containerRef}
        className="relative flex justify-center w-full max-w-7xl"
      >
        {/* Overlay controls */}
        <div className="absolute top-0 left-0 right-0 z-10 pt-8">
          <div className="flex justify-center w-full">
            <Button
              hidden={stage2}
              onClick={() => {
                setIsShuffle(!isSuffle);
                setTimeout(() => {
                  setIsShuffle(false);
                }, 3000);
              }}
              disabled={isSuffle || flyCards.length >= limitDraws}
              className="bg-linear-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 text-lg shadow-xl"
            >
              Shuffle
            </Button>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 flex justify-center mt-22"
          animate={{ opacity: stage2 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <DeckList
            items={mockCards}
            isSuffle={isSuffle}
            drawnIds={drawnIds}
            deckRefs={deckRefs}
            onToggleCard={(card) => {
              if (flyCards.length >= limitDraws) return;

              const cardEl = deckRefs.current[card.id];
              const containerEl = containerFlyRef.current;

              if (!cardEl || !containerEl) return;

              // Get position relative to container
              const cardRect = cardEl.getBoundingClientRect();
              const containerRect = containerEl.getBoundingClientRect();

              const fromX = cardRect.left - containerRect.left;
              const fromY = cardRect.top - containerRect.top;

              // Get rotation
              let rotation = 0;
              const transform = window.getComputedStyle(cardEl).transform;
              if (transform && transform !== "none") {
                const match = transform.match(/matrix\(([^)]+)\)/);
                if (match) {
                  const [a, b] = match[1].split(", ").map(parseFloat);
                  rotation = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                }
              }

              setDrawnIds((prev) => [...prev, card.id]);

              setFlyCards((prev) => [
                ...prev,
                {
                  id: card.id,
                  card: {
                    ...card,
                    fromX,
                    fromY,
                    rotation,
                  },
                },
              ]);
            }}
          />
        </motion.div>

        <div
          ref={div2Ref}
          className="h-10 w-10 bg-transparent absolute left-46 top-46"
        ></div>

        <div
          ref={div3_1Ref}
          className="h-10 w-10 bg-transparent absolute left-[40%] top-[45%]"
        >
          1
        </div>

        <div
          ref={div3_2Ref}
          className="h-10 w-10 bg-transparent absolute left-[40%] top-[60%]"
        >
          2
        </div>

        <div
          ref={div3_3Ref}
          className="h-10 w-10 bg-transparent absolute left-[40%] top-[15%]"
        >
          3
        </div>

        <div
          ref={div3_4Ref}
          className="h-10 w-10 bg-transparent absolute right-[40%] top-[50%]"
        >
          4
        </div>

        <div
          ref={div3_5Ref}
          className="h-10 w-10 bg-transparent absolute left-[40%] bottom-[10%]"
        >
          5
        </div>

        <div
          ref={div3_6Ref}
          className="h-10 w-10 bg-transparent absolute left-[20%] top-[50%]"
        >
          6
        </div>

        <div
          ref={div3_7Ref}
          className="h-10 w-10 bg-transparent absolute right-[20%] bottom-[10%]"
        >
          7
        </div>

        <div
          ref={div3_8Ref}
          className="h-10 w-10 bg-transparent absolute right-[20%] bottom-[35%]"
        >
          8
        </div>

        <div
          ref={div3_9Ref}
          className="h-10 w-10 bg-transparent absolute right-[20%] top-[35%]"
        >
          9
        </div>

        <div
          ref={div3_10Ref}
          className="h-10 w-10 bg-transparent absolute right-[20%] top-[10%]"
        >
          10
        </div>

        {/* fly cards */}
        <div ref={containerFlyRef} className="relative w-full h-screen">
          {flyCards.map((fly, i) => (
            <MotionFlyCard
              key={fly.id}
              index={i + 1}
              card={fly.card}
              onComplete={() => {
                if (flyCards.length >= limitDraws) setStage2(true);
              }}
              stage2={stage2}
              div2Ref={div2Ref}
              onComplete2={() => {
                setStage3(true);
              }}
              stage3={stage3}
              target3_1Ref={div3_1Ref}
              target3_2Ref={div3_2Ref}
              target3_3Ref={div3_3Ref}
              target3_4Ref={div3_4Ref}
              target3_5Ref={div3_5Ref}
              target3_6Ref={div3_6Ref}
              target3_7Ref={div3_7Ref}
              target3_8Ref={div3_8Ref}
              target3_9Ref={div3_9Ref}
              target3_10Ref={div3_10Ref}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
