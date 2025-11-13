import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreVertical, Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b bg-background px-6 py-3">
      {/* Midutch Logo */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded bg-[#199AFC]" />
        <span className="text-xl font-bold">Midutch</span>
      </div>

      {/* SearchBar */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search streams, categories..."
          className="pl-10"
        />
      </div>

      {/* Icons: More, Notification, Profile */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
