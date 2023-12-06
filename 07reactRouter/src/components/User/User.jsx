import { useParams } from "react-router-dom";

const User = (params) => {
  const { userid } = useParams();
  console.log(userid);
  return <div className="bg-gray-700 text-white">User : {userid} </div>;
};

export default User;
