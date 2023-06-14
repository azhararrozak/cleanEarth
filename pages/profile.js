/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { DataContext } from "@/store/GlobalState";
import Head from "next/head";

const profile = () => {
  const { state } = useContext(DataContext);
  const { auth, orders } = state;

  if (!auth.user) return null;
  return (
    <div className="profile_page">
      <Head>
        <title>Profile Page</title>
      </Head>

      <section className="row text-secondary my-3 mx-0">
        <div className="col-md-4">
          <h3 className="text-center">
            {auth.user.role === "user"
              ? "User Profile"
              : "Admin Profile"}
          </h3>

          <div className="avatar">
            <img
              className="rounded-circle"
              src={auth.user.avatar}
              alt={auth.user.avatar}
              width={300}
            />
          </div>
          <div className="text-center">
            <h3>Detail User</h3>
            <p>Nama: {auth.user.name}</p>
            <p>Email: {auth.user.email}</p>
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="text-center">Orders History</h3>
          <div className="my-3 table-responsive">
            <table
              className="table-bordered table-hover w-100 text-uppercase"
              style={{ minWidth: "600px", cursor: "pointer" }}
            >
              <thead className="bg-light font-weight-bold">
                <tr>
                  <td className="p-2">id</td>
                  <td className="p-2">Total</td>
                  <td className="p-2">Date</td>
                  <td className="p-2">Type</td>

                </tr>
              </thead>

              <tbody>
                {orders.map((orderHistory) => (
                  <tr key={orderHistory._id}>
                    <td className="p-2">{orderHistory._id}</td>
                    <td className="p-2 text-capitalize">Rp. {orderHistory.gross_amount}</td>
                    <td className="p-2">{new Date(orderHistory.createdAt).toLocaleDateString()}</td>
                    <td className="p-2">{orderHistory.payment_type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default profile;
