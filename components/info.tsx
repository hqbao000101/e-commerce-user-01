"use client"

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/Button";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="flex items-end justify-between mt-3">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size: </h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color: </h3>
          <div className="flex items-center gap-x-2">
            <div
              className="w-6 h-6 border rounded-full shadow-lg"
              style={{ backgroundColor: data?.color?.value }}
            />
            <p>{data?.color?.name}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
