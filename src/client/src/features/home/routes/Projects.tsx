import clsx from 'clsx';
import React from 'react';
import { Button } from '../../../components/Elements';

const HomeLayout = React.lazy(() => import('../../../components/Layout/HomeLayout'));

export const Projects = () => {
  return (
    <HomeLayout title="Home">
      <Project
        title="Prometheus & Prometheus V2 (MOT)"
        description="Prometheus & Prometheus V2 is a web platform that I developed for my father, who is a professional mechanic. It enables him to efficiently manage his clients, vehicles, and services, as well as to showcase his expertise and achievements."
        information={`The homepage provides an overview of the range of services that he offers, such as repairs, diagnostics, tuning, and MOT testing. It also displays the prices of his services and examples of his previous work. The platform features a secure dashboard that he can access with his login credentials and perform various tasks, such as:

        Searching for MOT inspection processes and standards for different types of vehicles,
        Creating mock MOT tests and generating reports,
        Writing extensive notes and feedback for each client and vehicle,
        Tracking the progress and status of his services and appointments

        The platform is built with modern web technologies and follows the best practices of web design and development. It is responsive, user-friendly, and secure. It also supports multiple languages and currencies.`}
        github="https://github.com/mezmerizxd/mot"
        languages={['TypeScript', 'JavaScript']}
      />
      <Project
        title="Radiance"
        description="Radiance is your digital concierge for home cleaning services. With a few taps, you can schedule, manage, and pay for professional cleaning services tailored to your needs."
        information={`The app is called Zvyezda, and it is a web application that helps cleaners find and manage their jobs.
The app has four main parts: Engine, Radiance, Server, and Web.

Engine is the core of the app, it handles the logic and data of the app. It is written in Go, which is a programming language that is fast and reliable.

Radiance is the front-end of the app, it is what the cleaners see and interact with on their browsers. It is written in TypeScript and React, which are programming languages that are popular and easy to use for web development.

Server is another part of the app that connects Engine and Radiance. It is also written in TypeScript, but it runs on Node.js, which is a platform that allows JavaScript code to run on the server side.

Web is my personal website, where I showcase my skills and projects. It is also written in TypeScript and React, and it uses Server as its backend.

The app runs on a small computer that I have at home, which has Ubuntu 20.04 LTS as its operating system. Ubuntu is a type of Linux, which is a free and open source operating system that is widely used by developers.

The app uses a program called pm2 to manage its processes. pm2 makes sure that the app runs smoothly and restarts automatically if there are any errors or updates.

The app also uses a program called nginx to handle the web traffic. nginx is a web server that redirects the requests from the internet to the app.

The app has a domain name called zvyezda.com, which is what people type in their browsers to access the app. I use NameCheap to register and manage my domain name, and I use their DNS servers to point zvyezda.com to my computer’s IP address.`}
        github="https://github.com/mezmerizxd/radiance"
        languages={['TypeScript', 'Go']}
      />
      <Project
        title="iVritex"
        description="iVritex Mod Menu - Mezmerizxd - Copyright © 2021 Mezmerizxd"
        information={`iVritex is a mod menu that allows you to modify and enhance your gameplay experience in Grand Theft Auto V, a popular open-world action-adventure game. With iVritex, you can access various features and functions, such as changing your character's appearance, spawning vehicles and weapons, manipulating the game world, and more. 

        iVritex is also a personal project that showcases my skills and knowledge in C/C++/C#, reverse engineering, and game hacking. I developed iVritex from scratch, using various tools and techniques to analyze and manipulate the game's memory and code. I learned a lot about data types, pointers, structures, classes, and other concepts in C/C++ that are essential for low-level programming and hacking.
        
        iVritex is a passion project that I started a long time ago and continue to update and improve. It is not intended for malicious or illegal purposes, but rather for educational and entertainment purposes only. I hope you enjoy using iVritex as much as I enjoyed creating it.`}
        github="https://github.com/mezmerizxd/ivritex"
        languages={['C', 'C++']}
      />
      <Project
        title="Social App V2"
        description="Social App V2 is a social media platform that allows users to create accounts, post, comment, like and also send messages to friends. This project taught me everything I know about Websockets and API's. Social App V1 Is a conspiracy theory."
        information={`Social App V2 is a web-based application that enables users to interact with each other through various features, such as creating profiles, posting content, commenting, liking, and messaging. This project demonstrates my proficiency in using Websockets and APIs to implement real-time communication and data exchange between the client and the server.
        
        This project also showcases my skills in using TypeScript, React, and Docker to develop a scalable, maintainable, and secure web application. TypeScript enhances the reliability and readability of my code, React simplifies the user interface development, and Docker facilitates the deployment and testing of the application.`}
        github="https://github.com/mezmerizxd/social-app-v2"
        languages={['TypeScript', 'C#', 'HTML', 'JavaScript', 'Shell', 'SCSS', 'Dockerfile']}
      />
      <Project
        title="Maxshot1382"
        description="Take a screenshot using CMD and save it as a webp file"
        information={`This project was created as a fun and challenging exercise to demonstrate my skills in C# programming and image processing. The tool allows the user to take screenshots of the center of the screen using the command-line interface (CMD) and save them as webp files, which are smaller and faster than other image formats. The user can also customize the image width, screen width, and offsets to adjust the screenshot area and quality. This project showcases my ability to create a user-friendly and useful application with minimal code and resources.`}
        github="https://github.com/mezmerizxd/maxshot1382"
        languages={['C#']}
      />
      <Project
        title="Purge Engine & Purge Menu"
        description="A Grand Theft Auto Online game modification. (EDUCATIONAL USES ONLY)"
        information={`This is very similar to iVritex but It's been improved and has a lot more features. In this project I learned more about project structure and how to use external libraries like ImGui and MinHook.`}
        github="https://github.com/mezmerizxd/purgemenu"
        languages={['C++']}
      />
    </HomeLayout>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  information: string;
  github: string;
  languages: string[];
}

const Project = ({ title, description, information, github, languages }: ProjectProps) => {
  return (
    <div className={clsx('w-11/12 m-auto mt-5', 'border border-accent-light/20 rounded-sm shadow-sm')}>
      <div className={clsx('w-full text-left p-2', 'bg-accent-dark/10 border-b border-accent-light/20')}>
        <h1 className={clsx('font-semibold text-lg text-accent-light')}>{title}</h1>
        <p className={clsx('text-sm text-accent-dark')}>{description}</p>
      </div>

      <pre className={clsx('w-full max-h-80 text-left p-2 overflow-y-auto whitespace-pre-line', 'bg-background-dark')}>
        {information}
      </pre>

      <div className={clsx('flex justify-between items-center', 'bg-accent-dark/10 border-t border-accent-light/20')}>
        <Button className="underline" variant="hidden" onClick={() => window.open(github, '_blank')}>
          GitHub
        </Button>
        <div className="flex space-x-1 mr-1">
          {languages.map((language, index) => (
            <p key={index} className={clsx('text-sm font-bold bg-accent-dark/80 text-black', 'p-1 rounded-sm')}>
              {language}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
