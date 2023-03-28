import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { me } from "../assets";
import { abouts } from "../constants";
import { c_linkedin } from "../assets";
import { c_github } from "../assets";
import { c_ins } from "../assets";
import { c_facebook } from "../assets";

const About = (
  index,
  image,
  source_code_link,
) => {
  return (
    <> 
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} text-center`}>About</h2>
      <div className='flex w-full h-full ml-3 mt-5'>
        <img
          src={me}
          alt={'me_pic'}  
          className='w-[35%] h-[35%] object-contain rounded-3xl'
        />
        <div className="ml-12 text-[18px] text-[#492519] mr-12 max-w-3xl leading-[24px]">
          <p>Cecilia is an <b>Engineering Master</b> student from <b>UCLA</b> 👩‍🎓, where she research 
          about Artificial Intelligence, Machine Learning and Software Engineering. 
          And her <b>Bachelor degree</b> was in <b>Data Science</b> at <b>UC Berkeley</b>, where she 
          enjoyed creating and programming web application and combined machine 
          learning algorithm into the web application. She has great interests 
          in Software Engineering and Artificial Intelligence. In her free time, 
          she enjoys exploring new technologies like <b>Android Mobile APP 📱</b> and <b>React</b>, 
          continuously expanding her knowledge and skillset.</p>
          <br />
          <p>Cecilia has <b>5+ years</b> of experience in programming and software development. 👩‍💻 
          Cecilia has worked in various roles including <b>Software Engineering intern, 
          Data Science intern.</b> Cecilia's entrepreneurial spirit is evident through 
          her success in running a small web designing business as a sole trader.</p>
          <br />
          <p>Alongside her academic and professional pursuits, Cecilia indulges in 
          her hobbies of <b>photography 📸️, playing the violin 🎻</b>, and <b>watching good 
          quality movies 🎬</b>. She is also a <b>fitness fanatic</b> and enjoys working out 
          regularly to stay healthy and fit. Additionally, she loves to <b>travel</b> and has 
          traveled <b>over 100 cities </b> in China, capturing her life moments in photos 
          and videos, and keeping a journal.</p>
        </div>
      </div>
    </motion.div>

    

    <div className='ml-10 flex w-full h-[240px]'>
      <div
        onClick={() => window.open("https://www.linkedin.com/in/yinglu-cecilia-deng/", "_blank")}
        className='cursor-pointer'
      >
        <img
          src={c_linkedin}
          alt={'fb'}  
          className='w-[40%] h-[40%] object-contain rounded-1xl mt-8'
        />
      </div>

      <div
        onClick={() => window.open("https://github.com/YingluDeng", "_blank")}
        className='cursor-pointer'
      >
        <img
          src={c_github}
          alt={'fb'}  
          className='w-[40%] h-[40%] object-contain rounded-1xl mt-8'
        />
      </div>

      <div
        onClick={() => window.open("https://www.instagram.com/cec.land/", "_blank")}
        className='cursor-pointer'
      >
        <img
          src={c_ins}
          alt={'fb'}  
          className='w-[40%] h-[40%] object-contain rounded-1xl mt-8'
        />
      </div>

      <div
        onClick={() => window.open("https://www.facebook.com/vicky.deng.1675/", "_blank")}
        className='cursor-pointer'
      >
        <img
          src={c_facebook}
          alt={'fb'}  
          className='w-[40%] h-[40%] object-contain rounded-1xl mt-8'
        />
      </div>
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");