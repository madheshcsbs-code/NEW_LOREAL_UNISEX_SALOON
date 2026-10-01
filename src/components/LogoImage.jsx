import { useState, useEffect } from 'react';
import { removeBlackBackground } from '../utils/removeBackground';

const LogoImage = ({ src = `${import.meta.env.BASE_URL}images/logo.png`, alt = "New L’ORÉAL PROFESSIONNEL Unisex Salon", className = "" }) => {
  const [processedSrc, setProcessedSrc] = useState(src);

  useEffect(() => {
    let isMounted = true;
    removeBlackBackground(src).then((transparentDataUrl) => {
      if (isMounted) {
        setProcessedSrc(transparentDataUrl);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [src]);

  return <img src={processedSrc} alt={alt} className={className} />;
};

export default LogoImage;
