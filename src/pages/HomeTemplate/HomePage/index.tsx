import HomeCarousel from "../_component/HomeCarousel/HomeCarousel";
import MultipleRows from "./_component/MultipleRowSlick";

export default function ListMovie() {
  return (
    <div>
      <HomeCarousel />
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRows />
        </div>
      </section>
      <div className="mx-36"></div>
    </div>
  );
}
