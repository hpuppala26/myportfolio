import React, { useContext } from "react";
import Main from "./Main";

function Layout(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl m-auto">
      <Main />
    </div>
  );
}

export default Layout;
