import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { navData } from "../../data/navData";

function Navbar() {
  const [navHeight, setNavHeight] = useState();
  const [active, setActive] = useState();

  const activeBtnHandler = (e, id) => {
    setActive(id);
    scrollInto(e);
  };

  const scrollInto = (e) => {
    const element = e.target.innerHTML;
    if (element === "profile")
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    else
      window.document
        .querySelector(`.${element}-container`)
        .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const setActiveEl = () => {
      if (window.scrollY < 800) setActive(0);
      else if (window.scrollY >= 800 && window.scrollY < 1555) setActive(1);
      else if (window.scrollY >= 1555 && window.scrollY < 3600) setActive(2);
      else if (window.scrollY >= 3600) setActive(3);
    };
    window.addEventListener("scroll", setActiveEl);
    return () => window.removeEventListener("scroll", setActiveEl);
  }, []);

  useEffect(() => {
    const changeNavHeight = () => {
      if (window.scrollY > 80) setNavHeight(true);
      else setNavHeight(false);
    };
    window.addEventListener("scroll", changeNavHeight);
    return () => window.removeEventListener("scroll", changeNavHeight);
  }, []);

  return (
    <div
      className="navbar"
      style={{
        height: `${navHeight ? "50px" : "80px"}`,
        borderBottom: `${navHeight ? "0.5px solid #777171" : "none"}`,
      }}
    >
      <div className="center">
        <ul>
          {navData.map((i, index) => {
            return (
              <li
                key={index}
                className={i}
                style={{
                  borderLeft: `${
                    index !== active
                      ? "1px solid transparent"
                      : "1px solid #777171"
                  }`,
                  borderRight: `${
                    index !== active
                      ? "1px solid transparent"
                      : "1px solid #777171"
                  }`,
                }}
                onClick={(e) => activeBtnHandler(e, index)}
              >
                {i}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
