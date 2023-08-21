import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/users")
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error));
  }, []);

  //delete user
  const deleteUser = (userId) => {
    axios
      .delete("http://127.0.0.1:5000/delete-user/" + userId)
      .then((result) => {
        console.log(result);

        //if result correct then refresh list of users
        axios
          .get("http://127.0.0.1:5000/users")
          .then((result) => setUsers(result.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  //update user
  const updateUser = (userId) => 
  {
    navigate("/update/"+userId)
    console.log(userId);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="offset-sm-2 col-sm-8">
          <div className="card mt-5">
            <div className="card-body">
              <Link to="/create" className="btn btn-primary">
                Create User
              </Link>

              <div className="table-responsive mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Age</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      return (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.age}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => updateUser(user._id)}
                            >
                              Update
                            </button>
                            &nbsp;
                            <button
                              onClick={() => deleteUser(user._id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
