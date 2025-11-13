"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export function FilterBar() {
  return (
    <div className="flex items-center gap-3 p-4 border-b">
      {/* Filter by Category */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            Category
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>All Categories</DropdownMenuItem>
          <DropdownMenuItem>Gaming</DropdownMenuItem>
          <DropdownMenuItem>Creative</DropdownMenuItem>
          <DropdownMenuItem>Esports</DropdownMenuItem>
          <DropdownMenuItem>IRL</DropdownMenuItem>
          <DropdownMenuItem>Music</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Filter by Language */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            Language
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>All Languages</DropdownMenuItem>
          <DropdownMenuItem>English</DropdownMenuItem>
          <DropdownMenuItem>Spanish</DropdownMenuItem>
          <DropdownMenuItem>Portuguese</DropdownMenuItem>
          <DropdownMenuItem>French</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Sort by */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            Sort by
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Most Viewers</DropdownMenuItem>
          <DropdownMenuItem>Recently Started</DropdownMenuItem>
          <DropdownMenuItem>Recommended</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Popular Tags */}
      <div className="flex items-center gap-2 ml-auto">
        <span className="text-sm text-muted-foreground">Popular:</span>
        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
          Competitive
        </Badge>
        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
          Educational
        </Badge>
        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
          Casual
        </Badge>
      </div>

      {/* More Filters */}
      <Button variant="ghost" size="icon">
        <SlidersHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}
