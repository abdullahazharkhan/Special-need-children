import React from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Project Spectrum",
      href: "/project-spectrum",
    },
    {
      name: "Our Projects",
      href: "/projects",
    },
    {
      name: "People",
      href: "/people",
    },
    {
      name: "Contact Us",
      href: "contact",
    },
  ];
  const [isExpanded, setIsExpanded] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      // Check the window size and set isExpanded accordingly
      if (window.innerWidth < 640) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="w-full fixed z-50 md:flex-row flex-col md:h-16 bg-themeDGreen flex justify-around items-center md:items-stretch gap-2 sm:gap-4 font-poppins p-2 shadow-sm">
      <Link
        to={"/"}
        className="logo rounded-full w-24 h-24 cursor-pointer mt-1 border-2 border-themeOrange"
      >
        <img
          className="w-full h-full rounded-full"
          src={process.env.PUBLIC_URL + "/icon/android-chrome-512x512.png"}
        />
      </Link>
      <div className="menu">
        <ul className="flex flex-col sm:flex-row justify-between items-center h-full gap-2">
          <button
            className={`sm:hidden text-themeWhite`}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? <ImCross className="text-2xl"/> : <TiThMenu className="text-3xl"/>}
          </button>
          {links.map((link) => (
            <li
              key={link.name}
              className={`text-themeWhite ${
                isExpanded ? "block" : "hidden"
              } text-lg mx-2 font-semibold hover:underline-offset-8 decoration-4 decoration-themeOrange duration-200 hover:underline`}
            >
              <NavLink
                onClick={() => {
                  if (window.innerWidth < 640) setIsExpanded(false);
                }}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "underline-offset-8 decoration-4 decoration-themeOrange underline"
                      : ""
                  }`
                }
                to={link.href}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   const [backColor, setBackColor] = useState("bg-transparent");

//   const checkScroll = () => {
//     if (window.scrollY > 50) setBackColor("");
//     else setBackColor("bg-transparent");
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", checkScroll);
//     return () => {
//       window.removeEventListener("scroll", checkScroll);
//     };
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <nav className={`navbar navbar-expand-lg sticky-top ${backColor}`}>
//       <div className="container-fluid">
//         <img
//           className="navbar-brand rounded-circle p-0 m-0"
//           src={process.env.PUBLIC_URL + "/icon/favicon-32x32.png"}
//           alt=""
//         ></img>
//         <NavLink className="navbar-brand mx-2" to="/">
//           Bridge of Hope
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "active" : ""}`
//                 }
//                 aria-current="page"
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item dropdown">
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link dropdown-toggle ${isActive ? "active" : ""}`
//                 }
//                 to="/about"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Project Spectrum
//               </NavLink>
//               <ul className="dropdown-menu">
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       `dropdown-item ${isActive ? "active" : ""}`
//                     }
//                     to="/autism"
//                   >
//                     Autism
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       `dropdown-item ${isActive ? "active" : ""}`
//                     }
//                     to="/adhd"
//                   >
//                     ADHD
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       `dropdown-item ${isActive ? "active" : ""}`
//                     }
//                     to="/dyslexia"
//                   >
//                     Dyslexia
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       `dropdown-item ${isActive ? "active" : ""}`
//                     }
//                     to="/downsyndrome"
//                   >
//                     Downsyndrome
//                   </NavLink>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "active" : ""}`
//                 }
//                 to="/projects"
//               >
//                 Our Projects
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "active" : ""}`
//                 }
//                 to="/people"
//               >
//                 People
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "active" : ""}`
//                 }
//                 to="/contactUs"
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
