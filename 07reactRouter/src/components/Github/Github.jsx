import { useLoaderData } from "react-router-dom";

const Github = () => {
  const user = useLoaderData();
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center text-3xl m-4 bg-gray-600 text-white p-4 w-full">
        {user.name}
      </div>
      <img
        width={500}
        height={500}
        className="rounded-full"
        src={user.avatar_url}
        alt=""
      />
      <h3 className="text-xl">Followers : {user.followers}</h3>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  // const response = await fetch("http://api.github.com/users/hiteshchoudhary");
  const response = await fetch("http://api.github.com/users/yogeshpatel23");
  return await response.json();
};
