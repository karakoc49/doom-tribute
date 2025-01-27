import { Link } from "react-router-dom";

const FeatureCard = (title: string, desc: string, btnTitle: string, btnLink: string) => {
  return (
    <div className="bg-[#716a4e] rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2">{desc}</p>
      <Link
        to={btnLink}
        className="mt-4 inline-block bg-[#b45e33] text-[#f4f4f4] px-4 py-2 rounded-lg hover:bg-[#6c4b36] transition-colors"
      >
        {btnTitle}
      </Link>
    </div>
  );
};

export default FeatureCard;