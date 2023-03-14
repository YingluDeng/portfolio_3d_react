import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// import { abouts } from "../constants";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <>
    </>
  );
};

// const Feedbacks = () => {
//   return (
//     <div>Feedbacks</div>
//   )
// }

// export default Feedbacks

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <h2 className={`${styles.sectionHeadText} text-center `}>About</h2>
      
//         <div className='flex w-full h-full ml-3 mt-12'>
//         {/* justify-center items-center */}
//           <img
//             src={me}
//             alt={'me_pic'}  
//             className='w-[30%] h-[30%] object-contain rounded-3xl'
//           />
//           <div className="ml-10 text-[20px] max-w-3xl leading-[35px]">
//             I'm a skilled software developer with experience in TypeScript and
//             JavaScript, and expertise in frameworks like React, Node.js, and
//             Three.js. I'm a quick learner and collaborate closely with clients to
//             create efficient, scalable, and user-friendly solutions that solve
//             real-world problems. Let's work together to bring your ideas to life!
//           </div>
//          </div>
//       </motion.div>

{/* 
      <div className='absolute inset-0 flex justify-end m-1 card-img_hover'>
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className='pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
        >
          <img
            src={image}
            alt='source code'
            className='w-9 h-9 object-contain'
          />
        </div>
      </div> */}

      {/* <motion.p
        // variants={fadeIn("", "", 0.1, 1)}
        className='text-left mt-10 ml-40 text-secondary text-[17px] max-w-3xl leading-[25px]'
      >
          <div className='absolute inset-0 flex justify-end m-1 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={image}
              // alt='source code'
              className='w-9 h-9 object-contain'
            />
          </div>
      </motion.p> */}

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
//     </>
//   );
// };

export default SectionWrapper(About, "about");