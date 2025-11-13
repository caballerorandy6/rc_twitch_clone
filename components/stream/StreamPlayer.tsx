"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Maximize, Volume2, VolumeX, Settings } from "lucide-react";

export function StreamPlayer() {
  return (
    <Card className="overflow-hidden">
      {/* Video Player Container */}
      <div className="relative aspect-video bg-black">
        {/* Twitch iframe or video element will go here */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-lg">Stream Player</p>
        </div>

        {/* Video Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            {/* Left controls */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Volume2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
