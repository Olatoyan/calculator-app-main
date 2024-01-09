import DisplaySection from "./DisplaySection";
import Header from "./Header";
import NumbersSection from "./NumbersSection";

function HomeDetails() {
  return (
    <section className="w-full max-w-[54rem] space-y-12">
      <Header />
      <DisplaySection />
      <NumbersSection />
    </section>
  );
}

export default HomeDetails;
