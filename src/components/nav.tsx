import Link from "next/link";
import Hamburger from "@/assets/hamburger.svg";
import Image from "next/image";

export default function Nav() {
  return (
    <section>
      <Image src={Hamburger} alt="hamburger" />
      <Link href={"/projects"}>Projects</Link>
    </section>
  );
}
