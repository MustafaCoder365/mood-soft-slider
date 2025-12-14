import { useState } from 'react';
import './SoftSlider.css';

const items = [
  {
    title: 'Silence',
    desc: 'When everything slows down',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  },
  {
    title: 'Fog',
    desc: 'Thoughts without edges',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  },
  {
    title: 'Drift',
    desc: 'Letting time pass',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  },
  {
    title: 'Echo',
    desc: 'Memories repeating softly',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
  },
];

export default function SoftSlider() {
  const [active, setActive] = useState(1);

  return (
    <div className="soft-slider">
      {items.map((item, i) => (
        <div
          key={i}
          className={`soft-card ${active === i ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.image})` }}
          onClick={() => setActive(i)}
        >
          <div className="overlay" />

          {active === i && (
            <div className="info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
