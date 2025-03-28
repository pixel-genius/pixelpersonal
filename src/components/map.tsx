"use client";
import { Badge } from "@/components/ui/badge";

const LocationCard = () => {
  return (
    <div className="bg-card rounded-2xl p-4  relative overflow-hidden mb-2">
      <Badge className="mb-4" variant="secondary">
        Map
      </Badge>
      <div
        className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
        style={{ backgroundImage: "url(/map.png)" }}
      ></div>
      <div className="text-center">
        <h3 className="text-2xl text-foreground tracking-widest font-bold">
          TEHRANPARS
        </h3>
        <p className="text-muted-foreground text-sm mt-1">TEHRAN</p>
        <p className="text-neutral-600 text-xs mt-2">
          35°43'43.6"N 51°32'26.6"E
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
