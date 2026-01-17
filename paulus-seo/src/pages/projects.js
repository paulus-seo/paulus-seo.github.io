import React from 'react';
import Layout from '@theme/Layout';

const projectList = [
  {
    title: 'AR Vacuum',
    description: (
      <>
        Augmented Reality based vacuum cleaner simulation.
      </>
    ),
    imageUrl: '/img/projects/ARVacuum.png',
  },
  {
    title: 'License Plate Detection',
    description: (
      <>
        A system to detect and recognize vehicle license plates.
      </>
    ),
    imageUrl: '/img/projects/LicensePlateDetection.png',
  },
  {
    title: 'Location Recommendation',
    description: (
      <>
        A recommendation system for places to visit based on user preferences.
      </>
    ),
    imageUrl: '/img/projects/LocationRecommendation.png',
  },
  {
    title: 'Python Tetris',
    description: (
      <>
        The classic Tetris game implemented in Python.
      </>
    ),
    imageUrl: '/img/projects/PythonTetris.png',
  },
  {
    title: 'Turtlebot3 Autorace',
    description: (
      <>
        Autonomous driving with Turtlebot3.
      </>
    ),
    imageUrl: '/img/projects/Turtlebot3Autorace.png',
  },
  {
    title: '3D POV',
    description: (
      <>
        A 3D Persistence of Vision display.
      </>
    ),
    imageUrl: '/img/projects/3DPov.gif',
  },
];

function Project({title, description, imageUrl}) {
  return (
    <div className={'col col--4 margin-bottom--lg'}>
      <div className="card">
        <div className="card__image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card__body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Layout title="Projects" description="List of my projects">
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>My Projects</h1>
          <p>A collection of my works and projects.</p>
        </div>
        <div className="row">
          {projectList.map((project, idx) => (
            <Project key={idx} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}