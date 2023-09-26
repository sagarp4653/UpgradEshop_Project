import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './CustomProgressBar.css'

export default function CustomProgressBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const duration = 3000; // 3 seconds
    const incrementDuration = 100; // 100 milliseconds
    const steps = duration / incrementDuration;
    let currentStep = 0;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (currentStep >= steps) {
          clearInterval(timer);
          return 100;
        }
        const newProgress = (currentStep / steps) * 100;
        currentStep += 1;
        return newProgress;
      });
    }, incrementDuration);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress style={{background: '#06bc0b', color: 'white'}} className="progress-bar" variant="determinate" value={progress} />
    </Box>
  );
}