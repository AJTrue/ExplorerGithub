import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboards';
import Repository from '../pages/Repository';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/repositories/:repositorio/:name" element={<Repository />} />
  </Routes>
);

export default Router;
