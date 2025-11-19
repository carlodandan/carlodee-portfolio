import './Commission.css';

const Commission = () => {
  const commissionTypes = [
    {
      name: 'Character Portrait',
      price: '$80',
      description: 'A detailed portrait of your character',
      features: ['Head and shoulders', 'Simple background', '2 revisions']
    },
    {
      name: 'Full Body Illustration',
      price: '$150',
      description: 'Full character illustration with background',
      features: ['Full body pose', 'Detailed background', '3 revisions', 'High resolution file']
    },
    {
      name: 'Commercial Use',
      price: '$300+',
      description: 'For commercial projects and merchandise',
      features: ['Full commercial rights', 'Source files', 'Unlimited revisions', 'Priority support']
    }
  ];

  return (
    <section className="commission-section min-h-screen py-5 px-4 sm:px-6 lg:px-8">
      <div className="pt-20 pt-20 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="commission-title text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Commission Information
          </h1>
          <p className="commission-subtitle text-xl text-gray-600 max-w-2xl mx-auto">
            Bring your ideas to life with custom artwork tailored to your vision
          </p>
          <div className="commission-divider w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Commission Tiers */}
        <div className="commission-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {commissionTypes.map((tier, index) => (
            <div key={tier.name} className="commission-tier" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="commission-tier-header">
                <h3 className="commission-tier-name">{tier.name}</h3>
                <div className="commission-tier-price">{tier.price}</div>
              </div>
              <p className="commission-tier-description">{tier.description}</p>
              <ul className="commission-tier-features">
                {tier.features.map((feature) => (
                  <li key={feature} className="commission-tier-feature">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="commission-tier-button">
                Request Commission
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="commission-process">
          <h2 className="commission-process-title text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your idea and requirements' },
              { step: '02', title: 'Sketch', description: 'Receive initial sketch for approval' },
              { step: '03', title: 'Production', description: 'Artwork creation with updates' },
              { step: '04', title: 'Delivery', description: 'Receive final high-quality files' }
            ].map((process) => (
              <div key={process.step} className="commission-process-step">
                <div className="commission-process-step-number">{process.step}</div>
                <h3 className="commission-process-step-title">{process.title}</h3>
                <p className="commission-process-step-description">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commission;