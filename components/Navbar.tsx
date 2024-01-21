import React from "react";
import Link from "next/link";

import Container from "@/components/ui/Container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center h-12 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <p className="text-xl font-bold uppercase">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
