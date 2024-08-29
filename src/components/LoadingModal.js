const LoadingModal = () => {
  return (
    <div id="loading-modal" className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black/75">
      <div className="size-1/4 drop-shadow-xl rounded-2xl bg-eerie-black flex items-center justify-center">
        <div className="size-12 border-4 border-t-transparent border-hunyadi-yellow rounded-full animate-spin"></div>

      </div>
    </div>
  );
};

export default LoadingModal;
