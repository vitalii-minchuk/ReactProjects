import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../queries/projectQueries";
import Spinner from "../Spinner";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { error, loading, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong</p>;
  return (
    <div className="container">
      {!loading &&
        !error &&
        (data.projects?.length > 0 ? (
          <div className="row mb-3">
            {data.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div>No Projects</div>
        ))}
    </div>
  );
}

export default Projects;
