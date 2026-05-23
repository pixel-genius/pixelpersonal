"use client";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Bot, Layers3 } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    title: "PixelGenius Folio",
    label: "Portfolio Builder",
    href: "https://folio.pixelgenius.ir/",
    description:
      "A focused portfolio space for turning selected work into a sharp, shareable story.",
    icon: Layers3,
    accent: "from-sky-500/20 via-primary/10 to-transparent",
    tags: ["Case studies", "Showcase"],
  },
  {
    title: "PixelGenius Chat",
    label: "AI Assistant",
    href: "https://chat.pixelgenius.ir/",
    description:
      "An always-on AI consultant that can guide visitors and support project conversations.",
    icon: Bot,
    accent: "from-emerald-500/20 via-primary/10 to-transparent",
    tags: ["AI", "Live support"],
  },
];

const LocationCard = () => {
  return (
    <div className="bg-card rounded-2xl p-4 relative overflow-hidden mb-2">
      <div className="mb-4 flex items-center justify-between gap-3">
        <Badge variant="secondary">Featured Builds</Badge>
        <span className="text-[11px] text-muted-foreground">PixelGenius Lab</span>
      </div>

      <div className="space-y-2">
        {featuredProjects.map((project) => {
          const Icon = project.icon;

          return (
            <Link
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl bg-background p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${project.accent} text-primary transition-colors group-hover:bg-primary-foreground group-hover:text-primary`}>
                <Icon className="h-4 w-4" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
                      {project.label}
                    </p>
                    <h3 className="truncate text-sm font-semibold leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                  {project.description}
                </p>

                <div className="mt-2 flex gap-1.5 overflow-hidden">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground transition-colors group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LocationCard;
