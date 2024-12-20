const Footer = () => (
    <footer className="bg-cyber-bg py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-2xl text-neon-blue hover:text-white transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-abdullah-ai-ml-developer/"
            className="text-2xl text-neon-purple hover:text-white transition-colors"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-2xl text-green-400 hover:text-white transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="text-sm text-gray-400">© 2024 CodeCraft Academy. Empowering Tech Education.</p>
      </div>
    </footer>
  );
  
  export default Footer;
  