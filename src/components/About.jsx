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
import { life_me } from "../assets";

function changePic(e) {
  e.target.setAttribute('src', life_me);
  e.target.setAttribute('alt', 'life pic');
}

function changeBack(e) {
  document.getElementById("pic").src=me;
  // e.target.setAttribute('src', me);
  e.target.setAttribute('alt', 'me pic');
}

const About = (
  index,
  image,
  source_code_link,
) => {
  return (
    <> 
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} text-center`}>About</h2>
      <div className='flex w-full h-full ml-1 mr-5 mt-10'>
        <div className='flex flex-col w-full h-full justify-center items-center'>
          <img
            id="pic"
            src={me}
            alt={'me_pic'}  
            className='shadow-2xl shadow-orange-500/50 w-[100%] h-[100%] object-contain rounded-3xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'
            onClick={changePic} 
          />
          <div onClick={changeBack} className='cursor-pointer text-white mt-5 hover:-translate-y-1 hover:text-orange-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </div>

          <div className='flex w-full h-[150px] place-items-end'>
            <div
              onClick={() => window.open("https://www.linkedin.com/in/yinglu-cecilia-deng/", "_blank")}
              className='cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'
            >
              <img
                src={c_linkedin}
                alt={'fb'}  
                className='w-[100%] h-[100%] object-contain rounded-1xl mt-1'
              />
            </div>

            <div
              onClick={() => window.open("https://github.com/YingluDeng", "_blank")}
              className='cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'
            >
              <img
                src={c_github}
                alt={'fb'}  
                className='w-[100%] h-[100%] object-contain rounded-1xl mt-1'
              />
            </div>

            <div
              onClick={() => window.open("https://www.instagram.com/cec.land/", "_blank")}
              className='cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'
            >
              <img
                src={c_ins}
                alt={'fb'}  
                className='w-[100%] h-[100%] object-contain rounded-1xl mt-1'
              />
            </div>

            <div
              onClick={() => window.open("https://www.facebook.com/vicky.deng.1675/", "_blank")}
              className='cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'
            >
              <img
                src={c_facebook}
                alt={'fb'}  
                className='w-[100%] h-[100%] object-contain rounded-1xl mt-1'
              />
            </div>
          </div>
        </div>

        <div 
          className="bg-clip-content p-6 border-4 border-pink-100 border-dashed rounded-lg ml-20 text-[17px] text-[#492519] mr-12 max-w-3xl leading-[24px]">
          <p>Cecilia is an <b>Engineering Master's</b> student from <b>UCLA</b> 👩‍🎓, where she researches 
           Artificial Intelligence, Machine Learning and Software Engineering. 
          And her <b>Bachelor's degree</b> was in <b>Data Science</b> at <b>UC Berkeley</b>, where she 
          enjoyed creating and programming web applications and combining machine 
          learning algorithms into the web application. She has great interests 
          in Software Engineering and Artificial Intelligence. In her free time, 
          she enjoys exploring new technologies like <b>Android Mobile APP 📱</b> and <b>React</b>, 
          continuously expanding her knowledge and skillset.</p>
          <br />
          <p>Cecilia has <b>3+ years</b> of experience in programming and software development. 👩‍💻 
          Cecilia has worked in various roles including <b>Software Engineering intern, 
          Data Science intern.</b> Cecilia's entrepreneurial spirit is evident through 
          her success in running a small web designing business as a sole trader.</p>
          <br />
          <p>Alongside her academic and professional pursuits, Cecilia indulges in 
          her hobbies of <b>photography 📸️, playing the violin 🎻</b>, and <b>watching good 
          quality movies 🎬</b>. She is also a <b>fitness fanatic</b> and enjoys working out 
          regularly to stay healthy and fit. Additionally, she loves to <b>travel</b> and has 
          traveled <b>over to 100 cities </b> in China, capturing her life moments in photos 
          and videos, and keeping a journal.</p>
        </div>
      </div>
    </motion.div>

    </>
  );
};

export default SectionWrapper(About, "about");