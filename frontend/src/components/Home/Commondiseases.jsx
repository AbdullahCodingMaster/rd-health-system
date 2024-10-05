import React from 'react';

const CommonDiseases = () => {
  // List of common diseases in the UK
  const commonDiseasesUK = [
    {
      id: 1,
      name: 'Asthma',
      description: 'A respiratory condition that causes difficulty breathing due to inflammation of the airways.',
    },
    {
      id: 2,
      name: 'Diabetes',
      description: 'A metabolic disorder where blood sugar levels are too high due to insufficient insulin production.',
    },
    {
      id: 3,
      name: 'Hypertension',
      description: 'Also known as high blood pressure, it can lead to serious conditions such as heart disease.',
    },
    {
      id: 4,
      name: 'Arthritis',
      description: 'A disease causing pain, stiffness, and swelling in the joints, affecting mobility.',
    },
    {
      id: 5,
      name: 'Heart Disease',
      description: 'A range of conditions that affect the heart, including coronary artery disease and arrhythmias.',
    },
    {
      id: 6,
      name: 'Chronic Obstructive Pulmonary Disease (COPD)',
      description: 'A chronic lung disease that makes it hard to breathe, commonly caused by smoking.',
    },
  ];

  return (
    <div className=' px-[130px] py-10 text-black '>
      {/* Title with horizontal lines */}
      <div className="flex items-center mb-8">
        <div className="flex-grow border-t border-gray-900"></div>
        <h3 className="text-4xl font-extrabold mx-4 text-center font-openSans">
          Common Diseases
        </h3>
        <div className="flex-grow border-t border-gray-900"></div>
      </div>

      {/* Disease Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white font-Rubik'>
        {commonDiseasesUK.map((disease) => (
          <div
            key={disease.id}
            className='bg-secondary p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-shadow duration-300'
          >
            <h4 className='text-2xl font-bold mb-4'>{disease.name}</h4>
            <p className='font-thin'>{disease.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonDiseases;
