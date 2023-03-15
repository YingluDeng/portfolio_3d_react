import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// u0qyOuqUTPAJWGr5F
// template_pdo1bhn
// service_11ps088

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // const { target } = e;
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        'service_11ps088',
        // 'template_pdo1bhn',
        {
          from_name: form.name,
          to_name: "Cecilia",
          from_email: form.email,
          to_email: "ceciliadeng12@gmail.com",
          message: form.message,
        },
        'u0qyOuqUTPAJWGr5F',
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message!)");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again!");
        }
      );
  };

  return (
    <div
      className={` xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] pink-gradient p-8 rounded-2xl'
      >

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-mono mb-4'>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your name..."
              className='bg-gradient-to-r from-[#eb636c] via-yelow-500 to-[#f79883] focus:bg-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-mono'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-mono mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your email..."
              className='bg-gradient-to-r from-[#eb636c] via-yelow-500 to-[#f79883] focus:bg-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-mono'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-mono mb-4'>Note</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell me about your thought...'
              className='bg-gradient-to-r from-[#eb636c] via-yelow-500 to-[#f79883] focus:bg-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-mono'
            />
          </label>

          <button
            type='submit'
            className='bg-gradient-to-r from-[#eb636c] via-yelow-500 to-[#f79883] hover:bg-red-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[600px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");