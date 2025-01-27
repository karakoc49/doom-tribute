const Footer = () => {
  return (
    <footer className="bg-[#4e3b35] text-center py-6">
        <div className="max-w-7xl mx-auto flex justify-center gap-6">
          {/* GitHub Link */}
          <a
            href="https://github.com/karakoc49" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#b45e33] hover:text-[#f4f4f4] text-lg"
          >
            GitHub
          </a>
          {/* Add more links like Twitter, LinkedIn, etc. */}
          <a
            href="https://twitter.com/karakoc49"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b45e33] hover:text-[#f4f4f4] text-lg"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/haluk-karakoc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b45e33] hover:text-[#f4f4f4] text-lg"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm font-light mt-4">
          © 2025 Doom Tribute. Fan-made for all Doom fans. Not affiliated with id Software.
        </p>
      </footer>
  );
};

export default Footer;