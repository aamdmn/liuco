import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Points from "@/components/points";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Points />
      {/* <Pricing /> */}
    </Layout>
  );
}
