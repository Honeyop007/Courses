const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 px-4">
    <div className="container mx-auto text-center animate-float">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-orbitron heading-font ">
        Transform Your Tech Skills
      </h1>
      <p className="text-base md:text-lg mb-6 text-gray-300 max-w-2xl mx-auto">
        Cutting-edge programming courses designed to launch your tech career with industry-leading expertise.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="#courses"
          className="px-6 py-3 bg-neon-blue text-cyber-bg rounded-full hover:bg-opacity-80 transition-all shadow-neon"
        >
          Explore Courses
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-neon-purple text-neon-purple rounded-full hover:bg-neon-purple hover:text-cyber-bg transition-all"
        >
          Enroll Now
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
