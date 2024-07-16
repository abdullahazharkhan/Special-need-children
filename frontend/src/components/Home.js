import React from "react";

const Home = () => {
  return (
    <>
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
      <div className="p-3 py-5">
        <h1 className="text-center text-5xl font-bold text-themeOrange">
          Our Amazing{" "}
          <span className="underline underline-offset-8 decoration-themeDGreen decoration-8">
            Achievers
          </span>
        </h1>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto">
          <div class="grid gap-3">
            <div>
              <img
                class="h-auto max-w-full rounded-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-3">
            <div>
              <img
                class="h-auto max-w-full rounded-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
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
