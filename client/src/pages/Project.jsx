import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import AddProjectModal from "../components/Projects/AddProjectModal";
import DeleteProjectButton from "../components/Projects/DeleteProjectButton";
import EditProject from "../components/Projects/EditProject";

function Project() {
  const { id } = useParams();
  const { error, loading, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong</p>;
  return (
    <div className="container">
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <EditProject project={data.project} />
          <DeleteProjectButton projectId={data.project.id} />
          <AddProjectModal />
        </div>
      )}
    </div>
  );
}

export default Project;
