import { useEffect, useState } from "react";
import Link from "next/link";
// import Hamburger from "@/assets/hamburger.svg";
// import Close from "@/assets/close.svg";
// import Image from "next/image";
// import Button from "@/components/button";
import { NavDatas } from "@/component-data/nav-links";
import { NavigationData } from "@/component-data/navigation";

interface INav {
  activeLink?: string;
  links?: { label: string; href: string }[];
  data?: [];
}

const Nav: React.FC<INav> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* add at later date when I have more items - logic is here */}
      {/* <Button
        buttontype={"primary"}
        onClick={() => setIsOpen(!isOpen)}
        className={NavigationData.button.btnClassName}
      >
        {isOpen ? (
          <span className="dark:text-white text-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        ) : (
          <span className="dark:text-white text-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>

          //currentFill isnt accepted need to figure another way to abstract
          // <Image src={Close} alt={NavigationData.closedMenu.alt} />
          // <Image src={Hamburger} alt={NavigationData.openMenu.alt} />
        )}
      </Button> */}
      {isOpen && (
        <nav className={NavigationData.parentSection.className}>
          {NavDatas.map((val, index) => {
            return (
              <section key={val.id} className="group ">
                <section>
                  <Link
                    aria-label={val.ariaLabel}
                    href={val.href}
                    className={val.linkClassName}
                  >
                    {val.title}
                  </Link>
                </section>
                <section className={val.linkSectionClassName}>
                  <img
                    aria-label={val.ariaLabel}
                    src={val.image}
                    alt=""
                    className={val.imgClass}
                    onTouchStart={() =>
                      setTimeout(() => setIsActive(true), 100)
                    }
                    onTouchEnd={() =>
                      setTimeout(() => setIsActive(false), 5000)
                    }
                    onMouseEnter={() =>
                      setTimeout(() => setIsActive(true), 100)
                    }
                    onMouseLeave={() =>
                      setTimeout(() => setIsActive(false), 5000)
                    }
                  />
                  {isActive && (
                    <div className="w-100 h-100 hover:z-20 block">
                      {val.socialLinks?.github && (
                        <Link
                          href={val.socialLinks.githubLink}
                          className={val.socialLinks.className}
                        >
                          {val.socialLinks.github}
                        </Link>
                      )}
                      {val.socialLinks?.linkedin && (
                        <Link
                          href={val.socialLinks.linkedinLink}
                          className={val.socialLinks.className}
                        >
                          {val.socialLinks.linkedin}
                        </Link>
                      )}
                    </div>
                  )}
                </section>
              </section>
            );
          })}
        </nav>
      )}
    </>
  );
};

export default Nav;
