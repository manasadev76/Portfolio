import styles from './ProjectsStyles.module.css';
import Weather from '../../assets/weatherimg.jpg';
import Todo from '../../assets/10848390_2152.jpg';
import Quiz from '../../assets/2795614_126.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Weather}
          link="https://github.com/manasadev76/Weather-App.git"
          h3="Weather Application"
          p="Streaming App"
        />
        <ProjectCard
          src={Todo}
          link="https://github.com/manasadev76/Todo-Application.git"
          h3="Todo App"
          p="Get things done!"
        />
        <ProjectCard
          src={Quiz}
          link="https://github.com/manasadev76/Quiz-Application.git"
          h3="Quiz App"
          p="Test your knowledge!"
        />
      </div>
    </section>
  );
}

export default Projects;
