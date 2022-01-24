import React, { useState } from "react";
import Page from "./components/Page";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import "./styles.css";

const StyledApp = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  const [openDrawer, updateDrawer] = useState(false);

  const toggleDrawer = () => {
    updateDrawer(!openDrawer);
  };

  return (
    <StyledApp className={`app-wrapper${openDrawer ? " open-drawer" : ""}`}>
      <SideBar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      <Page openDrawer={openDrawer} />
    </StyledApp>
  );
}
