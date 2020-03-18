import React from 'react';
import styled from 'styled-components';

import MapboxGLMap from '.';

const Header = styled('header')`
  width: 100vw;
  height: 80px;
  border-bottom: 2px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <>
      <Header>
        <h1>Mapbox GL Components</h1>
      </Header>
      <main>
        <MapboxGLMap />
      </main>
    </>
  );
};

export default Layout;
