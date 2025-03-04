import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Badge } from "@/components/ui/badge";
import { tools } from "@/data/globalData";
import { CardContainer } from "./3d-card";

const animation = { duration: 19000, easing: (t: number) => t };

const Stacks = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
     <CardContainer>
      <div className="bg-card rounded-2xl p-4 mb-2 relative overflow-hidden">
      <Badge className="mb-4" variant="secondary">
        Stack I Used
      </Badge>
      <div ref={sliderRef} className="keen-slider">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-background rounded-xl p-4 w-24 flex flex-col items-center gap-2"
          >
            <img src={tool.img} alt={tool.name} className="w-12 h-12" />
            <p className="text-foreground text-sm">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
    

     </CardContainer>
    
  );
};

export default Stacks;
