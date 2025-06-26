import styles from "./SkillSection.module.scss";
import {
  languageSkills,
  frontEndSkills,
  backEndSkills,
  otherSkills,
} from "@/app/data/skillsList";

type Skill = {
  name: string;
  img: string;
};

const SkillSection = () => {
  const renderSkillCards = (skills: Skill[]) =>
    skills.map((skill, index) => (
      <div className={styles.skillCard} key={index}>
        <img src={skill.img} alt={skill.name} />
        <span>{skill.name}</span>
      </div>
    ));

  return (
    <div className={styles.skills}>
      <div className={styles.skillsCategory}>
        <h3>Languages</h3>
        <div className={styles.skillsGrid}>
          {renderSkillCards(languageSkills)}
        </div>
      </div>
      <div className={styles.skillsCategory}>
        <h3>Front-end Skills</h3>
        <div className={styles.skillsGrid}>
          {renderSkillCards(frontEndSkills)}
        </div>
      </div>
      <div className={styles.skillsCategory}>
        <h3>Back-end Skills</h3>
        <div className={styles.skillsGrid}>
          {renderSkillCards(backEndSkills)}
        </div>
      </div>
      <div className={styles.skillsCategory}>
        <h3>Other Skills</h3>
        <div className={styles.skillsGrid}>{renderSkillCards(otherSkills)}</div>
      </div>
    </div>
  );
};

export default SkillSection;
