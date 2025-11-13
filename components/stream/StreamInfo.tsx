import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Heart } from "lucide-react";

export function StreamInfo() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Streamer Avatar */}
          <Avatar className="h-16 w-16">
            <AvatarImage src="" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            {/* Stream Title */}
            <h1 className="text-xl font-bold mb-2">
              Amazing gameplay stream - Learning new tricks
            </h1>

            {/* Streamer Name */}
            <p className="text-lg font-semibold mb-3">StreamerName</p>

            {/* Category and Stats */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <Badge variant="secondary" className="flex items-center gap-1">
                <div className="h-3 w-3 rounded bg-[#00FAFA]" />
                Gaming
              </Badge>

              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span>1.2K viewers</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="text-xs">English</Badge>
              <Badge variant="outline" className="text-xs">Competitive</Badge>
              <Badge variant="outline" className="text-xs">Educational</Badge>
            </div>

            {/* Follow Button */}
            <Button className="gap-2">
              <Heart className="h-4 w-4" />
              Follow
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
