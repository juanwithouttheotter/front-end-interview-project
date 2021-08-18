import { Layout } from "../components";
import { ProductCard } from "../components";

const Index = () => {
  const testData = {
    id: 54766,
    title: "Pinot & Cab Duo",
    slug: "pinot - cab - duo",
    unitPrice: 29,
    assets: [
      {
        url: "https://d3lbhvavid9616.cloudfront.net/assets/products/54766/1601314088966.jpg"
      }
    ],
    type: 1,
    app_item_type: 1,
    has_offers: true,
    badge: null,
    sale_price: null,
    perks_price: 24
  }

  return (
    <Layout title="Foxtrot">
      <main>
        <h1>Welcome to the Foxtrot front-end coding project</h1>
        <p>
          Please take a look at the README before staring and feel free to reach
          out with any questions or concerns!
        </p>
        <ProductCard
          id={testData.id}
          title={testData.title}
          slug={testData.slug}
          unitPrice={testData.unitPrice}
          assets={testData.assets}
          type={testData.type}
          appItemType={testData.app_item_type}
          hasOffers={testData.has_offers}
          badge={testData.badge}
          salePrice={testData.sale_price}
          perksPrice={testData.perks_price}
        />
      </main>
    </Layout>
  );
};

export default Index;
