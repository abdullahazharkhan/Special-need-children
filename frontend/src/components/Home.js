import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {/* hero section */}
      <div className="h-screen bg-themeLGreen flex justify-center items-center">
        <div className="text-center text-6xl sm:text-7xl text-themeDGreen font-extrabold leading-[70px] mt-8 mx-3">
          The <br />
          bridge of <br />
          <span className="text-themeOrange underline-offset-8 underline decoration-themeDGreen text-7xl sm:text-8xl">
            Hopes
          </span>
          <span className="block text-2xl sm:text-4xl font-medium mt-4">
            #TogetherWeCan
          </span>
        </div>
      </div>
      {/* hero section ends*/}
      {/* our mission */}
      <div className="p-3 py-5">
        <h1 className="text-center text-5xl font-bold text-themeOrange">
          Our{" "}
          <span className="underline underline-offset-8 decoration-themeDGreen decoration-8">
            Mission
          </span>
        </h1>
        <div className="sm:w-2/3 md:1/2 mx-auto text-center text-2xl font-semibold">
          <p className="mt-5 ">
            Empowering special needs education through innovative{" "}
            <span className="text-themeDGreen"> AI-driven </span> digital
            solutions, fostering inclusion and growth for all.
          </p>
        </div>
      </div>
      {/* our mission ends*/}
      {/* Ai for children */}
      <div className="p-3 py-5 bg-themeLGreen">
        <h1 className="text-center text-5xl font-bold text-themeOrange">
          AI For The{" "}
          <span className="underline underline-offset-8 decoration-themeDGreen decoration-8">
            Children
          </span>{" "}
          With
        </h1>
        <div className="mt-10 max-w-5xl mx-auto flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-between w-full">
            <div className="rounded-2xl bg-themeWhite flex-1 p-4 text-center">
              <h1 className="text-2xl font-semibold text-themeDGreen">
                Autism
              </h1>
              <p>
                Children with autism often experience challenges in social
                interaction, communication, and exhibit repetitive behaviors.
                They may have unique strengths, such as exceptional memory or
                attention to detail.
              </p>
            </div>
            <div className="rounded-2xl bg-themeWhite flex-1 p-4 text-center">
              <h1 className="text-2xl font-semibold text-themeDGreen">ADHD</h1>
              <p>
                Children with ADHD may struggle with inattention, hyperactivity,
                and impulsiveness. They often benefit from structured
                environments and can be highly creative and energetic, thriving
                in engaging, dynamic activities.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-between w-full">
            <div className="rounded-2xl bg-themeWhite flex-1 p-4 text-center">
              <h1 className="text-2xl font-semibold text-themeDGreen">
                Cerebral Palsy
              </h1>
              <p>
                Children with cerebral palsy have motor impairments that affect
                movement and coordination. They often demonstrate resilience and
                determination, benefiting from therapies that enhance mobility
                and support independence.
              </p>
            </div>
            <div className="rounded-2xl bg-themeWhite flex-1 p-4 text-center">
              <h1 className="text-2xl font-semibold text-themeDGreen">
                Dyslexia
              </h1>
              <p>
                Children with dyslexia face difficulties with reading, spelling,
                and writing. They often have strong problem-solving skills and
                creative thinking, benefiting from tailored educational
                strategies and supportive learning environments.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ai for children ends*/}
      {/* our amazing achievers */}
      <div className="p-3 py-5">
        <h1 className="text-center text-5xl font-bold text-themeOrange">
          Our Amazing{" "}
          <span className="underline underline-offset-8 decoration-themeDGreen decoration-8">
            Achievers
          </span>
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-10 max-w-5xl mx-auto">
          <div className="grid gap-3">
            <div>
              <img
                className="h-auto max-w-full rounded-2xl"
                src="https://www.childrensmn.org/assets/img/istock-1165345367-resize.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-2xl"
                src="https://www.michiganallianceforfamilies.org/wp-content/uploads/2023/08/MAF-autism.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-2xl"
                src="https://raisingchildren.net.au/__data/assets/image/0029/47738/adhd.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-3">
            <div>
              <img
                className="h-auto max-w-full rounded-2xl"
                src="https://stjudes.com.au/wp-content/uploads/2022/10/The-Strengths-of-A-Child-With-Autism.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-2xl"
                src="https://www.michiganallianceforfamilies.org/wp-content/uploads/2023/08/MAF-autism.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-2xl"
                src="https://orthopedicapplianceco.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* our amazing achievers ends*/}

      {/* testimonials section */}
      <div className="p-3 py-5">
        <h1 className="text-center text-5xl font-bold text-themeOrange">
          Stories of{" "}
          <span className="underline underline-offset-8 decoration-themeDGreen decoration-8">
            Hope
          </span>
        </h1>
        <div className="mt-10 max-w-5xl mx-auto flex flex-col gap-3">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            itemClass="px-2"
          >
            <div className="flex flex-col items-center mx-12 lg:mx-0 bg-themeLGreen p-5 rounded-2xl">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFB534"
                  className="absolute -top-4 -left-2 w-8 h-8 text-gray-300 rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg bg-themeOrange"></span>
              <p>John Doe</p>
            </div>
            <div className="flex flex-col items-center mx-12 lg:mx-0 bg-themeLGreen p-5 rounded-2xl">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFB534"
                  className="absolute -top-4 -left-2 w-8 h-8 text-gray-300 rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg bg-themeOrange"></span>
              <p>Jane Doe</p>
            </div>
            <div className="flex flex-col items-center mx-12 lg:mx-0 bg-themeLGreen p-5 rounded-2xl">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFB534"
                  className="absolute -top-4 -left-2 w-8 h-8 text-gray-300 rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg bg-themeOrange"></span>
              <p>Leroy Jenkins</p>
            </div>
            <div className="flex flex-col items-center mx-12 lg:mx-0 bg-themeLGreen p-5 rounded-2xl">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFB534"
                  className="absolute -top-4 -left-2 w-8 h-8 text-gray-300 rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg bg-themeOrange"></span>
              <p>Leroy Jenkins</p>
            </div>
          </Carousel>
        </div>
      </div>
      {/* testimonials section ends*/}
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
