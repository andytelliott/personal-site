import React from "react";
const Header = () => {
  const navStyles = {
    width: "100%",
    zIndex: "100",
    justifyContent: "flex-end",
    display: "flex",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };
  const headerStyles = {
    position: "fixed",
    backgroundColor: "var(--baby-powder)",
    zIndex: "100",
    width: "100%",
  };

  const navLinks = [
    {
      href: "#About",
      title: "About Me",
      onClick: () => window.scrollTo(0,0)
    },
    {
      href: "#Projects",
      title: "Projects",
    },
    {
      href: "#FaithActivities",
      title: "Faith and Activities",
    },
    {
      href: "#Contact",
      title: "Contact Me",
    },
  ];
  return (
    <header style={headerStyles}>
      <nav style={navStyles}>
        <ul className="navLinks">
          {navLinks.map((navLink) => (
            <li key={navLink.title}>
              <a onClick={navLink.onClick} href={navLink.href}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        <button className="hamburger">
          <svg width="50px" height="50px" viewBox="25 25 50 50" xmlns="http://www.w3.org/2000/svg">
            <g strokeDasharray="21 100" strokeDashoffset="82" stroke="#aaa" strokeWidth="3" strokeLinecap="round" fill="none">
              <path d="M0 40h62c13 0 6 28-4 18L35 35" />
              <path d="M0 50h70" />
              <path d="M0 60h62c13 0 6-28-4-18L35 65" />
              <animate attributeName="strokeDashoffset"
                      values="82;26"
                      dur="0.4s"
                      fill="freeze" 
                      begin="startAnimation.begin" />
              <animate attributeName="strokeDashoffset"
                      values="26;82"
                      dur="0.4s"
                      fill="freeze" 
                      begin="reverseAnimation.begin" />
            </g>
            <rect id="animate" x="25" y="25" width="50" height="50" fillOpacity="0"/>
              <circle cx="50" cy="50" r="50" fill="red" style={{cursor: "pointer"}} fillOpacity="0">
                <animate dur="0.01s" id="startAnimation" attributeName="r" values="16; 0" fill="freeze" begin="click" />
                <animate dur="0.01s" attributeName="r" values="0; 50" fill="freeze" begin="reverseAnimation.end" />
              </circle>
              <circle cx="50" cy="50" r="0" fill="green" style={{cursor: "pointer"}} fillOpacity="0">
                <animate dur="0.001s" id="reverseAnimation" attributeName="r" values="16; 0" fill="freeze" begin="click" />
                <animate dur="0.001s" attributeName="r" values="0; 50" begin="startAnimation.end"  fill="freeze"  />
              </circle>
          </svg>
        </button>
      </nav>
    </header>
  );
};
export default Header;
