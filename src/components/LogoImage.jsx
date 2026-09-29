import { useState, useEffect } from 'react';
import { removeBlackBackground } from '../utils/removeBackground';

const LogoImage = ({ src = "/images/logo.png", alt = "New L'Oreal Professional Unisex Salon", className = "" }) => {
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
