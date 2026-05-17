"use client";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/globalData";
import { CardContainer } from "./3d-card";

const Experience = () => {
  return (
    <CardContainer className="inter-var h-full">
      <div className="bg-card p-5 pb-11 h-full rounded-xl">
        <Badge className="mb-4" variant="secondary">
          My Experience
        </Badge>
        <div className="relative border-l pb-2 border-muted h-full pl-6 max-h-64 overflow-y-auto">
          {experiences.map((exp, index) => {
            // year رو به دو قسمت تقسیم می‌کنیم
            const [start, end] = exp.year.split(" - ");

            return (
              <div key={index} className="mb-2 flex items-start relative">
                <div className="absolute -left-[30px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-muted rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {start} -{" "}
                    {end === "Present" ? (
                      <span className="text-blue-500 font-semibold">{end}</span>
                    ) : (
                      end
                    )}
                  </p>
                  <p className="text-muted-foreground text-xs font-semibold">
                    {exp.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CardContainer>
  );
};

export default Experience;
