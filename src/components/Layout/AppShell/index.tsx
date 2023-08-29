import React from "react";
import Navbars from "../Navbars";
import Footers from "../Footers";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbars />
      {children}
      <Footers />
    </main>
  );
};

export default AppShell;
