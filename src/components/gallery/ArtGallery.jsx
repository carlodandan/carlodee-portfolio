import { useState } from 'react';
import './ArtGallery.css';

const ArtGallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = [
    {
      lineart: {
        crop: '/img/1/crop/lineart.webp',
        full: '/img/1/full/lineart.webp',
        title: 'Line Art',
        description: 'Clean, precise line work.'
      },
      flats: {
        crop: '/img/1/crop/flat.webp',
        full: '/img/1/full/flat.webp',
        title: 'Flat Colors',
        description: 'Base color application.'
      },
      rendered: {
        crop: '/img/1/crop/rendered.webp',
        full: '/img/1/full/rendered.webp',
        title: 'Final Render',
        description: 'Complete illustration.'
      }
    },
    {
      lineart: {
        crop: '/img/2/crop/lineart.webp',
        full: '/img/2/full/lineart.webp',
        title: 'Line Art',
        description: 'Clean, precise line work.'
      },
      flats: {
        crop: '/img/2/crop/flat.webp',
        full: '/img/2/full/flat.webp',
        title: 'Flat Colors',
        description: 'Base color application.'
      },
      rendered: {
        crop: '/img/2/crop/rendered.webp',
        full: '/img/2/full/rendered.webp',
        title: 'Final Render',
        description: 'Complete illustration.'
      }
    },
    {
      lineart: {
        crop: '/img/3/crop/lineart.webp',
        full: '/img/3/full/lineart.webp',
        title: 'Line Art',
        description: 'Clean, precise line work.'
      },
      flats: {
        crop: '/img/3/crop/flat.webp',
        full: '/img/3/full/flat.webp',
        title: 'Flat Colors',
        description: 'Base color application.'
      },
      rendered: {
        crop: '/img/3/crop/rendered.webp',
        full: '/img/3/full/rendered.webp',
        title: 'Final Render',
        description: 'Complete illustration.'
      }
    }
  ];

  const handleImageClick = (index, type) => {
    setExpandedImage({ index, type });
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
            Art Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my creative workflow from initial sketch to final rendered illustration
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Art Gallery Containers - Each entry has its own container */}
          <div className="art-process-container">
            {/* Images Grid for this artwork */}
            {images.map((artwork, index) => (
            <div key={index} className="art-grid">
              {Object.entries(artwork).map(([type, data]) => (
                <div key={`${index}-${type}`} className="art-column">
                  <div
                    className="art-image-container"
                    onClick={() => handleImageClick(index, type)}
                  >
                    <img
                      src={data.crop}
                      alt={data.title}
                      className="art-image-cropped"
                    />
                  </div>
                </div>
              ))}
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
                  src={images[expandedImage.index][expandedImage.type].full}
                  alt={`Expanded ${images[expandedImage.index][expandedImage.type].title}`}
                  className="art-modal-image"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtGallery;
