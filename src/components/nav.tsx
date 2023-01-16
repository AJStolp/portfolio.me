import { useState } from "react";
import Link from "next/link";
import Hamburger from "@/assets/hamburger.svg";
import Close from "@/assets/close.svg";
import Image from "next/image";
import Button from "./button";
import Section from "./section";
import { NavDatas } from "@/component-data/nav-links";

interface INav {
  activeLink?: string;
  links?: { label: string; href: string }[];
}

const Nav: React.FC<INav> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        buttontype={"primary"}
        className={`${
          isOpen ? "sm:block md:block" : "hidden"
        } md:hidden focus:outline-none`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Image src={Close} alt="hamburger" />
        ) : (
          <Image src={Hamburger} alt="hamburger" />
        )}
      </Button>
      <Section className={`${isOpen ? "block" : "hidden"} flex flex-col`}>
        <Link href={NavDatas.home.href}>{NavDatas.home.title}</Link>
        <Link href={NavDatas.projects.href}>{NavDatas.projects.title}</Link>
        <Link href={NavDatas.contact.title}>{NavDatas.contact.title}</Link>
      </Section>
    </>
  );
};

export default Nav;
