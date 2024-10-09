import React, { useState } from 'react';

const doctorsData = [
    { id: 1, name: "Dr. John Smith", specialty: "Cardiology", timings: ["9:00 AM", "10:00 AM", "11:00 AM"] },
    { id: 2, name: "Dr. Jane Doe", specialty: "Neurology", timings: ["12:00 PM", "1:00 PM", "2:00 PM"] },
    { id: 3, name: "Dr. Alex Johnson", specialty: "Dermatology", timings: ["3:00 PM", "4:00 PM", "5:00 PM"] },
    // Add more doctors and their timings
];

const UserDashboard = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState("All");
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    // Filter doctors by specialty
    const filteredDoctors = selectedSpecialty === "All"
        ? doctorsData
        : doctorsData.filter(doctor => doctor.specialty === selectedSpecialty);

    // Handle doctor selection
    const handleDoctorSelect = (doctor) => {
        setSelectedDoctor(doctor);
        setSelectedTime(null); // Reset time when doctor changes
    };

    // Handle time selection
    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    // Simulate patient registration
    const handleRegister = () => {
        if (selectedDoctor && selectedTime) {
            alert(`Registered with ${selectedDoctor.name} at ${selectedTime}`);
            // Logic to register patient can go here
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-8 font-Rubik text-primary">Doctor Dashboard</h1>

            {/* Filter by Specialty */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 w-1/2">Filter by Specialty:</label>
                <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none"
                >
                    <option value="All">All</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Dermatology">Dermatology</option>
                    {/* Add more specialties */}
                </select>
            </div>

            {/* Doctor List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredDoctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className={`p-4 border rounded-lg cursor-pointer ${selectedDoctor?.id === doctor.id ? 'border-blue-500' : 'border-gray-300'}`}
                        onClick={() => handleDoctorSelect(doctor)}
                    >
                        <h2 className="text-xl font-bold mb-2">{doctor.name}</h2>
                        <p className="text-sm text-gray-500">Specialty: {doctor.specialty}</p>
                        {selectedDoctor?.id === doctor.id && (
                            <div className="mt-4">
                                <p className="font-semibold">Available Timings:</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {doctor.timings.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => handleTimeSelect(time)}
                                            className={`px-4 py-2 border rounded-lg ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Registration */}
            {selectedDoctor && selectedTime && (
                <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Doctor: {selectedDoctor.name}</p>
                            <p>Time: {selectedTime}</p>
                        </div>
                        <button
                            onClick={handleRegister}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Register
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDashboard;
