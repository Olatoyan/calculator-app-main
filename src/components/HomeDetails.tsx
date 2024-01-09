import DisplaySection from "./DisplaySection";
import Header from "./Header";
import NumbersSection from "./NumbersSection";

function HomeDetails() {
  return (
    <section className="w-full max-w-[58rem] space-y-12 px-8 py-6">
      <Header />
      <DisplaySection />
      <NumbersSection />
    </section>
  );
}

export default HomeDetails;
