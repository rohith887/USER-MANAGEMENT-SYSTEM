import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employees_with_categories")
      .then((result) => {
        if (result.data.Status) {
          setEmployees(result.data.Result);
        } else {
          throw new Error(result.data.Error);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-75 border">
        <h3 className="text-center">Employee Profiles</h3>
        {error && <p className="text-danger">{error}</p>}
        <div className="row">
          {employees.map((employee) => (
            <div key={employee.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{employee.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {employee.email}
                  </p>
                  <p className="card-text">
                    <strong>Salary:</strong> {employee.salary}
                  </p>
                  <p className="card-text">
                    <strong>Address:</strong> {employee.address}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {employee.category_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
