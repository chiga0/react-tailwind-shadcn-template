import { Route, Routes } from 'react-router';
import React from 'react';

const Home = React.lazy(() => import('./home'));
const About = React.lazy(() => import('./about'));

export default function Pages() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}
