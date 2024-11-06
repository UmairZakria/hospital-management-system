import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col md:flex-row items-centerp-6">
      <div className="md:w-1/2 p-4">
        <img
          src="https://via.placeholder.com/400"
          alt="Healthcare professional with child"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Lorem</h1>
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to provide exceptional pediatric healthcare that promotes the physical, emotional, and developmental well-being of every child. We strive to create a nurturing environment where children feel comfortable and parents feel confident in the care their children receive.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p className="mb-4">
          We envision a community where every child has access to the highest quality healthcare, enabling them to lead healthy and fulfilling lives. Through continuous education, advanced treatments, and compassionate care, we aim to be a trusted partner in your child's health journey.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          Know More
        </button>
      </div>
    </div>
    </>

  );
};

export default About;
