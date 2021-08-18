import React from "react";
import { Link } from "react-router-dom";

const AdminBoard = () => {
  return (
    <>
      <Link to={"/adminboard/statistics"}>Statistics</Link>
      <Link to={"/adminboard/users"}>Users</Link>
    </>
  );
};

export default AdminBoard;
