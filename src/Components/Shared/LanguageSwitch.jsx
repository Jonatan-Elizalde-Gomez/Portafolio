import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
  };

  return (
    <label
      htmlFor="Toggle3"
      className={`inline-flex items-center rounded-md cursor-pointer text-sm`}

    >
      <input
        id="Toggle3"
        type="checkbox"
        className="hidden peer"
        checked={!isEnglish}
        onChange={toggleLanguage}
      />
      <span className={`px-2 py-1 rounded-l-md bg-[#345e72] peer-checked:bg-gray-300 text-${isEnglish ? '' : 'blueSwitch'}`}>
        EN
      </span>
      <span className={`px-2 py-1 rounded-r-md bg-gray-300 peer-checked:bg-[#345e72] text-${isEnglish ? 'blueSwitch' : ''}`}>
        ES
      </span>
    </label>
  );
};

export default LanguageSwitch;
