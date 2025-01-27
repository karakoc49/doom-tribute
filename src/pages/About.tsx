const About = () => {
  return (
    <div className="min-h-screen bg-[#1c3b33] text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#b45e33]">About This Project</h1>
      <p className="text-lg max-w-4xl text-center mb-10 text-[#716a4e]">
        This project is a tribute to the legendary game Doom, designed to bring nostalgia and fun to fans old and new. With a sleek modern design and interactive features, it showcases the power of web development and classic gaming.
      </p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-[#4e3b35] p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#b45e33]">Our Mission</h3>
          <p className="text-[#716a4e] text-center">
            To create a seamless gaming experience that honors the legacy of Doom while leveraging modern web technologies.
          </p>
        </div>
        <div className="bg-[#4e3b35] p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#b45e33]">Tech Stack</h3>
          <p className="text-[#716a4e] text-center">
            Built using React, TailwindCSS, and the powerful js-dos library for running DOS games in-browser.
          </p>
        </div>
        <div className="bg-[#4e3b35] p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#b45e33]">Why Doom?</h3>
          <p className="text-[#716a4e] text-center">
            Doom revolutionized gaming and inspired generations of developers. This project keeps that spirit alive.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl bg-[#4e3b35] p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#b45e33]">Fun Facts</h2>
        <ul className="list-disc list-inside text-[#716a4e] space-y-3">
          <li>Doom was originally released in 1993 and has been ported to countless platforms.</li>
          <li>The game popularized the first-person shooter genre and multiplayer deathmatches.</li>
          <li>It's still a favorite for speedrunners and modders worldwide.</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#b45e33]">Meet the Creator</h2>
        <p className="text-lg max-w-3xl mx-auto text-[#716a4e]">
          Hi, I'm a passionate developer who loves combining modern technologies with nostalgic experiences. This project is a labor of love, built to share my enthusiasm for classic gaming with the world.
        </p>
      </div>
    </div>
  );
};

export default About;