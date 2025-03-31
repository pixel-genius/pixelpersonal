"use client";
import { Badge } from "@/components/ui/badge";
import { tags } from "@/data/globalData";

const Skills = () => {
  return (
    <div className="bg-card p-5 w-full rounded-xl">
      <Badge className="mb-4" variant="secondary">
        Skills
      </Badge>
      <div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-3 py-1 bg-background hover:bg-primary hover:text-primary-foreground text-foreground text-[10px] rounded-lg cursor-pointer relative"
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
