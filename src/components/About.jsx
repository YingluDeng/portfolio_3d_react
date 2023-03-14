import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { me } from "../assets";
import { abouts } from "../constants";
import { c_facebook } from "../assets";

const About = (
  index,
  image,
  source_code_link,
) => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} text-center `}>About</h2>
      <div className='flex w-full h-full ml-3 mt-12'>
        <img
          src={me}
          alt={'me_pic'}  
          className='w-[30%] h-[30%] object-contain rounded-3xl'
        />
        <div className="ml-10 text-[20px] max-w-3xl leading-[35px]">
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        <img
          src={c_facebook}
          alt={'me_pic'}  
          className='w-[30%] h-[30%] object-contain rounded-3xl'
        />
        
        </div>
      </div>
    </motion.div>

    {/* <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div>
        <img
          src={c_facebook}
          alt={'me_pic'}  
          className='w-[30%] h-[30%] object-contain rounded-3xl'
        />
      </div>
    </motion.div> */}

    {/* <div className='mt-20 flex flex-wrap gap-7 ml-50'>
      {abouts.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div> */}

    {/* <div className='absolute inset-0 flex justify-end m-1 card-img_hover'>
      <div
        onClick={() => window.open(source_code_link, "_blank")}
        className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img
          src={c_facebook}
          alt='source code'
          className='w-9 h-9 object-contain'
        />
      </div>
    </div> */}
    {/* <div> */}
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='source code'
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>
    {/* </div> */}
    

    </>
  );
};

export default SectionWrapper(About, "about");