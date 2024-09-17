const CallToAction = () => {
  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Get One Step Ahead Of Disease
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Imperdiet aliquet est vel nulla turpis eu consequat ullamcorper a
          egestas suspendisse faucibus eu velit, phasellus pulvinar lorem et
          libero et tortor, sapien nulla.
        </p>
        <a
          href="/appointment"
          className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary-dark transition-colors duration-300"
        >
          Make An Appointment
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
