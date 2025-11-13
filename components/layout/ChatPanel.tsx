"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, Users, SendHorizontal } from "lucide-react";

export function ChatPanel() {
  return (
    <div className="flex h-full w-80 flex-col border-l bg-background">
      {/* Header */}
      <div className="flex items-center justify-between border-b p-3">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Live Chat</h3>
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
          {/* Message 1 */}
          <div className="flex gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-500">User1</span>
                <Badge variant="outline" className="h-4 text-xs">MOD</Badge>
                <span className="text-xs text-muted-foreground">12:34</span>
              </div>
              <p className="text-sm">This is an example chat message!</p>
            </div>
          </div>

          {/* Message 2 */}
          <div className="flex gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-green-500">User2</span>
                <span className="text-xs text-muted-foreground">12:35</span>
              </div>
              <p className="text-sm">Hello everyone! 👋</p>
            </div>
          </div>

          {/* Message 3 */}
          <div className="flex gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-purple-500">User3</span>
                <Badge variant="secondary" className="h-4 text-xs">SUB</Badge>
                <span className="text-xs text-muted-foreground">12:36</span>
              </div>
              <p className="text-sm">Great stream! Keep it up 🔥</p>
            </div>
          </div>

          {/* Message 4 */}
          <div className="flex gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>U4</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-red-500">User4</span>
                <span className="text-xs text-muted-foreground">12:37</span>
              </div>
              <p className="text-sm">Does anyone know what game this is?</p>
            </div>
          </div>
        </div>
      </ScrollArea>

      <Separator />

      {/* Input to send messages */}
      <div className="p-3">
        <div className="flex gap-2">
          <Input placeholder="Send a message..." />
          <Button size="icon">
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Log in to chat
        </p>
      </div>
    </div>
  );
}
