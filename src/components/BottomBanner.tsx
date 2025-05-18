import * as React from "react";
import { assets, features } from "../assets/assets";

interface IconsProps {
  title: string;
  text: string;
  image: string;
}

const Icons: React.FC<IconsProps> = ({ title, text, image }) => {
  return (
    <div className="flex items-center gap-4 mt-2">
      <img src={image} alt="Delivery Icon" className="md:w-11 w-9" />
      <div>
        <p className="text-lg md:text-xl font-semibold">{title}</p>
        <p className="text-gray-500/70 text-xs md:text-sm">{text}</p>
      </div>
    </div>
  );
};

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_image}
        alt="Bottom Banner"
        className="w-full hidden md:block mt-16"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="Bottom Banner"
        className="w-full md:hidden mt-16"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Why Are We The Best
          </h3>
          {features.map((item) => (
            <Icons
              title={item?.title}
              text={item?.description}
              image={item?.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
