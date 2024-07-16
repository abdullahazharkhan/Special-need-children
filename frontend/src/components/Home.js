import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-themeLGreen flex justify-center items-center">
        <div className="text-center text-6xl sm:text-7xl text-themeDGreen font-extrabold leading-[70px] mt-8 mx-3">
          The <br />
          Bridge of <br />
          <span className="text-themeOrange underline-offset-8 underline decoration-themeDGreen text-7xl sm:text-8xl">
            Hopes
          </span>
          <span className="block text-2xl sm:text-4xl font-medium mt-4">
            #TogetherWeCan
          </span>
        </div>
      </div>
      <div className="p-3 py-5">
        <h1 className="text-center text-5xl font-bold text-themeOrange underline underline-offset-8 decoration-themeDGreen decoration-8">
          Mission
        </h1>
        <div className="sm:w-2/3 md:1/2 mx-auto text-center text-2xl font-semibold">
          <p className="mt-5 ">
            Empowering special needs education through innovative{" "}
            <span className="text-themeDGreen"> AI-driven </span> digital solutions, fostering inclusion and
            growth for all.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

// import React, { useEffect, useRef } from 'react'

// function Home() {

//     const carouselRef = useRef(null);
//     useEffect(()=>{
//         if(carouselRef.current){
//             new window.bootstrap.Carousel(carouselRef.current,{interval : 4000});
//         }
//     },[])

//     return (
//         <div style={{ height: "600px",position:'absolute',top:'0',width:'100%' }} >

//             <div id="divForCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false" ref={carouselRef}>
//                 <div className='introducer me-4'>
//                     <h1 style={{fontSize:'3em'}}> Application for special need children </h1>
//                     <p style={{fontSize:'1.5em'}}> Empowering special needs education through innovative AI-driven solutions, fostering inclusion and growth for all </p>
//                 </div>

//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={`${process.env.PUBLIC_URL}/crouselPics/pic1.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={`${process.env.PUBLIC_URL}/crouselPics/pic2.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={`${process.env.PUBLIC_URL}/crouselPics/pic3.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={`${process.env.PUBLIC_URL}/crouselPics/pic4.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Home
