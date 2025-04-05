"use client";
import { icons } from "@/data/globalData";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";

const SocialIconsGrid = () => {
  return (
    <CardContainer className="inter-var">
      <div className="grid grid-cols-3 gap-2 pb-2 pt-2 md:pt-0 ">
        {icons.map(({ icon: Icon, link }, index) => (
          <a
            target="_blank"
            href={link}
            key={index}
            className="group bg-card p-4 rounded-2xl flex items-center justify-center transition-all duration-300"
          >
            <Icon
              size={60}
              stroke={1.5}
              className="text-foreground group-hover:text-primary transform transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </CardContainer>
  );
};

export default SocialIconsGrid;
