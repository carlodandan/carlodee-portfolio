import { useState } from 'react';
import './ArtGallery.css';

// Import all images from src/assets
// Line Art Images
import lineart1Crop from '../../assets/img/1/crop/lineart.webp';
import lineart1Full from '../../assets/img/1/full/lineart.webp';
import lineart2Crop from '../../assets/img/2/crop/lineart.webp';
import lineart2Full from '../../assets/img/2/full/lineart.webp';
import lineart3Crop from '../../assets/img/3/crop/lineart.webp';
import lineart3Full from '../../assets/img/3/full/lineart.webp';

// Flat Color Images
import flats1Crop from '../../assets/img/1/crop/flat.webp';
import flats1Full from '../../assets/img/1/full/flat.webp';
import flats2Crop from '../../assets/img/2/crop/flat.webp';
import flats2Full from '../../assets/img/2/full/flat.webp';
import flats3Crop from '../../assets/img/3/crop/flat.webp';
import flats3Full from '../../assets/img/3/full/flat.webp';

// Rendered Images
import rendered1Crop from '../../assets/img/1/crop/rendered.webp';
import rendered1Full from '../../assets/img/1/full/rendered.webp';
import rendered2Crop from '../../assets/img/2/crop/rendered.webp';
import rendered2Full from '../../assets/img/2/full/rendered.webp';
import rendered3Crop from '../../assets/img/3/crop/rendered.webp';
import rendered3Full from '../../assets/img/3/full/rendered.webp';

const ArtGallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = [
    {
      lineart: {
        crop: lineart1Crop,
        full: lineart1Full,
        title: 'Line Art',
        description: 'Clean, precise line work.'
      },
      flats: {
        crop: flats1Crop,
        full: flats1Full,
        title: 'Flat Colors',
        description: 'Base color application.'
      },
      rendered: {
        crop: rendered1Crop,
        full: rendered1Full,
        title: 'Final Render',
        description: 'Complete illustration.'
      }
    },
    {
      lineart: {
        crop: lineart2Crop,
        full: lineart2Full,
        title: 'Line Art',
        description: 'Clean, precise line work.'
      },
      flats: {
        crop: flats2Crop,
        full: flats2Full,
        title: 'Flat Colors',
        description: 'Base color application.'
      },
      rendered: {
        crop: rendered2Crop,
        full: rendered2Full,
        title: 'Final Render',
        description: 'Complete illustration.'
      }
    },
    {
      lineart: {
        crop: lineart3Crop,
        full: lineart3Full,
        title: 'Line Art',
        description: 'Clean, precise line work.'
      },
      flats: {
        crop: flats3Crop,
        full: flats3Full,
        title: 'Flat Colors',
        description: 'Base color application.'
      },
      rendered: {
        crop: rendered3Crop,
        full: rendered3Full,
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