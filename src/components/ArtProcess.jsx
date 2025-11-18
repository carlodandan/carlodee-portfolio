// ArtProcess.jsx
import { useState } from 'react';
import './ArtProcess.css';

const ArtProcess = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = {
    lineart: {
      crop: '/img/crop/ken.png',
      full: '/img/full/ken.png',
      title: 'Line Art',
      description: 'Clean, precise line work that defines the character\'s form and structure'
    },
    flats: {
      crop: '/img/crop/ken_copy.png',
      full: '/img/full/ken_copy.png',
      title: 'Flat Colors',
      description: 'Base color application establishing the character\'s color palette'
    },
    rendered: {
      crop: '/img/crop/ken_copy_2.png',
      full: '/img/full/ken_copy_2.png',
      title: 'Final Render',
      description: 'Complete illustration with shading, lighting, and special effects'
    }
  };

  const handleImageClick = (imageType) => {
    setExpandedImage(imageType);
  };

  const closeExpanded = () => {
    setExpandedImage(null);
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Art Process
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my creative workflow from initial sketch to final rendered illustration
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Process Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Creative Process</h2>
          <p className="text-gray-600 leading-relaxed">
            Each illustration goes through a carefully crafted process to ensure the highest 
            quality and emotional impact. I focus on maintaining the anime aesthetic while 
            incorporating modern digital techniques to create vibrant, memorable characters.
          </p>
        </div>

        {/* Art Process Container - Your existing component integrated */}
        <div className="art-process-container">
          <div className="art-separator"></div>

          {/* Images Grid */}
          <div className="art-grid">
            {Object.entries(images).map(([type, data]) => (
              <div key={type} className="art-column">
                <div
                  className="art-image-container"
                  onClick={() => handleImageClick(type)}
                >
                  <img
                    src={data.crop}
                    alt={data.title}
                    className="art-image-cropped"
                  />
                  <div className="art-image-overlay">
                    <h3 className="font-bold text-lg mb-1">{data.title}</h3>
                    <p className="text-sm opacity-90">{data.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="art-separator"></div>
        </div>

        {/* Process Steps Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {Object.entries(images).map(([type, data]) => (
            <div key={type} className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">
                  {type === 'lineart' ? '1' : type === 'flats' ? '2' : '3'}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{data.title}</h3>
              <p className="text-gray-600 text-sm">{data.description}</p>
            </div>
          ))}
        </div>

        {/* Modal for full image */}
        {expandedImage && (
          <div 
            className="art-modal-overlay"
            onClick={closeExpanded}
          >
            <div className="art-modal-content">
              <button
                className="art-modal-close"
                onClick={closeExpanded}
              >
                ✕
              </button>
              <div className="art-modal-image-container">
                <img
                  src={images[expandedImage].full}
                  alt={`Expanded ${images[expandedImage].title}`}
                  className="art-modal-image"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {images[expandedImage].title}
                  </h3>
                  <p className="text-gray-600">
                    {images[expandedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtProcess;