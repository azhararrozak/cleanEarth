/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { DataContext } from "@/store/GlobalState";

const profile = () => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  return (
    <div>
      <h3>{auth.user.role === "user" ? "User Profile" : "Admin Profile"}</h3>
      <img src={auth.user.avatar} alt={auth.user.avatar} />
      <p>Nama: {auth.user.name}</p>
      <p>Email: {auth.user.email}</p>
    </div>
  );
};

export default profile;
