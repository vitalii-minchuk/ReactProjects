import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../../queries/clientQueries";
import Spinner from "../Spinner";
import AddClientModal from "./AddClientModal";

function Clients() {
  const { error, loading, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong</p>;
  return (
    <div className="container">
      <AddClientModal />
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((el) => (
              <ClientRow key={el.id} client={el} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Clients;
