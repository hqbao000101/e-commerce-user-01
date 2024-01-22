import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

const HomePage = async () => {
  const billboard = await getBillboards("bec8a897-b020-4370-8409-b7735e8faf26");
  const products = await getProducts({ isFeatured: true });

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
