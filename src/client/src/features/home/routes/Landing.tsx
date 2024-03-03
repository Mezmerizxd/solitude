import React from 'react';
import { Link } from 'react-scroll';
import { Section } from '../components/Section';
import { Button } from '../../../components/Elements';
import Accordion from '../../../components/Elements/Accordion/Accordion';
import { home_hero_quotes } from '../../../constants';
import { FaArrowDown } from 'react-icons/fa';
import { RiGitRepositoryFill } from 'react-icons/ri';

const HomeLayout = React.lazy(() => import('../../../components/Layout/HomeLayout'));

export const Landing = () => {
  const random_quote = home_hero_quotes[Math.floor(Math.random() * home_hero_quotes.length)];

  return (
    <HomeLayout title="Home">
      <Section id="1" className="flex flex-col justify-center items-center">
        <h1 className="p-5 italic text-2xl sm:text-2xl md:text-3xl lg:text-4xl">"{random_quote.quote}"</h1>
        <h2 className="font-semibold lg:text-2xl">- {random_quote.author}</h2>
        <Link className="mt-5" to="2" spy={true} smooth={true} duration={1000}>
          <Button>Start</Button>
        </Link>
      </Section>
      <Section id="2">
        <div className="w-full h-5/6 flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl">Me</h1>
          <div className="w-full max-w-4xl p-5 mt-5">
            <p className="text-xl xl:text-2xl text-left">
              I'm Rory, a 20-year-old software developer from the UK. I'm passionate about coding, cars, and travelling.
              I started learning Python in 2015 with my grandad, who is also a programmer, and since then I have taught
              myself various languages and technologies, such as HTML/CSS, C/C++, JavaScript, TypeScript, React, Go, and
              more. I'm currently interested in learning more about car ECU's, devices, reverse engineering, and low
              level coding. My dream is to build my own project track car and drive around Europe in it. I'm also
              neurodiverse {'(High Functioning Autism)'}, which makes me see the world in a different way.
            </p>
          </div>
          <Button className="mt-5" onClick={() => (window.location.href = 'me')}>
            See More
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link className="mt-5" to="3" spy={true} smooth={true} duration={1000}>
            <Button
              variant="hidden"
              startIcon={
                <FaArrowDown size={45} className="p-2 bg-accent-dark/10 rounded-full border border-accent-dark" />
              }
            />
          </Link>
        </div>
      </Section>
      <Section id="3">
        <div className="w-full h-5/6 flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl">Courses I have completed</h1>
          <div className="w-full mt-5">
            <Accordion
              accordions={[
                {
                  title: 'Google - Crash Course on Python',
                  content: (
                    <>
                      <a
                        href="https://coursera.org/verify/QH8B9E622SH5"
                        target="_blank"
                        className="text-accent-dark underline"
                      >
                        View Certificate
                      </a>
                    </>
                  ),
                },
                {
                  title: 'IBM - Introduction to Cloud Computing',
                  content: (
                    <>
                      <a
                        href="https://coursera.org/verify/PFUGN5HJVZDR"
                        target="_blank"
                        className="text-accent-dark underline"
                      >
                        View Certificate
                      </a>
                    </>
                  ),
                },
                {
                  title: 'IBM - Python for Data Science and AI',
                  content: (
                    <>
                      <a
                        href="https://coursera.org/verify/8AM37WB23UDD"
                        target="_blank"
                        className="text-accent-dark underline"
                      >
                        View Certificate
                      </a>
                    </>
                  ),
                },
                {
                  title: 'Meta - Introduction to Front-End Development',
                  content: (
                    <>
                      <a
                        href="https://coursera.org/verify/6T4E4D48QBF9"
                        target="_blank"
                        className="text-accent-dark underline"
                      >
                        View Certificate
                      </a>
                    </>
                  ),
                },
                {
                  title: 'AWS Skillbuilder',
                  content: (
                    <div className="text-accent-dark font-semibold divide-y-2 divide-accent-light/20">
                      <p
                        className="p-2 cursor-pointer hover:text-accent-dark/80"
                        onClick={() => {
                          window.open(
                            'https://vkocdacolvehnoyaalyv.supabase.co/storage/v1/object/public/solitude/106_3_4931962_1707502794_AWS%20Course%20Completion%20Certificate.pdf?t=2024-03-03T14%3A07%3A10.509Z',
                            '_blank',
                          );
                        }}
                      >
                        Introduction to Containers
                      </p>
                      <p
                        className="p-2 cursor-pointer hover:text-accent-dark/80"
                        onClick={() => {
                          window.open(
                            'https://vkocdacolvehnoyaalyv.supabase.co/storage/v1/object/public/solitude/129_3_4931962_1709047301_AWS%20Course%20Completion%20Certificate.pdf?t=2024-03-03T14%3A09%3A08.912Z',
                            '_blank',
                          );
                        }}
                      >
                        AWS Billing and Cost Management
                      </p>
                      <p
                        className="p-2 cursor-pointer hover:text-accent-dark/80"
                        onClick={() => {
                          window.open(
                            'https://vkocdacolvehnoyaalyv.supabase.co/storage/v1/object/public/solitude/482_3_4931962_1709048241_AWS%20Course%20Completion%20Certificate.pdf?t=2024-03-03T14%3A10%3A16.536Z',
                            '_blank',
                          );
                        }}
                      >
                        AWS Foundations: Getting Started with the AWS Cloud Essentials
                      </p>
                      <p
                        className="p-2 cursor-pointer hover:text-accent-dark/80"
                        onClick={() => {
                          window.open(
                            'https://vkocdacolvehnoyaalyv.supabase.co/storage/v1/object/public/solitude/15782_3_4931962_1709049595_AWS%20Course%20Completion%20Certificate.pdf?t=2024-03-03T14%3A10%3A57.580Z',
                            '_blank',
                          );
                        }}
                      >
                        Cloud Essentials - Knowledge Badge Assessment
                      </p>
                      <p
                        className="p-2 cursor-pointer hover:text-accent-dark/80"
                        onClick={() => {
                          window.open(
                            'https://credly.com/badges/50d0857a-aded-4cb2-ba8b-e93bbaa63103/public_url',
                            '_blank',
                          );
                        }}
                      >
                        AWS Knowledge: Cloud Essentials
                      </p>
                    </div>
                  ),
                },
                {
                  title: 'Cisco Networking Academy',
                  content: (
                    <div className="text-accent-dark font-semibold divide-y-2 divide-accent-light/20">
                      <p
                        className="p-2 cursor-pointer hover:text-accent-dark/80"
                        onClick={() => {
                          window.open(
                            'https://www.credly.com/badges/631e2c79-e44a-4e18-8a8a-aac62229ec3e/public_url',
                            '_blank',
                          );
                        }}
                      >
                        Networking Basics
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link className="mt-5" to="4" spy={true} smooth={true} duration={1000}>
            <Button
              variant="hidden"
              startIcon={
                <FaArrowDown size={45} className="p-2 bg-accent-dark/10 rounded-full border border-accent-dark" />
              }
            />
          </Link>
        </div>
      </Section>
      <Section id="4" className="flex flex-col justify-center items-center">
        <div className="w-full h-5/6 flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl">Projects</h1>
          <div className="w-full mt-5">
            <Accordion
              accordions={[
                {
                  title: 'Radiance',
                  content: (
                    <>
                      Radiance is a web-based platform that revolutionizes the way users schedule home cleaning
                      services. This online service, accessible through web browsers, simplifies the booking process for
                      cleaning appointments.{' '}
                      <a
                        href="https://github.com/mezmerizxd/radiance"
                        target="_blank"
                        className="text-accent-dark underline"
                      >
                        GitHub repository
                      </a>
                    </>
                  ),
                },
                {
                  title: 'Prometheus',
                  content: (
                    <>
                      Prometheus is a very basic website that I am designing for my Father who is a mechanic, It will
                      show information about what cars he has worked on and a few services he offers. Prometheus is also
                      based off of Radiance but enchanced a little as it doesn't require a server.{' '}
                      <a
                        href="https://prometheus-three.vercel.app/"
                        target="_blank"
                        className="text-accent-dark underline"
                      >
                        Prometheus website
                      </a>
                    </>
                  ),
                },
                {
                  title: 'Social App V2',
                  content: (
                    <>
                      Social App V2 is a social media platform that allows users to create accounts, post, comment, like
                      and also send messages to friends. This project taught me everything I know about Websockets and
                      API's.{' '}
                      <a
                        href="https://github.com/mezmerizxd/social-app-v2"
                        target="_blank"
                        className="text-accent-dark underline"
                      >
                        GitHub repository
                      </a>
                    </>
                  ),
                },
                {
                  title: 'Google Cloud Run Boilerplate',
                  content: (
                    <>
                      Google Cloud Run Boilerplate is a boilerplate for Google Cloud Run that I created to help me
                      quickly spin up a new project. It is based off of Radiance and Prometheus and is continuously
                      updated.{' '}
                      <a
                        href="https://github.com/mezmerizxd/gcr-app-boilerplate"
                        target="_blank"
                        className="text-accent-dark underline"
                      >
                        GitHub repository
                      </a>
                    </>
                  ),
                },
                {
                  title: 'iVritex',
                  content: (
                    <>
                      iVritex is a very old project that introduced me to C/C++/C# and Reverse Engineering. It is a hack
                      for a game called Grand Theft Auto V and you can do all kinds of things inside of the game with
                      this hack.{' '}
                      <a
                        href="https://github.com/mezmerizxd/ivritex"
                        target="_blank"
                        className="text-accent-dark underline"
                      >
                        GitHub repository
                      </a>
                    </>
                  ),
                },
                {
                  title: 'Purge Engine',
                  content: <>Grand Theft Auto V Mod Menu</>,
                },
                {
                  title: 'Odin',
                  content: <>FiveM Server</>,
                },
                {
                  title: 'Prometheus V2',
                  content: (
                    <>
                      It's Prometheus but with a management dashboard for things like Notes and creating MOT Checklists
                    </>
                  ),
                },
                {
                  title: 'Maxshot1382',
                  content: <>Take a screenshot using cmd, used in Odin for screenshots of thousands of clothing</>,
                },
                {
                  title: 'Nandy',
                  content: (
                    <>
                      Didn't finish but it is used in a Raspberry Pi Pico to Read/Write data from an Xbox 360 Nand
                      Memory
                    </>
                  ),
                },
                {
                  title: 'Spotify Tools',
                  content: (
                    <>
                      Turns your Spotify playlists into JSON, I only used it so I could convert my Spotify playlist into
                      a YouTube playlist so I could download it all
                    </>
                  ),
                },
              ]}
            />
          </div>
          <Button className="mt-5" onClick={() => (window.location.href = 'projects')}>
            See More
          </Button>
        </div>
      </Section>
    </HomeLayout>
  );
};
