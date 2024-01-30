import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("c7ee8ece-d792-4d9a-a0d3-83268c6f2dac");
  const products = await getProducts({ isFeatured: true, isArchived: false });

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />
        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
