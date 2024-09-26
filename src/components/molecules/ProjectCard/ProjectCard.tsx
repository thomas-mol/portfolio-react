import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProjectCard.module.css";
import Project from "../../../types/Project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.date}>
          {project.date.toISOString().split("T")[0]}
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={styles.image}
        />
        <a href={"#"} className={styles.iconOverlay}>
          <FontAwesomeIcon icon={faLink} className={styles.icon} />
        </a>
      </div>
      <div className={styles.readMoreContainer}>
        <a href={"#"} className={styles.readMore}>
          Read More <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
