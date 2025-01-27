import { Link } from 'react-router-dom';
import featureCardData from '../utils/data/featureCardData.json'; // Import the JSON data

const Home = () => {
  return (
    <div className="bg-[#1c3b33] text-[#f4f4f4] min-h-screen">
      {/* Hero Section with Video Background */}
      <header className="relative h-80 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/assets/videos/doom-gameplay.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold uppercase text-center tracking-widest">
            Welcome to Hell  
            <span className="block text-[#b45e33]">The Doom Tribute</span>
          </h1>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-12 px-6">
        <p className="text-center text-xl font-light max-w-3xl mx-auto">
          Relive the legacy of *Doom*—the game that reshaped the gaming industry. Explore nostalgic galleries, 
          immerse yourself in classic Doom, and journey through the history of this iconic series.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featureCardData.map((card, index) => (
            <div key={index} className="bg-[#716a4e] rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="mt-2">{card.desc}</p>
              <Link
                to={card.btnLink}
                className="mt-4 inline-block bg-[#b45e33] text-[#f4f4f4] px-4 py-2 rounded-lg hover:bg-[#6c4b36] transition-colors"
              >
                {card.btnTitle}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
