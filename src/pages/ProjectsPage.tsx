import ProjectCard from "../components/molecules/ProjectCard/ProjectCard";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const project1 = {
    title: "Website 1",
    date: new Date(),
    imageUrl: "https://placehold.co/800x600",
  };

  return (
    <div className="project-grid">
      <ProjectCard project={project1}></ProjectCard>
      <ProjectCard project={project1}></ProjectCard>
      <ProjectCard project={project1}></ProjectCard>
    </div>
  );
};

export default ProjectsPage;
