import { Layout } from "../components";
import { AisleCard } from "../components";
import styled from "styled-components";

export async function getStaticProps(context) {
  const res = await fetch("https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }
  }
}


const Index = ({ data }) => {



  return (
    <Layout title="Foxtrot">
      <main>
        <AisleCard aisle={data.aisle} />
      </main>
    </Layout>
  );
};

export default Index;
