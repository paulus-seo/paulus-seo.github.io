import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './projects.module.css';

const companyProjects = [
  {
    title: 'Hyundai-WIA: Indoor Parking Robot',
    description: '',
    imageUrl: '/img/projects/parking_robot.jpg',
    tags: ['C++', 'ROS2', 'Robotics'],
  },
  {
    title: 'Hyundai-WIA: AMR',
    description: '',
    imageUrl: '/img/projects/amr.jpg',
    tags: ['C++', 'ROS2', 'Robotics'],
  },
];

const universityProjects = [
  {
    title: 'AR Vacuum',
    description: 'Augmented Reality based vacuum cleaner simulation.',
    imageUrl: '/img/projects/ARVacuum.png',
    tags: ['C#', 'Unity', 'AR'],
  },
  {
    title: 'License Plate Detection',
    description: 'A system to detect and recognize vehicle license plates.',
    imageUrl: '/img/projects/LicensePlateDetection.png',
    tags: ['C#', 'OpenCV'],
  },
  {
    title: 'Location Recommendation',
    description: 'A recommendation system for places to visit based on user preferences.',
    imageUrl: '/img/projects/LocationRecommendation.png',
    tags: ['Python', 'AI'],
  },
  {
    title: 'Python Tetris',
    description: 'The classic Tetris game implemented in Python.',
    imageUrl: '/img/projects/PythonTetris.png',
    tags: ['Python', 'Game'],
  },
  {
    title: 'Turtlebot3 Autorace',
    description: 'Autonomous driving with Turtlebot3.',
    imageUrl: '/img/projects/Turtlebot3Autorace.png',
    tags: ['Python', 'Robotics', 'ROS', 'AI'],
  },
  {
    title: '3D POV',
    description: 'A 3D Persistence of Vision display.',
    imageUrl: '/img/projects/3DPov.gif',
    tags: ['C', 'MCU'],
  },
];

const allProjects = [...companyProjects, ...universityProjects];
const allTags = ['All', ...new Set(allProjects.flatMap(p => p.tags))];

function Project({title, description, imageUrl}) {
  return (
    <div className={'col col--4 margin-bottom--lg'}>
      <div className={`card ${styles.projectCard}`}>
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
  const [selectedTag, setSelectedTag] = useState('All');
  const [filteredCompanyProjects, setFilteredCompanyProjects] = useState(companyProjects);
  const [filteredUniversityProjects, setFilteredUniversityProjects] = useState(universityProjects);

  useEffect(() => {
    const filterProjects = (projects) => {
      if (selectedTag === 'All') return projects;
      return projects.filter(p => p.tags.includes(selectedTag));
    };
    
    setFilteredCompanyProjects(filterProjects(companyProjects));
    setFilteredUniversityProjects(filterProjects(universityProjects));
  }, [selectedTag]);
  
  return (
    <Layout title="Projects" description="List of my projects">
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>My Projects</h1>
          <p>A collection of my works and projects.</p>
        </div>

        <div className={styles.filterControls}>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`${styles.filterButton} ${selectedTag === tag ? styles.active : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <section className={styles.projectSection}>
          <h2 className={styles.sectionTitle}>Company Projects</h2>
          <div className="row">
            {filteredCompanyProjects.length > 0 ? (
              filteredCompanyProjects.map((project, idx) => (
                <Project key={idx} {...project} />
              ))
            ) : (
              <p className="text--center">No projects match the selected filter.</p>
            )}
          </div>
        </section>

        <section className={styles.projectSection}>
          <h2 className={styles.sectionTitle}>University Projects</h2>
          <div className="row">
            {filteredUniversityProjects.length > 0 ? (
              filteredUniversityProjects.map((project, idx) => (
                <Project key={idx} {...project} />
              ))
            ) : (
              <p className="text--center">No projects match the selected filter.</p>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}