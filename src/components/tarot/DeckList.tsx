import { type CardTarotTy, mockCards } from "./constant";
import { TarotCard } from "./TarotCard";

interface Props {
  items: typeof mockCards;
  isSuffle?: boolean;
  onToggleCard: (card: CardTarotTy) => void;
  drawnIds: number[];
  deckRefs: any;
}

export default function DeckList({
  items,
  isSuffle = false,
  onToggleCard,
  drawnIds,
  deckRefs,
}: Props) {
  return items.map((card, index) => {
    if (drawnIds.includes(card.id)) return null; // Skip drawn cards

    const total = items.length;

    const radius = isSuffle ? 0 : 500;

    const angleDeg = isSuffle ? 0 : -45 + (90 / (total - 1)) * index;
    const angleRad = isSuffle ? 0 : (angleDeg * Math.PI) / 180;

    const x = radius * Math.sin(angleRad);
    const y = radius * (1 - Math.cos(angleRad));

    return (
      <div
        key={card.id}
        ref={(el) => {
          if (!deckRefs.current) return;
          deckRefs.current[card.id] = el;
        }}
        style={{
          position: "absolute",
          transform: `translate(${x}px, ${y}px) rotate(${angleDeg}deg)`,
          transformOrigin: "bottom center",
          zIndex: total - index, // ✅ Higher index = lower zIndex
          cursor: "pointer",
        }}
        className="transition-all duration-[2s] ease-in-out"
        onClick={() => {
          if (drawnIds.includes(card.id)) return;

          onToggleCard(card);
        }}
      >
        {/* <div
          style={{
            width: 100,
            height: 150,
            background: "#333",
            border: "2px solid #555",
            borderRadius: 8,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          BACK
        </div> */}
        <TarotCard index={index + 1} card={card} isFlipAll={false} title="" />
      </div>
    );
  });
}
