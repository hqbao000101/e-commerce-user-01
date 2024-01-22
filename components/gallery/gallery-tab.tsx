import { Tab } from "@headlessui/react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GallerytabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GallerytabProps> = ({ image }) => {
  return (
    <Tab className="relative flex items-center justify-center bg-white rounded-md cursor-pointer aspect-square">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 w-full h-full overflow-hidden rounded-md aspect-square">
            <Image
              fill
              src={image.url}
              alt={`Gallery Item ${image.id}`}
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
