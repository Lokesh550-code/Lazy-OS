const Window = () => {
  return (
    <div className="h-100 w-100 absolute top-1/3 left-1/2 bg-[#242222] text-[#f6e7d9] flex items-center justify-center">
      {crypto.randomUUID()}
    </div>
  );
};

export default Window;
