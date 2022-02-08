import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Router from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </>
);

export default App;
