import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-2xl mx-auto text-gray-600 flex flex-col gap-4 mt-4">
          <p>
            At Fast Meal, our journey began from a simple desire to
            revolutionize the way people approach mealtime. Frustrated by the
            lack of options for quick, yet satisfying meals in today's
            fast-paced world, we set out on a mission to provide a solution.
          </p>
          <p>
            We understand the hustle and bustle of modern life, where time is a
            precious commodity and the need for convenience is paramount. That's
            why we embarked on creating an app that caters to busy individuals
            and families alike, offering a wide array of delicious recipes that
            can be prepared in a fraction of the time it takes for traditional
            cooking methods.
          </p>

          <p>
            Our passion for culinary innovation and commitment to making life
            easier for our users is what drives us each day.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className=" mt-8">
          <a
            href="tel:+2349092341736"
            className="text-4xl underline text-gray-600"
          >
            +234 909 234 1736
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center mt-16 text-gray-600">
        &copy; 2024 All rights reserved(Rampop)
      </footer>
    </>
  );
}
