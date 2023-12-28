import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = ({ id }) => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    i18n.changeLanguage(!isEnglish ? 'en' : 'es'); 
  };
  

  const toggleId = `Toggle-${id}`;

  return (
    <label htmlFor={toggleId} className="inline-flex items-center rounded-md cursor-pointer text-sm">
      <input
        id={toggleId}
        type="checkbox"
        className="hidden peer"
        checked={!isEnglish}
        onChange={toggleLanguage}
      />
      <span className={`px-2 py-1 rounded-l-md bg-[#345e72] peer-checked:bg-gray-300 ${isEnglish ? 'text-white' : 'text-blueSwitch'}`}>
        EN
      </span>
      <span className={`px-2 py-1 rounded-r-md bg-gray-300 peer-checked:bg-[#345e72] ${isEnglish ? 'text-blueSwitch' : 'text-white'}`}>
        ES
      </span>
    </label>
  );
};
export default LanguageSwitch;
