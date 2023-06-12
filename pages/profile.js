/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { DataContext } from "@/store/GlobalState";
import Head from "next/head";

const profile = () => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  return (
    <div className="m-4 d-flex flex-column justify-content-center align-items-center">
       <Head>
        <title>Profile Page</title>
      </Head>

      <h3>{!auth.user || auth.user.role === "user" ? "User Profile" : "Admin Profile"}</h3>
      <img className="rounded-circle" src={!auth.user || auth.user.avatar} alt={!auth.user || auth.user.avatar} width={300}/>
      <h3>Detail User</h3>
      <p>Nama: {!auth.user || auth.user.name}</p>
      <p>Email: {!auth.user || auth.user.email}</p>
    </div>
  );
};

export default profile;
