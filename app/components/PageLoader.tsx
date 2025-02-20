import React from 'react';
import './PageLoader.css';
import { useScramble } from "use-scramble";

const PageLoader = () => {
  const { ref: ref1 } = useScramble({
    text: 'loading... ⋆౨ৎ˚⟡˖ ࣪',
    speed: 0.2,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 0,
  });

  const { ref: ref2 } = useScramble({
    text: 'stars are aligned! ⋆｡°✩',
    speed: 0.2,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 0,
  });

  const [showSecondText, setShowSecondText] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 2500); // Show second text after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-loader">
      <p ref={showSecondText ? ref2 : ref1} className="loading-text" />
    </div>
  );
};

export default PageLoader;