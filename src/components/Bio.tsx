import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Avatar, AvatarImage } from "./ui/avatar";
const Bio: React.FC = () => {
  const { data } = useLoaderData() as any;
  const [user, setUser] = useState(data);
  console.log(user);

  return (
    <div>
      <Avatar>
        <AvatarImage src={"https://github.com/shadcn.png"} />
      </Avatar>
      <h1>{user.name}</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <h2>{user.website}</h2>
    </div>
  );
};

const bioLoader = async ({ params }: any) => {
  const { userId } = params;
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  console.log(url);

  const response = await axios.get(url);
};

export { Bio, bioLoader };
