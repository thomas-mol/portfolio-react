import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Project Detail for Project {id}</h1>
      <p>Here you can show more details about project {id}.</p>
    </div>
  );
};

export default ProjectDetailPage;
