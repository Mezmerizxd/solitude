import React from 'react';
import { useRoutes } from 'react-router-dom';
import StarfieldAnimation from 'react-starfield-animation';

const { Landing } = lazyImport(() => import('../features/home'), 'Landing');
const { Components } = lazyImport(() => import('../features/home'), 'Components');

import { lazyImport } from '../libs/lazyImport';

export const AppRoutes = () => {
  const commonRoutes = [
    { path: '/', element: <Landing /> },
    {
      path: '/components',
      element: <Components />,
    },
  ];

  const element = useRoutes([...commonRoutes]);

  return (
    <div className="text-white-light bg-black">
      <StarfieldAnimation
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        numParticles={400}
        dx={0.05}
        dy={0.05}
      />
      {element}
    </div>
  );
};
