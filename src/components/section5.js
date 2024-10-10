import React, { useEffect, useRef, useState } from 'react';

// Animates number counting up
const animateNumber = (start, end, duration, callback) => {
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    callback(value);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

// React component that animates the number when it enters the viewport
const AnimatedNumber = ({ num }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only animate if it's not animated yet
            if (!elementRef.current._isAnimated) {
              elementRef.current._isAnimated = true;
              animateNumber(0, num, 3000, (value) => {
                setCount(value);
              });
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [num]);

  return (
    <div ref={elementRef} data-num={num}>
      {count.toLocaleString('en-US').split(",").map((n, idx) => (
        <span key={idx} className="count">
          {n}
        </span>
      ))}
    </div>
  );
};

// Main App Component
const SectionFive = () => {
  return (
    <div className='section-five'>
        <div className='container-five'>
            <h2>Statistical Facts</h2>
            <h5>We have impressive numbers in terms of outreach and accomplishments.</h5>
            <div className='cards-five'>
                <div className='cards-one'>
                    {/* Animated number components */}
                    <h1><AnimatedNumber num={5} /></h1>
                    <p>Student Campuses</p>
                </div>
                <div className='cards-one'>
                    {/* Animated number components */}
                    <h1><AnimatedNumber num={10000}/></h1>
                    <p>Enrolled Students</p>
                </div>
                <div className='cards-one'>
                    {/* Animated number components */}
                    <h1><AnimatedNumber num={45} /></h1>
                    <p>Certified Teachers</p>
                </div>
                <div className='cards-one'>
                    {/* Animated number components */}
                    <h1><AnimatedNumber num={50} /></h1>
                    <p>Student CLubs</p>
                </div>

            </div>
        </div>
      
    </div>
  );
};

export default SectionFive;
