import React, { useState } from 'react';
import { useLocation } from '@docusaurus/router';
import { useHistory } from 'react-router-dom';

const LanguageDropdown: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    let newPath = pathname;
    if (lang === 'en') {
      newPath = pathname.startsWith('/ja') ? pathname.replace('/ja', '') : pathname;
    } else if (lang === 'ja') {
      newPath = pathname.startsWith('/ja') ? pathname : `/ja${pathname}`;
    }
    history.push(newPath);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setIsOpen(!isOpen)}>Language</button>
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', padding: '8px', zIndex: 100 }}>
          <div onClick={() => handleLanguageChange('en')} style={{ padding: '8px', cursor: 'pointer' }}>English</div>
          <div onClick={() => handleLanguageChange('ja')} style={{ padding: '8px', cursor: 'pointer' }}>Japanese</div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
