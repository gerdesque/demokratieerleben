import React from 'react';
import './FadeInSection.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef(); 
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting)
        if (props.onOutOfView) {
          props.onOutOfView(!entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-${props.direction} ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;