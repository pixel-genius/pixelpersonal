"use client";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/globalData";
import { CardContainer } from "./3d-card";

const Experience = () => {
  return (
    <CardContainer className="inter-var">
      <div className="bg-card p-5   rounded-xl">
        <Badge className="mb-4" variant="secondary">
          My Experience
        </Badge>
        <div className="relative border-l pb-2 border-muted pl-6 ">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-2 flex items-start relative">
              <div className="absolute -left-[30px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-muted rounded-full"></div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground ">
                  {exp.company}{" "}
                  <span className="text-muted-foreground text-sm">
                    {exp.year}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardContainer>
  );
};

export default Experience;
