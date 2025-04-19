import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';

import java from '../../assets/java.png';
import php from '../../assets/php.png';
import figma from '../../assets/figma.png';
import javascript from '../../assets/javascript.png';
import python from '../../assets/python.png';
import html from '../../assets/icons8-html-5-100.png';
import react from '../../assets/icons8-react-native-100.png';
import css from '../../assets/icons8-css-logo-100.png';



import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        
        <SkillList src={html} />
        <SkillList src={css} />
        <SkillList src={javascript}/>
        <SkillList src={react}/>
        <SkillList src={java}/>
      </div>
      <div className={styles.skillList}>
        <SkillList src={figma}/>
        <SkillList src={python}/>
        <SkillList src={php}/>
      </div>
    </section>
  );
}

export default Skills;
