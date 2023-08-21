import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [inputData, setInputData] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/find-user/" + id)
      .then((result) => setUser(result.data))
      .catch((error) => navigate("/"));
  }, [id, navigate]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      id,
      name: inputData.name,
      email: inputData.email,
      age: inputData.age,
    };

    axios
      .put("http://127.0.0.1:5000/update-user/", updatedData)
      .then((response) => {
        console.log(response);
        if (response.data) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-sm-2 col-sm-8 mt-5">
          <div className="card">
            <div className="card-header">Update Record</div>
            <div className="card-body">
              <form action="">
                <input
                  className="form-control mb-3"
                  value={inputData.name || user.name || ""}
                  onChange={handleData}
                  name="name"
                  type="text"
                  placeholder="Enter name"
                />
                <input
                  className="form-control mb-3"
                  value={inputData.email || user.email || ""}
                  onChange={handleData}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <input
                  className="form-control mb-3"
                  value={inputData.age || user.age || ""}
                  onChange={handleData}
                  name="age"
                  type="number"
                  placeholder="Enter age"
                />
                <input
                  className="btn btn-success"
                  onClick={handleSubmit}
                  type="submit"
                  value="Update"
                />
              </form>
            </div>
            <div className="card-footer">
                <Link to="/" className="btn btn-primary">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
