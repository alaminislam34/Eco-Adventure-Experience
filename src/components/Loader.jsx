const Loader = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[50vh]">
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    </div>
  );
};

export default Loader;
