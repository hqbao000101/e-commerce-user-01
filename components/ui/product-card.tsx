"use client";

import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
      {data.name}
    </div>
  );
};

export default ProductCard;
