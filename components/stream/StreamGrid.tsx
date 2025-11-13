import { StreamCard } from "./StreamCard";

export function StreamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
      {/* Grid of StreamCards - Will be populated with data */}
      <StreamCard />
      <StreamCard />
      <StreamCard />
      <StreamCard />
      <StreamCard />
      <StreamCard />
      <StreamCard />
      <StreamCard />
    </div>
  );
}
