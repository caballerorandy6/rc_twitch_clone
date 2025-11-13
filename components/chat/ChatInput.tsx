"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal, Smile } from "lucide-react";

export function ChatInput() {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Input
            placeholder="Send a message..."
            className="pr-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
          >
            <Smile className="h-4 w-4" />
          </Button>
        </div>

        <Button size="icon">
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Character counter or login prompt */}
      <p className="text-xs text-muted-foreground">
        Log in to chat
      </p>
    </div>
  );
}
