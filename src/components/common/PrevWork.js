const PrevWork = ({ imageSrc, title }) => {
  return (
    <div className="flex-shrink-0 w-72 p-4 bg-gray-500 text-white rounded-lg shadow-md mx-2">
      <img src={imageSrc} alt="Preview" className="mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-left overflow-hidden overflow-ellipsis">
        {/* Add your long text here to test text wrapping */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nulla
        sit amet justo consequat sagittis quis id quam.
      </p>
    </div>
  );
};

export default PrevWork;
