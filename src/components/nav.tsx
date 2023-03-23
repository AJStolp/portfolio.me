import { useState } from "react";
import Link from "next/link";
import { NavDatas } from "@/component-data/nav-links";
import { NavigationData } from "@/component-data/navigation-data";
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
                          target="_blank"
                        >
                          {val.socialLinks.github}
                        </Link>
                      )}
                      {val.socialLinks?.linkedin && (
                        <Link
                          href={val.socialLinks.linkedinLink}
                          className={val.socialLinks.className}
                          target="_blank"
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
