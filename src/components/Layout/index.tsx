import React, {ReactNode} from "react";
import Navbar from "../Navbar";

interface LayoutProps {
  children?: ReactNode;  // Define the type of `children` as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // useAuth(); // will implement later at end of tutorial

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
