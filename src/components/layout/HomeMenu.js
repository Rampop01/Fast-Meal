import MenuItem from "../menu/MenuItem";
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
      <div className="grid grid-cols-3 mt-24 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
