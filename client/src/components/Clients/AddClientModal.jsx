import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { ADD_CLIENT } from "../../mutations/clientMutations";
import { GET_CLIENTS } from "../../queries/clientQueries";

function AddClientModal() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {
      name,
      phone,
      email,
    },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.concat([addClient]) },
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient();
    setEmail("");
    setName("");
    setPhone("");
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addClientModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <p className="m-0">Add Client</p>
        </div>
      </button>

      <div
        className="modal fade"
        id="addClientModal"
        role="dialog"
        aria-labelledby="addClientModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addClientModal">
                add new client
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="phone"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="email"
                    type="text"
                  />
                </div>
                <button
                  disabled={!name.trim() || !email.trim() || !phone.trim()}
                  data-bs-dismiss="modal"
                  className="btn btn-info btn-md"
                  type="submit"
                >
                  save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddClientModal;
