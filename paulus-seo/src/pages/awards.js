import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import styles from './awards.module.css';

const awardsList = [
  {
    title: 'R-BIZ Challenge Turtlebot3 Autorace',
    description: (
      <>
        Second prize in the TurtleBot3 Autorace category at R-BIZ Challenge 2018.
      </>
    ),
    imageUrls: ['/img/awards/Turtlebot3_Autorace1.png', '/img/awards/Turtlebot3_Autorace2.png'],
  },
];

function Award({title, description, imageUrls}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasMultipleImages = imageUrls.length > 1;

  const goToNext = useCallback(() => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  }, [imageUrls.length]);

  const goToPrevious = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (hasMultipleImages) {
      const timer = setTimeout(() => {
        goToNext();
      }, 3000); // Change image every 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [currentImageIndex, hasMultipleImages, goToNext]);


  return (
    <div className={'col col--6 margin-bottom--lg'}>
      <div className="card">
        <div className={`card__image ${styles.cardImageContainer}`}>
          <img src={imageUrls[currentImageIndex]} alt={`${title} - image ${currentImageIndex + 1}`} />
          {hasMultipleImages && (
            <>
              <button onClick={goToPrevious} className={`${styles.navButton} ${styles.prevButton}`}>&#10094;</button>
              <button onClick={goToNext} className={`${styles.navButton} ${styles.nextButton}`}>&#10095;</button>
              <div className={styles.dotsContainer}>
                {imageUrls.map((_, idx) => (
                  <span
                    key={idx}
                    className={`${styles.dot} ${currentImageIndex === idx ? styles.activeDot : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  ></span>
                ))}
              </div>
            </>
          )}
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
