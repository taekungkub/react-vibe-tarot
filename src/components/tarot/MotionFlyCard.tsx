import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { TarotCard } from "./TarotCard";
import { type CardTarotTy } from "./constant";

type Props = {
  index: number;
  card: CardTarotTy;
  onComplete: () => void;
  div2Ref: React.RefObject<HTMLDivElement | null>;
  stage2: boolean;
  stage3: boolean;
  onComplete2?: () => void;
  target3_1Ref: React.RefObject<HTMLDivElement | null>;
  target3_2Ref: React.RefObject<HTMLDivElement | null>;
  target3_3Ref: React.RefObject<HTMLDivElement | null>;
  target3_4Ref: React.RefObject<HTMLDivElement | null>;
  target3_5Ref: React.RefObject<HTMLDivElement | null>;
  target3_6Ref: React.RefObject<HTMLDivElement | null>;
  target3_7Ref: React.RefObject<HTMLDivElement | null>;
  target3_8Ref: React.RefObject<HTMLDivElement | null>;
  target3_9Ref: React.RefObject<HTMLDivElement | null>;
  target3_10Ref: React.RefObject<HTMLDivElement | null>;
};

export default function MotionFlyCard({
  index,
  card,

  onComplete,
  div2Ref,
  stage2,
  stage3,
  onComplete2,
  target3_1Ref,
  target3_2Ref,
  target3_3Ref,
  target3_4Ref,
  target3_5Ref,
  target3_6Ref,
  target3_7Ref,
  target3_8Ref,
  target3_9Ref,
  target3_10Ref,
}: Props) {
  const controls = useAnimation();

  const [flipAll, setFlipAll] = useState(false);

  useEffect(() => {
    const runAnimation = async () => {
      await controls
        .start({
          position: "absolute",
          left: "50%",
          top: "50%",
          x: "-50%", // shift element by 50% of its width
          y: "-50%", // shift element by 50% of its height
          rotate: 0,
          transition: { duration: 0.8 },
        })
        .then(onComplete);
    };

    runAnimation();
  }, []);

  useEffect(() => {
    if (stage2) {
      controls
        .start({
          position: "absolute",
          left: div2Ref.current?.offsetLeft || 0,
          top: div2Ref.current?.offsetTop || 0,
          transition: { duration: 0.8 },
        })
        .then(onComplete2);
    }
  }, [stage2]);

  const targetRefs = [
    target3_1Ref,
    target3_2Ref,
    target3_3Ref,
    target3_4Ref,
    target3_5Ref,
    target3_6Ref,
    target3_7Ref,
    target3_8Ref,
    target3_9Ref,
    target3_10Ref,
  ];

  useEffect(() => {
    if (!stage3) return;

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    const targetRef = targetRefs[index - 1]; // index starts at 1

    const moveTo = targetRef?.current
      ? {
          left: targetRef.current.offsetLeft,
          top: targetRef.current.offsetTop,
          ...(index === 2 && { rotate: 90 }), // Example: only index 2 rotates
        }
      : {
          left: x,
          top: y,
        };

    controls.start({
      position: "absolute",
      ...moveTo,
      transition: { duration: 0.8 },
    });

    const timeout = setTimeout(() => {
      setFlipAll(true);
    }, 1000);

    return () => clearTimeout(timeout); // cleanup timeout on unmount/change
  }, [stage3]);

  return (
    <motion.div
      initial={{
        position: "absolute",
        left: card.fromX,
        top: card.fromY,
        rotate: card.rotation,
      }}
      animate={controls}
      className="z-50"
    >
      <TarotCard
        index={index}
        card={card}
        isFlipAll={flipAll}
        title={`${index} ${card.name}`}
      />
    </motion.div>
  );
}
