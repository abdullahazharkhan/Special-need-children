import React from "react";
import { TiLocation } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="md:h-screen h-full flex justify-center items-center">
      <div className="container flex flex-col md:flex-row w-full px-4 items-center justify-center gap-4 mt-40 md:mt-14 mb-4 relative">
        <img src="/map.webp" alt="map" className="hidden md:block absolute scale-[3] -z-10 top-[110px] filters left-[260px]" />
        <div className="map h-[20rem] w-[18rem] sm:h-[25rem] sm:w-[28rem] md:h-[25rem] md:w-[33rem] border-4 border-themeOrange rounded-3xl">
          <iframe
            className="rounded-3xl h-full w-full"
            title="Fast Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.584966072274!2d67.26270990316506!3d24.856919712056815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3316c5276e35b%3A0x823a6a0100195ffd!2sFAST%20National%20University%20Karachi%20Campus!5e0!3m2!1sen!2s!4v1719289807215!5m2!1sen!2s"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col justify-center font-medium">
          <Link to={"https://khi.nu.edu.pk"}>
            <TiLocation className="text-5xl text-themeDGreen inline" />
            <h3 className="inline">FAST National University, Karachi</h3>
          </Link>
          <Link to={"mailto:anam.qureshi@nu.edu.pk"}>
            <MdAlternateEmail className="text-5xl text-themeDGreen inline" />
            <h3 className="inline">anam.qureshi@nu.edu.pk</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
// import React from "react";
// import styles from "./ContactUs.module.css";
// import { TiLocation } from "react-icons/ti";
// import { IoMdMail } from "react-icons/io";
// import { Link } from "react-router-dom";

// function ContactUs() {
//   return (
//     <div>
//       <div className={styles.responsiveMap}>
//         <iframe
//           title="Fast Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.584966072274!2d67.26270990316506!3d24.856919712056815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3316c5276e35b%3A0x823a6a0100195ffd!2sFAST%20National%20University%20Karachi%20Campus!5e0!3m2!1sen!2s!4v1719289807215!5m2!1sen!2s"
//           width="600"
//           height="450"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//       <div>
//         <div className={styles.contactContainer}>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <TiLocation style={{ fontSize: "40px" }} />
//             <Link className={styles.link} to={"https://khi.nu.edu.pk"}>
//               FAST National University, Karachi
//             </Link>
//           </div>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <IoMdMail style={{ fontSize: "40px", marginRight: "5px" }} />
//             <Link className={styles.link} to={"mailto:anam.qureshi@nu.edu.pk"}>
//               anam.qureshi@nu.edu.pk
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;
