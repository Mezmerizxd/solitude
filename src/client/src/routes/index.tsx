import React from 'react';
import { useRoutes } from 'react-router-dom';
import { lazyImport } from '../libs/lazyImport';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const { Landing } = lazyImport(() => import('../features/home'), 'Landing');
const { Components } = lazyImport(() => import('../features/home'), 'Components');
const { Me } = lazyImport(() => import('../features/home'), 'Me');
const { Projects } = lazyImport(() => import('../features/home'), 'Projects');

export const AppRoutes = () => {
  const [init, setInit] = React.useState(false);

  const commonRoutes = [
    { path: '/', element: <Landing /> },
    {
      path: '/components',
      element: <Components />,
    },
    {
      path: '/me',
      element: <Me />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
  ];

  const element = useRoutes([...commonRoutes]);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    return;
  };

  const options: ISourceOptions = React.useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'slow',
          },
          onHover: {
            enable: true,
            mode: 'slow',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#D9FF4B',
        },
        links: {
          color: '#BDDE43',
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className="text-white-light bg-black">
      {init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />}
      {element}
    </div>
  );
};
