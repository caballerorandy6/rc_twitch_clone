"use client";

import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Settings, Users } from "lucide-react";

export function ChatContainer() {
  return (
    <div className="flex h-full flex-col border rounded-lg bg-background">
      {/* Header */}
      <div className="flex items-center justify-between border-b p-3">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Stream Chat</h3>
          <Badge variant="secondary" className="text-xs">
            <Users className="mr-1 h-3 w-3" />
            1.2K
          </Badge>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages List */}
      <ScrollArea className="flex-1 p-3">
        <div className="space-y-3">
          <ChatMessage
            username="User1"
            message="This is an example chat message!"
            timestamp="12:34"
            isModerator={true}
            userColor="#3B82F6"
          />

          <ChatMessage
            username="User2"
            message="Hello everyone! 👋"
            timestamp="12:35"
            userColor="#10B981"
          />

          <ChatMessage
            username="User3"
            message="Great stream! Keep it up 🔥"
            timestamp="12:36"
            isSubscriber={true}
            userColor="#8B5CF6"
          />

          <ChatMessage
            username="User4"
            message="Does anyone know what game this is?"
            timestamp="12:37"
            userColor="#EF4444"
          />
        </div>
      </ScrollArea>

      <Separator />

      {/* Chat Input */}
      <div className="p-3">
        <ChatInput />
      </div>
    </div>
  );
}
