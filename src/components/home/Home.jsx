// components/Home.jsx
import './Home.css';

const Home = ({ onNavigate }) => {
  return (
    <section className="home-section flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div>
          <h1 className="home-title text-5xl sm:text-6xl lg:text-7xl font-bold">
            Carlo Dee
          </h1>
          <p className="home-subtitle text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
            Anime-style Illustrator & Digital Artist
          </p>
          <p className="home-description text-lg text-gray-500 max-w-3xl mx-auto">
            Bringing characters to life through vibrant colors, expressive emotions, 
            and the unique charm of anime-inspired artistry.
          </p>
          
          {/* CTA Buttons */}
          <div className="home-cta-container flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('art')}
              className="home-cta-primary bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              View My Art Gallery
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="home-cta-secondary border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Learn About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;