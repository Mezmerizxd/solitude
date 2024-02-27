import React from 'react';

const HomeLayout = React.lazy(() => import('../../../components/Layout/HomeLayout'));

export const Me = () => {
  return (
    <HomeLayout title="Home">
      <div className="flex-1 justify-between items-center space-y-40">
        <div className="mt-20 w-full h-5/6 flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl text-accent-dark font-semibold">Introduction</h1>
          <div className="w-full max-w-4xl p-5">
            <p className="text-xl xl:text-2xl text-left">
              My name is Rory and I'm 20 years old and neurodiverse {'(High Functioning Autism)'}. In 2015, I was
              playing Forza Horizon and wanted to create my own racing game. Me and my grandad started learning Python
              together
              {"(He's a software developer and mainly does Java I think)"}. I created a car game and that was my first
              project
              {'(Car Game, 2D map of a city and a sprite that you could control)'}. Since then, I have gone on to teach
              myself about Web Development, Software Development, Cloud Architecture, Networking, Full-stack Development
              and Project Management.
            </p>
          </div>
        </div>
        <div className=" w-full h-5/6 flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl text-accent-dark font-semibold">Interests & Aspirations</h1>
          <div className="w-full max-w-4xl p-5">
            <p className="text-xl xl:text-2xl text-left">
              I'm a software developer who loves working on servers and backends, as well as creating and consuming
              APIs. I would like to learn more about car ECU's, devices, reverse engineering, and low level coding. I
              have a passion for cars and motorsports, and I'm planning to build a project track car{' '}
              {'(MX-5, Hatchbacks)'} and make my own ECU for it so I have full control over it. I also enjoy ECU
              remapping as a side job, as it's quick and pays well. One of my goals is to drive around Europe in my
              project car and explore different cultures and landscapes.
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
