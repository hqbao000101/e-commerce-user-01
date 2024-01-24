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
  const cart = useCart();

  const totalPrice = useMemo(() => {
    return cart.items.reduce((total, item) => total + Number(item.price), 0);
  }, [cart]);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_STORE}/checkout`,
      {
        productIds: cart.items.map((item) => item.id),
      }
    );
    console.log(response);

    window.location = response.data.url;
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed");
      cart.removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, cart]);

  return (
    <div className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="w-full mt-6" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
