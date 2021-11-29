import { useState, useEffect } from "react";

import useSWR, { mutate } from "swr";
import { Button } from "@mui/material";

const Users = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/showUsers", fetcher);
  const [success, setSuccess] = useState("");
  const successMsg = (msg) => {
    setSuccess(msg);
  };

  if (error)
    return (
      <>
        <div className="loading suryansh_portfolio">Failed to Load</div>
      </>
    );
  if (!data)
    return (
      <>
        <div className="loading suryansh_portfolio">Loading...</div>
      </>
    );

  const datas = data.message;

  return (
    <>
      {success ? (
        <>
          <div className="successComment">
            <div>{success}</div>
          </div>
        </>
      ) : (
        ""
      )}

      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Email </th>
            <th>Phone </th>
            <th>Message</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {datas
            .filter((data) => data.hasOwnProperty("message"))
            .map((data2, i) =>
              data2.message.map((message, i2) => (
                <>
                  <tr key={i2}>
                    <td>{data2.name}</td>
                    <td>{data2.email}</td>
                    <td>{data2.phone}</td>
                    <td>{message}</td>
                    <td>
                      <Button
                        type="submit"
                        onClick={async (e) => {
                          const email = data1.email;
                          const formData = {
                            email,
                          };

                          successMsg("Deleteing Client");

                          await fetch(`/api/delete/deleteClient`, {
                            method: "POST",
                            body: JSON.stringify(formData),
                            headers: {
                              "Content-Type": "application/json",
                            },
                          }).then((res) => {
                            successMsg(
                              "Recieved, But not Deleted. Please Retry!"
                            );
                            if (res.status === 200) {
                              mutate("/api/showUsers");
                              successMsg("Deleted");
                              setTimeout(successMsg, 2000);
                            }
                          });
                        }}
                        className="decline"
                      >
                        Delete User
                      </Button>
                    </td>
                  </tr>
                </>
              ))
            )}
        </tbody>
      </table>
    </>
  );
};

export default Users;
