
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

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
        
          {/* <div className='w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'> */}
          <div className='h-4 w-9 text-[#ce6633]'>
          
            {/* <motion.div
              animate={{
                y: [0, 50, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }} */}
              {/* className='w-3 h-3 rounded-full bg-secondary mb-1'
              className='stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3' */}
            {/* /> */}

            {/* Add ArrowPath heroIcon */}
            {/* <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
</svg> */}
           
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