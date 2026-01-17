import React from 'react';
import Layout from '@theme/Layout';

const awardsList = [
  {
    title: 'ROBOKON 2020',
    description: (
      <>
        First prize in the TurtleBot3 Auto Race category.
      </>
    ),
    imageUrl: '/img/awards/Turtlebot3_Autorace1.png',
  },
  {
    title: 'ROBOKON 2019',
    description: (
      <>
        Second prize in the TurtleBot3 Auto Race category.
      </>
    ),
    imageUrl: '/img/awards/Turtlebot3_Autorace2.png',
  },
];

function Award({title, description, imageUrl}) {
  return (
    <div className={'col col--6 margin-bottom--lg'}>
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

export default function Awards() {
  return (
    <Layout title="Awards" description="List of my awards">
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>My Awards</h1>
          <p>A collection of my achievements and awards.</p>
        </div>
        <div className="row">
          {awardsList.map((award, idx) => (
            <Award key={idx} {...award} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
