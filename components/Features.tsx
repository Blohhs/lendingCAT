import React from 'react';
import Image from 'next/image';
import styles from './Features.module.css';

export default function Features(): React.JSX.Element {
  return (
    <section style={{ backgroundColor: '#FFF1D7', padding: '120px 20px', width: '100%', display: 'flex', justifyContent: 'center' }} id="about">
      
      <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#3D2B1F', fontWeight: 800, margin: '0 0 80px 0', textAlign: 'center' }}>
          About
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
          
          <div style={{ position: 'relative', width: '600px', height: '500px', flexShrink: 0 }}>
            
            <Image
              src="/img/cat3.png"
              alt="Кот"
              width={400}
              height={400}
              style={{ position: 'absolute', bottom: '0', left: '-180px', width: '100%', height: 'auto', zIndex: 2 }}
              priority
            />

            <Image
              src="/img/partikl.png"
              alt=""
              width={90}
              height={90}
              style={{ position: 'absolute', top: '60px', left: '360px', zIndex: 1 }}
            />

            <Image
              src="/img/partikl.png"
              alt=""
              width={120}
              height={120}
              style={{ position: 'absolute', top: '-40px', left: '480px', zIndex: 1 }}
            />
            
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', flex: 1, minWidth: '300px', maxWidth: '500px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '28px', color: '#77804F', fontWeight: 800, margin: 0 }}>
                Project idea
              </h3>
              <p style={{ fontSize: '18px', color: '#4A4A4A', lineHeight: 1.6, margin: 0 }}>
                Creating a safe, comfortable environment for animals while attracting new clients through engaging activities, strategic promotions, and exceptional care.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '28px', color: '#E07B3C', fontWeight: 800, margin: 0 }}>
                Project tasks
              </h3>
              <p style={{ fontSize: '18px', color: '#4A4A4A', lineHeight: 1.6, margin: 0 }}>
                The project introduces Cat Yoga, offering a unique, relaxing experience that attracts young women, promotes a welcoming space to unwind, and encourages venue engagement and cat adoptions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}