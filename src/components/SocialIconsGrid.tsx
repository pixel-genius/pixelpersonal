import { icons } from "@/data/globalData";

const SocialIconsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 pb-2">
      {icons.map(({ icon: Icon, link }, index) => (
        <a
          href={link}
          key={index}
          className="bg-card p-4 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-all duration-300"
        >
          <Icon size={60} stroke={2} className="text-white" />
        </a>
      ))}
    </div>
  );
};

export default SocialIconsGrid;
