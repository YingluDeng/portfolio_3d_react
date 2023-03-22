
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    // change background color from yellow to pink 
    <section className={`relative w-full h-screen bg-gradient-to-r from-yellow-400 via-pink-250 to-pink-400`}>
      <div
        className={`absolute inset-0 top-[60px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* <div className='w-5 h-5 rounded-full bg-[#FFA69E]' /> */}
          {/* <div className='w-2 sm:h-80 h-20 pink-gradient' /> */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#f4606c]'>Cecilia</span>
          </h1>
          <p className={`${styles.heroSubText} mt-0 text-pink-900`}>
          {/* A skilled full-stack developer proficient in creating
          and deploying cloud-based web applications, designing
          REST APIs, and building machine learning software solutions. */}
            Full Stack Software Engineer; <br className='sm:block hidden' />
            Content Creator; <br className='sm:block hidden' />
            Photographer 
          </p>
        </div>
      </div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[600px] h-[350px]'
      > */}
        <ComputersCanvas />
      {/* </motion.div> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          {/* <div className='w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'> */}
          <div className='h-4 w-9 text-[#ce6633]'>
            <svg class="animate-bounce w50 h-50" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path>
            </svg>
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;