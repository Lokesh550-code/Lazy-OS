const NavigationMenu = () => {
  return (
    <div className="h-8 w-full bg-[#4a4a4a] flex items-center gap-4 px-5">
      <h1 className="px-1 py-0.5 cursor-pointer select-none hover:bg-[#313131] active:bg-[#131212] rounded transition">File</h1>
      <h1 className="px-1 py-0.5 cursor-pointer select-none hover:bg-[#313131] active:bg-[#131212] rounded transition">Edit</h1>
      <h1 className="px-1 py-0.5 cursor-pointer select-none hover:bg-[#313131] active:bg-[#131212] rounded transition">View</h1>
    </div>
  );
};

export default NavigationMenu;
