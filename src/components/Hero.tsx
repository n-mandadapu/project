import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80"
          alt="Delicious burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Lee's Burgers
          </h1>
          <p className="text-xl text-white mb-8">
            Serving the juiciest burgers in town since 1985
          </p>
          <a
            href="#order"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;