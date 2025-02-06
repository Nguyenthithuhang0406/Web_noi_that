import Image from "next/image";
import React from "react";

interface projectItemProps {
  image: string;
  title: string;
}

const ProjectItem: React.FC<projectItemProps> = ({ image, title }) => {
  return (
    <div className="w-[220px] hover:scale-105 transition-transform">
      <div className="w-full h-[152px] overflow-hidden relative">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <p className="mt-[9px] w-full text-center text-[15px]">{title}</p>
    </div>
  );
};

export default ProjectItem;
