import MenuItem from "../layout/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="relative">
        <img
          src={"/pounded-yam.png"}
          alt={"food"}
          className="absolute right-0 -top-[70px]"
        />
        <img
          src={"/amala2.jpeg"}
          alt={"food"}
          className="absolute left-0 -top-[70px]"
        />
      </div>
      <SectionHeaders subHeader={"check out"} mainHeader={"Menu"} />
      <div className="">
        <MenuItem />
      </div>
    </section>
  );
}
