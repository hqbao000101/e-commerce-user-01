"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import toast from "react-hot-toast";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + Number(item.price), 0),
    [items]
  );

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_STORE}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Payment Canceled");
    }
  }, [searchParams, removeAll]);

  return (
    <div className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        className="w-full mt-6"
        onClick={onCheckout}
        disabled={items.length === 0}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
