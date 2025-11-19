import './About.css';

const About = () => {
  return (
    <section className="about-section min-h-screen py-5 px-4 sm:px-6 lg:px-8">
      <div className="pt-20 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="about-title text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Carlo Dee
          </h1>
          <div className="about-divider w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="about-image bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl aspect-square max-w-md mx-auto flex items-center justify-center">
              <span className="text-white text-6xl">🎨</span>
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="about-bio-item">
              <h2 className="about-bio-title text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
              <p className="about-bio-text text-gray-600 leading-relaxed">
                Hello! I'm Carlo Dee, a passionate digital artist specializing in anime-style 
                illustrations. With over 5 years of experience in the digital art space, 
                I've developed a unique style that blends traditional anime aesthetics with 
                modern digital techniques.
              </p>
            </div>

            <div className="about-bio-item">
              <h2 className="about-bio-title text-2xl font-bold text-gray-900 mb-4">My Style</h2>
              <p className="about-bio-text text-gray-600 leading-relaxed">
                My art focuses on creating vibrant, emotionally resonant characters and scenes 
                that tell stories. I love exploring the balance between bold colors, dynamic 
                compositions, and the subtle expressions that bring characters to life.
              </p>
            </div>

            <div className="about-bio-item">
              <h2 className="about-bio-title text-2xl font-bold text-gray-900 mb-4">Skills & Tools</h2>
              <div className="about-skills-grid grid grid-cols-2 gap-4">
                {[
                  'Digital Illustration',
                  'Character Design',
                  'Color Theory',
                  'Composition',
                  'Clip Studio Paint',
                  'Photoshop',
                  'Procreate',
                  'Traditional Media'
                ].map((skill) => (
                  <div key={skill} className="about-skill-item flex items-center space-x-2">
                    <div className="about-skill-dot w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="about-skill-text text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;