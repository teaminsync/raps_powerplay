import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideDownFade } from "../utility/animation";
import { ZoomLeft } from "../utility/animation";
import { RotateUp } from "../utility/animation";
import { FlipRight } from "../utility/animation";

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start with low opacity and slightly higher position
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position (down to up)
        transition={{ duration: 1, delay: 0.2 }} // Smooth transition
        viewport={{ once: true }} // Animate only the first time the element comes into view
        className="text-2xl text-center"
      >
        <h2 className="text-[#e87d0e] text-3xl md:text-5xl font-bold mb-3">
          ABOUT US
        </h2>
      </motion.div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <motion.img
          variants={SlideRight(0.5)} // Apply the animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:max-w-[450px]"
          src={assets.about}
          alt="About RAPS"
        />
        <motion.div
          variants={SlideLeft(0.5)} // Title should slide in from up to down
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ lineHeight: "1.8" }}
          className="flex flex-col justify-center gap-6 md:w-2/4 text-white">
          <p>
            <b>RAPS</b> (Rent-A-PlayStation) was founded with a mission to make gaming accessible and enjoyable at home. We aim to provide a flexible PlayStation rental service that allows people to enjoy their favorite games without the need for long-term commitments or hefty upfront costs.
          </p>
          <p>
            We bring the PlayStation experience directly to your doorstep with flexible rental plans tailored to your needs. Whether you're planning a weekend gaming session or a short playtime break, <b>RAPS</b> offers the convenience of renting consoles by the hour or day.
          </p>
          <b className="text-[#e87d0e] text-2xl">Our Mission</b>
          <p>
            At <b>RAPS</b>, our mission is to revolutionize how people experience gaming by offering affordable, convenient, and hassle-free PlayStation rentals. We believe that everyone should have the chance to enjoy top-tier gaming experiences, anytime, anywhere.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
