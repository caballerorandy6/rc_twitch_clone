"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type Props = {
  username?: string;
  message?: string;
  timestamp?: string;
  isModerator?: boolean;
  isSubscriber?: boolean;
  userColor?: string;
};

export function ChatMessage({
  username = "User",
  message = "This is a chat message",
  timestamp = "12:34",
  isModerator = false,
  isSubscriber = false,
  userColor = "#3B82F6",
}: Props) {
  return (
    <div className="flex gap-2 py-1">
      {/* User Avatar */}
      <Avatar className="h-8 w-8">
        <AvatarImage src="" />
        <AvatarFallback>{username[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1">
        {/* Username, Badges, Timestamp */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-sm font-semibold"
            style={{ color: userColor }}
          >
            {username}
          </span>

          {isModerator && (
            <Badge variant="outline" className="h-4 text-xs">
              MOD
            </Badge>
          )}

          {isSubscriber && (
            <Badge variant="secondary" className="h-4 text-xs">
              SUB
            </Badge>
          )}

          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>

        {/* Message Content */}
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
