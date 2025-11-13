import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye } from "lucide-react";

export function StreamCard() {
  return (
    <Card className="overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      {/* Thumbnail/Preview */}
      <div className="relative aspect-video bg-muted">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

        {/* LIVE Badge */}
        <Badge
          variant="destructive"
          className="absolute top-2 left-2 text-xs font-bold"
        >
          LIVE
        </Badge>

        {/* Viewers count */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 rounded px-2 py-1">
          <Eye className="h-3 w-3" />
          <span className="text-xs font-semibold">1.2K</span>
        </div>
      </div>

      <CardContent className="p-3">
        <div className="flex gap-3">
          {/* Streamer Avatar */}
          <Avatar className="h-10 w-10">
            <AvatarImage src="" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            {/* Stream Title */}
            <h3 className="font-semibold text-sm line-clamp-2 mb-1">
              Amazing gameplay stream title here
            </h3>

            {/* Channel Name */}
            <p className="text-xs text-muted-foreground truncate">
              StreamerName
            </p>

            {/* Category Badge */}
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="text-xs">
                Gaming
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
