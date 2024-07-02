import React from 'react';

function DemoVideo({ video }) {
    return (
        <div className="container text-center my-5">
            <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#video-container" aria-expanded="false" aria-controls="video-container">
                    Demo Video
                </button>
            </p>
            <div className='collapse collapse-vertical' id='video-container' style={{ zindex: 1 }}>
                <div className="embed-responsive embed-responsive-16by9 mb-4">
                    <iframe className='embed-responsive-item'
                        width="100%"
                        height="300"
                        src="https://www.youtube.com/embed/your-video-id"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Demo Video"
                    ></iframe>
                </div>
                <h2 className="text-center text-secondary">{video.title}</h2>
                <p className="text-center text-dark">{video.description}
                </p>
            </div>
        </div >
    );
};

export default DemoVideo;
