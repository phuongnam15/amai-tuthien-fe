import { Outlet } from "react-router-dom";

const BlankLayout = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default BlankLayout;
