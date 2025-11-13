import { Badge } from "@/components/ui/badge";

type Props = {
  category: "gaming" | "creative" | "esports" | "irl" | "music";
};

const CATEGORY_COLORS = {
  gaming: "#00FAFA",
  creative: "#FFAAA8",
  esports: "#FAFA19",
  irl: "#FF73E5",
  music: "#0CE51C",
} as const;

const CATEGORY_NAMES = {
  gaming: "Gaming",
  creative: "Creative",
  esports: "Esports",
  irl: "IRL",
  music: "Music",
} as const;

export function CategoryBadge({ category }: Props) {
  const color = CATEGORY_COLORS[category];
  const name = CATEGORY_NAMES[category];

  return (
    <Badge variant="secondary" className="flex items-center gap-2">
      <div
        className="h-3 w-3 rounded"
        style={{ backgroundColor: color }}
      />
      <span>{name}</span>
    </Badge>
  );
}
