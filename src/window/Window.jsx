const Window = ({ application, focusWindow }) => {
  return (
    <div 
    onClick={() => {focusWindow(application.id)}}
    className={`${application.focused? `border-[#943F2B] border-2`: ''} h-100 w-100 absolute top-1/3 left-1/2 bg-[#242222] text-[#f6e7d9] flex items-center justify-center`}>
      {application.applicationName}
    </div>
  );
};

export default Window;
