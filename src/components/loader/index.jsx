import LoaderAnimation from '../../assets/animation/preloader.gif';

const Loader = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="w-full h-full flex justify-center items-center fixed z-[9999] opacity-[65%]">
      <img src={LoaderAnimation} alt="Loading..." width={80} height={80} />
    </div>
  );
};

export default Loader;
