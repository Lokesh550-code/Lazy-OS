import { useWindow } from "../hooks/useWindow";

const StartUpMenuApplication = ({ application, setIsFuzzelActive }) => {
  const { addComponents } = useWindow();
  return (
    <h1
      onClick={() => {
        addComponents(application.name, application.applicationId);
        setIsFuzzelActive(false);
      }}
      className="border-l text-center cursor-pointer hover:bg-[#1b1a1a] rounded-r transition select-none"
    >
      {application.name}
    </h1>
  );
};

export default StartUpMenuApplication;
