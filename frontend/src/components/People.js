import React from "react";

const renderInfo = (data) => {
  return (
    <div className="my-3 w-3/4 flex-col flex gap-3">
      <h1 className="text-center underline underline-offset-8 decoration-themeDGreen decoration-4 decoration-dotted text-3xl font-semibold text-themeOrange">
        {data[0].heading}
      </h1>
      <p className="text-center">{data[0].desc}</p>
      <div className="info flex flex-wrap justify-center xl:justify-between items-center gap-3">
        {data.slice(1).map((item, index) => (
          <div
            key={index}
            className="rounded-3xl w-[300px] py-4 h-full bg-themeLGreen flex flex-col p-2 justify-evenly items-center"
          >
            <div className="flex w-full h-full justify-evenly items-center">
              {item.img ? (
                <img
                  src={item.img}
                  className="rounded-full w-20 h-20 bg-themeWhite"
                />
              ) : (
                <div className="rounded-full w-20 h-20 bg-themeWhite"></div>
              )}
              <div className="text-center flex-col flex justify-center">
                <h4 className="text-xl font-medium">{item.name}</h4>
                <h4 className="font-light">{item.title}</h4>
              </div>
            </div>
            {/* <p className="text-center">{item.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

const People = () => {
  const expertData = [
    {
      heading: "Experts Panel",
      desc: "Comprising specialists in education and child development, our Experts Panel brings invaluable insights and guidance to tailor our tools to meet the unique needs of each child.",
    },
    {
      name: "Dr. Anum Qureshi",
      title: "Mentor",
      img: "",
      description: "Dr. Anum Qureshi is a mentor at The Bridge of Hopes.",
    },
    {
      name: "Sir John Doe",
      title: "Lead",
      img: "",
      description: "lorem ipsum dolor emet.",
    },
    {
      name: "Miss Jane Doe",
      title: "Lead",
      img: "",
      description: "lorem ipsum dolor emet.",
    },
  ];
  const aiData = [
    {
      heading: "AI Team",
      desc: "Innovators at heart, our AI team harnesses the power of artificial intelligence to develop cutting-edge solutions that enhance learning experiences for children with dyslexia, ADHD, autism, and cerebral palsy.",
    },
    {
      name: "Robert Downey",
      title: "AI Lead",
      img: "",
      description: "",
    },
    {
      name: "Charles Dawson",
      title: "AI Member",
      img: "",
      description: "",
    },
    {
      name: "Frederick Williams",
      title: "AI Member",
      img: "",
      description: "",
    },
  ];
  const devData = [
    {
      heading: "Development Team",
      desc: "The backbone of our operations, our Development Team ensures that our tools are robust, user-friendly, and accessible, bringing our vision to life with technical excellence.",
    },
    {
      name: "William Smith",
      title: "Dev Lead",
      img: "",
      description: "",
    },
    {
      name: "Devone Smith",
      title: "Dev Member",
      img: "",
      description: "",
    },
    {
      name: "Lisa Smith",
      title: "Dev Member",
      img: "",
      description: "",
    },
  ];

  const [selectedInfo, setSelectedInfo] = React.useState("Experts");
  return (
    <div className="h-full flex flex-col gap-10 items-center pt-44 lg:pt-32">
      <h1 className="text-center text-5xl font-bold text-themeOrange">
        <span className="underline underline-offset-8 decoration-themeDGreen decoration-8">
          People
        </span>{" "}
        behind The Bridge of Hopes
      </h1>
      <p className="text-center w-2/3">
        At <span className="text-themeOrange font-bold">&quot;</span>
        <span className="text-themeDGreen font-medium">
          The Bridge of Hopes
        </span>
        ,<span className="text-themeOrange font-bold">&quot;</span> our
        dedicated members are passionately working together to support students
        with special needs. Our enthusiastic team is a harmonious blend of three
        essential pillars:
      </p>
      <div className="flex flex-col md:flex-row justify-center flex-wrap items-center gap-2 mx-5">
        <div
          onClick={() => setSelectedInfo("Experts")}
          className={`flex justify-center items-center ${
            selectedInfo === "Experts" ? "bg-themeOrange" : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          Experts Panel
        </div>
        <div
          onClick={() => setSelectedInfo("AI")}
          className={`flex justify-center items-center ${
            selectedInfo === "AI" ? "bg-themeOrange" : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          AI Team
        </div>
        <div
          onClick={() => setSelectedInfo("Development")}
          className={`flex justify-center items-center ${
            selectedInfo === "Development" ? "bg-themeOrange" : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          Development Team
        </div>
      </div>
      {renderInfo(
        selectedInfo === "Experts"
          ? expertData
          : selectedInfo === "AI"
          ? aiData
          : devData
      )}
    </div>
  );
};

export default People;
// import React from 'react'
// import {  Outlet, NavLink } from 'react-router-dom'

// function People() {

//   return (
//     <div className='container my-5'>
//       <h1>Our Team</h1>
//       <p>The dedicated members of NUCES-FAST Khi are working coperatively to help the students with special needs. Our enthusiast team can be categorized into three classes Experts Panel, AI team, and Development team</p>
//       <hr />
//       <h1 className='mt-7'>Meet our members</h1>

//       <div className='mt-3'>
//         <ul className="nav nav-tabs justify-content-center">
//           <li className="nav-item">
//             <NavLink className={({isActive}) => `nav-link text-secondary ${isActive ? 'active' : ''}`} aria-current="page" to="/people/experts" >Experts</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className={({isActive}) => `nav-link text-secondary ${isActive ? 'active' : ''}`} to="/people/aiTeam" >AI team</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className={({isActive}) => `nav-link text-secondary ${isActive ? 'active' : ''}`} to="/people/devTeam" >Development Team</NavLink>
//           </li>
//         </ul>
//         <Outlet/>
//       </div>

//     </div>
//   )
// }

// export default People
