import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/globalData";

const Experience = () => {
  return (
    <div className="bg-card p-5 w-2/4 rounded-xl">
      <Badge className="mb-4" variant="secondary">
        My Experience
      </Badge>
      <div className="relative border-l border-gray-600 pl-6 ">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-2 flex items-start relative">
            <div className="absolute -left-[30px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
            <div>
              <h3 className="font-semibold text-white">{exp.title}</h3>
              <p className="text-gray-400 ">
                {exp.company} <span className="text-gray-500">{exp.year}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;