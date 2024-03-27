"use client";

import React from "react";
import { Dropdown } from "antd";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface CollapsedMenuProps {
  data: Category[];
}

const CollapsedMenu: React.FC<CollapsedMenuProps> = ({ data }) => {
  const pathname = usePathname();

  const items = data.map((route) => ({
    key: route.id,
    label: (
      <Link
        href={`/category/${route.id}`}
        className={cn(
          "text-sm transition-colors hover:text-black",
          pathname === `/category/${route.id}`
            ? "text-black"
            : "text-neutral-500"
        )}
      >
        {route.name}
      </Link>
    ),
  }));

  return (
    <Dropdown
      menu={{ items }}
      placement="bottomLeft"
      trigger={["click"]}
      className="cursor-pointer"
    >
      <MenuIcon className="h-[1.2rem] w-[1.2rem] sm:hidden" />
    </Dropdown>
  );
};

export default CollapsedMenu;
