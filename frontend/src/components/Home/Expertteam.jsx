import React from 'react';

// Dummy doctor data
const doctors = [
  {
    id: 1,
    name: 'Dr. John Smith',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Dr. Emily Johnson',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Dr. Michael Brown',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const ExpertTime = () => {
  return (
    <div className='px-[130px] py-10 text-center'>
      {/* Heading and Description */}
      <h3 className='text-4xl font-extrabold mb-4 text-center font-rubik'>
        Our Expert Team
      </h3>
      <p className='text-lg font-light mb-8'>
        Meet our top doctors who are here to provide expert care for all your medical needs.
      </p>

      {/* Doctor Profiles */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
        {doctors.map((doctor) => (
          <div key={doctor.id} className='flex flex-col items-center'>
            {/* Doctor Image */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className='rounded-full w-48 h-48 object-cover mb-4 shadow-lg'
            />
            {/* Doctor Name */}
            <h4 className='text-xl font-bold'>{doctor.name}</h4>
          </div>

        ))}

   
      </div>
      <div className='text-4xl mt-[100px] font-Rubik font-semibold '>Get One Step Ahead Of Disease</div>
      <p className='text-center'>Imperdiet aliquet est vel nulla turpis eu consequat ullamcorper a egestas suspendisse faucibus eu velit, phasellus <br /> pulvinar lorem et libero et tortor, sapien nulla</p>
      <div className='px-[450px]'> <div className="hidden sm:block  mt-7 bg-primary text-white w-[300px] py-4   rounded-lg hover:text-primary  items-center hover:bg-white  transition-colors duration-300">
            <a href="/appointment" className=" rounded-md text-xl  font-medium">Make An Appointment</a>
          </div></div>
    </div>
  );
};

export default ExpertTime;
