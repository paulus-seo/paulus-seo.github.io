import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

const careerHistory = [
  {
    group: 'HYUNDAI WIA Corp.',
    groupLogo: '/img/careers/wia_logo.png',
    title: '연구원 (G2)',
    years: '2026.01 - ',
    logo: '/img/careers/wia_logo.png',
  },
  {
    group: 'HYUNDAI WIA Corp.',
    groupLogo: '/img/careers/wia_logo.png',
    title: '연구원 (G1)',
    years: '2022.03 - 2025.12',
    logo: '/img/careers/wia_logo.png',
  },
  {
    group: 'Republic of Korea Army',
    groupLogo: '/img/careers/roka_logo.png',
    title: '탄약소대장 (Ammunition Platoon Leader)',
    years: '2020.02 - 2021.06',
    logo: '/img/careers/roka_first_lieutenant.png',
  },
  {
    group: 'Republic of Korea Army',
    groupLogo: '/img/careers/roka_logo.png',
    title: '탄약소대장 (Ammunition Platoon Leader)',
    years: '2019.03 - 2020.02',
    logo: '/img/careers/roka_second_lieutenant.png',
  },
  {
    group: 'Seoul National University of Science and Technology',
    groupLogo: '/img/careers/seoultech_logo.png',
    title: '학군단 (Reserve Officers\' Training Corps)',
    years: '2017.03 - 2019.02',
    logo: '/img/careers/rotc_logo.png',
  },
  {
    group: 'Seoul National University of Science and Technology',
    groupLogo: '/img/careers/seoultech_logo.png',
    title: '컴퓨터공학과 (Bachelor of Science in Computer Science)',
    years: '2016.03 - 2019.02',
    logo: '/img/careers/seoultech_logo.png',
  },
  {
    group: 'Seoul National University of Science and Technology',
    groupLogo: '/img/careers/seoultech_logo.png',
    title: '기계시스템디자인공학과 (Bachelor of Mechanical Engineering)',
    years: '2015.03 - 2019.02',
    logo: '/img/careers/seoultech_logo.png',
  },
  {
    group: 'Kyungshin High School',
    groupLogo: '/img/careers/highschool_logo.png',
    title: '학생 (Student)',
    years: '2012.03 - 2015.02',
    logo: '/img/careers/highschool_logo.png',
  },
];


const groupedData = careerHistory.reduce((acc, item) => {
  const groupTitle = item.group;
  if (!acc[groupTitle]) {
    acc[groupTitle] = {
      title: groupTitle,
      logo: item.groupLogo,
      items: [],
    };
  }
  acc[groupTitle].items.push({
    subtitle: item.title,
    years: item.years,
    logo: item.logo,
  });
  return acc;
}, {});

const timelineData = Object.values(groupedData).sort((a, b) => {
    const aMaxYear = Math.max(...a.items.map(i => parseInt(i.years.split(' - ')[0], 10)));
    const bMaxYear = Math.max(...b.items.map(i => parseInt(i.years.split(' - ')[0], 10)));
    return bMaxYear - aMaxYear;
});

function TimelineGroup({ group }) {
  return (
    <div className={styles.timelineGroup}>
      <div className={styles.groupHeader}>
        <div className={styles.groupLogo}>
          <img src={group.logo} alt={`${group.title} logo`} />
        </div>
        <h2>{group.title}</h2>
      </div>
      <div className={styles.groupItems}>
        {group.items.sort((a,b) => parseInt(b.years.split(' - ')[0], 10) - parseInt(a.years.split(' - ')[0], 10)).map((item, idx) => (
          <div className={styles.groupItem} key={idx}>
            <div className={styles.itemLogo}>
              <img src={item.logo} alt={`${item.subtitle} logo`} />
            </div>
            <div className={styles.itemDetails}>
              <h4>{item.subtitle}</h4>
              <span>{item.years}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Layout title="About" description="About Paulus Seo">
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>About Me</h1>
          <p>A timeline of my education and professional experience.</p>
        </div>
        <div className={styles.timelineContainer}>
          {timelineData.map((group, idx) => (
            <TimelineGroup group={group} key={idx} />
          ))}
        </div>
      </main>
    </Layout>
  );
}