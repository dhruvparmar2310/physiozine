import { Ubuntu } from 'next/font/google';
import { useState, useEffect } from 'react';
import { FaDownload } from "react-icons/fa6"

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log('we are being triggered :D');
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <button
      className={`install-button ${ubuntu?.className}`}
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      <span>
        <FaDownload />
      </span> Install App
    </button>
  );
};

export default InstallPWA;