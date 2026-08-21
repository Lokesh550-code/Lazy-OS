import logo from "../assets/logo.png"

const Taskbar = () => {
  return <div className="h-10 w-full bg-[#242222] text-[#f6e7d9] font-ui flex items-center">
    <button className="h-10 cursor-pointer hover:scale-105 select-none"><img className="h-10 hover:scale-105 transition select-none" src={logo} alt="" /></button>
    <div className="h-full min-w-100 px-3 border-l border-[#c05037] flex items-center gap-3">
        <h1 className="cursor-pointer select-none hover:scale-105 transition">Files</h1>
        <h1 className="cursor-pointer select-none hover:scale-105 transition">Terminal</h1>
        <h1 className="cursor-pointer select-none hover:scale-105 transition">Editor</h1>
    </div>
  </div>;
};

export default Taskbar;
