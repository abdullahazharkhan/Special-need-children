import React, { useState } from "react";

const renderInfo = (data) => {
  return (
    <div className="my-3 w-3/4 flex-col flex gap-3">
      <h1 className="text-center underline underline-offset-8 decoration-themeDGreen decoration-4 decoration-dotted text-3xl font-semibold text-themeOrange">
        {data.name}
      </h1>
      <p className="text-center">{data.description}</p>
      <div className="embed-responsive embed-responsive-16by9 mb-4">
        <iframe
          className="embed-responsive-item"
          width="100%"
          height="300"
          src={data.video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Demo Video"
        ></iframe>
      </div>
    </div>
  );
};

const ProjectSpectrum = () => {
  const adhdData = {
    name: "ADHD",
    description:
      "Children with ADHD often exhibit incredible energy, creativity, and curiosity. Despite these strengths, they can struggle with focus, impulsivity, and hyperactivity, which can impact their learning and social interactions. At The Bridge of Hopes, we are dedicated to creating tools that support their unique needs, fostering an engaging and effective learning environment.",
    video: "https://www.youtube.com/embed/YeamHE6Kank?si=OoWSJGrTDdUdI5rc",
  };
  const autismData = {
    name: "Autism",
    description:
      "Children with autism possess unique perspectives and talents, often showcasing exceptional skills and deep interests in specific areas. However, they may face challenges with social interactions, communication, and sensory sensitivities. At The Bridge of Hopes, we are devoted to developing tools that cater to their individual needs, promoting an inclusive and supportive learning environment that helps them thrive and express their full potential.",
    video: "https://www.youtube.com/embed/dUbsyd8Fnyw?si=fRhDIfIk9XGdTV19",
  };
  const palsyData = {
    name: "Cerebral Palsy",
    description:
      "Children with cerebral palsy exhibit incredible resilience and determination, often overcoming significant physical challenges in their daily lives. They may face difficulties with movement, coordination, and muscle control, impacting their ability to participate in typical learning activities. At The Bridge of Hopes, we are committed to creating tools that accommodate their unique needs, ensuring they have access to engaging and supportive educational experiences.",
    video: "https://www.youtube.com/embed/7fUGWKM32hE?si=WXH33UtL8IxnzAJL",
  };
  const dyslexiaData = {
    name: "Dyslexia",
    description:
      "Children with dyslexia are often highly creative and possess unique problem-solving abilities. Despite these strengths, they may struggle with reading, spelling, and writing due to difficulties in processing language. At The Bridge of Hopes, we are dedicated to developing tools that address these challenges, offering tailored support to enhance their reading and learning experiences. Our goal is to empower children with dyslexia to reach their full academic potential and build confidence in their abilities.",
    video: "https://www.youtube.com/embed/HaULXRX9o1E?si=4AgwdtYOiVF7mVAa",
  };
  const [spectrumSelected, setSpectrumSelected] = useState("ADHD");
  return (
    <div className="h-full flex flex-col gap-10 items-center pt-44 lg:pt-32">
      <h1 className="text-center text-5xl font-bold text-themeOrange underline underline-offset-8 decoration-themeDGreen decoration-8">
        Project Spectrum
      </h1>
      <p className="text-center w-2/3">
        At <span className="text-themeOrange font-bold">&quot;</span>
        <span className="text-themeDGreen font-medium">
          The Bridge of Hopes
        </span>
        ,<span className="text-themeOrange font-bold">&quot;</span> we are
        dedicated to developing tools for children with ADHD, Autism, Cerebral
        Palsy, and Dyslexia. Our mission is to enhance their learning
        experiences and support their betterment. We strive to create innovative
        solutions that make learning more accessible and enjoyable for these
        children.
      </p>
      <div className="flex flex-col md:flex-row justify-center flex-wrap items-center gap-2 mx-5">
        <div
          onClick={() => setSpectrumSelected("ADHD")}
          className={`flex justify-center items-center ${
            spectrumSelected === "ADHD" ? "bg-themeOrange" : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          ADHD
        </div>
        <div
          onClick={() => setSpectrumSelected("Autism")}
          className={`flex justify-center items-center ${
            spectrumSelected === "Autism" ? "bg-themeOrange" : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          Autism
        </div>
        <div
          onClick={() => setSpectrumSelected("Palsy")}
          className={`flex justify-center items-center ${
            spectrumSelected === "Palsy" ? "bg-themeOrange" : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          Palsy
        </div>
        <div
          onClick={() => setSpectrumSelected("Dyslexia")}
          className={`flex justify-center items-center ${
            spectrumSelected === "Dyslexia"
              ? "bg-themeOrange"
              : "bg-themeDGreen"
          } text-2xl rounded-3xl text-themeWhite duration-200 p-2 min-w-[290px] font-bold cursor-pointer hover:bg-themeOrange hover:text-themeWhite`}
        >
          Dyslexia
        </div>
      </div>
      {renderInfo(
        spectrumSelected === "ADHD"
          ? adhdData
          : spectrumSelected === "Autism"
          ? autismData
          : spectrumSelected === "Palsy"
          ? palsyData
          : dyslexiaData
      )}
    </div>
  );
};

export default ProjectSpectrum;
