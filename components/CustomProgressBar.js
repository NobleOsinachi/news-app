import { ProgressBar } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const CustomProgressBar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleStart = (url) => {
      console.log('handleStart:', url);
      setLoading(true);
      setProgress(0); // Reset progress to 0 when a new route starts loading
    };

    const handleComplete = (url) => {
      console.log('handleComplete:', url);
      setLoading(false);
      setProgress(100); // Set progress to 100 when the route has finished loading
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    // Attach an event listener to the window object to track route changes progress
    const handleProgress = (e) => {
      if (e.target instanceof HTMLImageElement) {
        const progressValue = (e.loaded / e.total) * 100;
        console.log('handleProgress:', progressValue);
        setProgress(progressValue);
      }
    };

    window.addEventListener('progress', handleProgress, true);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      window.removeEventListener('progress', handleProgress, true);
    };
  }, [router]);

  return (
    <>{loading && <ProgressBar now={progress} animated variant='info' />}</>
  );
};

export default CustomProgressBar;
