import React from 'react';
import Layout from '@theme/Layout';

export default function Projects() {
  return (
    <Layout title="Projects" description="My works">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/projects.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}