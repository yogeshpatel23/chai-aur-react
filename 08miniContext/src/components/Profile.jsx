import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.password}</p>
    </div>
  );
};

export default Profile;
