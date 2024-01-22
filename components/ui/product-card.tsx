"use client";

import Image from "next/image";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image
          src={data?.images?.[0]?.url}
          alt={`Image's ${data?.name}`}
          fill
          className="object-cover rounded-md aspect-square"
        />
        <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => {}}
              className="text-gray-600"
              icon={<Expand />}
            />
            <IconButton
              onClick={() => {}}
              className="text-gray-600"
              icon={<ShoppingCart />}
            />
          </div>
        </div>
      </div>
      
      <div>
        <p className="text-lg font-semibold">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category?.name}
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <Currency value={data?.price}/>
      </div>
    </div>
  );
};

export default ProductCard;
