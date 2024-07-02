import React, { useEffect, useRef } from 'react'

function Home() {

    const carouselRef = useRef(null);
    useEffect(()=>{
        if(carouselRef.current){
            new window.bootstrap.Carousel(carouselRef.current,{interval : 4000});
        }
    },[])

    return (
        <div style={{ height: "600px",position:'absolute',top:'0',width:'100%' }} >

            <div id="divForCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false" ref={carouselRef}>
                <div className='introducer me-4'>
                    <h1 style={{fontSize:'3em'}}> Application for special need children </h1>
                    <p style={{fontSize:'1.5em'}}> Empowering special needs education through innovative AI-driven solutions, fostering inclusion and growth for all </p>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${process.env.PUBLIC_URL}/crouselPics/pic1.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/crouselPics/pic2.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/crouselPics/pic3.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/crouselPics/pic4.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
