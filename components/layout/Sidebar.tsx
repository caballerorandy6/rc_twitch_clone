import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, ChevronRight } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background">
      <ScrollArea className="h-full">
        <div className="space-y-4 p-4">
          {/* Categories */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold">Categories</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-1">
              {/* Gaming */}
              <Button variant="ghost" className="w-full justify-start gap-2">
                <div className="h-6 w-6 rounded bg-[#00FAFA]" />
                <span className="text-sm">Gaming</span>
              </Button>

              {/* Creative */}
              <Button variant="ghost" className="w-full justify-start gap-2">
                <div className="h-6 w-6 rounded bg-[#FFAAA8]" />
                <span className="text-sm">Creative</span>
              </Button>

              {/* Esports */}
              <Button variant="ghost" className="w-full justify-start gap-2">
                <div className="h-6 w-6 rounded bg-[#FAFA19]" />
                <span className="text-sm">Esports</span>
              </Button>

              {/* IRL */}
              <Button variant="ghost" className="w-full justify-start gap-2">
                <div className="h-6 w-6 rounded bg-[#FF73E5]" />
                <span className="text-sm">IRL</span>
              </Button>

              {/* Music */}
              <Button variant="ghost" className="w-full justify-start gap-2">
                <div className="h-6 w-6 rounded bg-[#0CE51C]" />
                <span className="text-sm">Music</span>
              </Button>
            </div>
          </div>

          <Separator />

          {/* Recommended Channels */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold">Recommended</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              {/* Channel 1 */}
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Example Channel</p>
                  <p className="text-xs text-muted-foreground">Gaming</p>
                </div>
                <Badge variant="destructive" className="text-xs">LIVE</Badge>
              </div>

              {/* Channel 2 */}
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Example Channel 2</p>
                  <p className="text-xs text-muted-foreground">Music</p>
                </div>
                <Badge variant="destructive" className="text-xs">LIVE</Badge>
              </div>

              {/* Channel 3 */}
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Example Channel 3</p>
                  <p className="text-xs text-muted-foreground">Creative</p>
                </div>
                <Badge variant="destructive" className="text-xs">LIVE</Badge>
              </div>
            </div>
          </div>

          <Separator />

          {/* Followed Channels */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold">Following</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Log in to see your channels</p>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}
