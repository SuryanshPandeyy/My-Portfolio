import { useState } from "react";
import { Button } from "@mui/material";

const Client = () => {
  const [emailPhone, setEmailPhone] = useState();
  return (
    <>
      <div className="client flexColumnCenter form">
        <h3 className="subHeading">Client Access</h3>

        <>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              axios.get(`/api/showUsers`).then((response) => {
                const datas = response.data.message;
                const filterData = datas.filter(
                  (data) =>
                    emailPhone === data.email || emailPhone === data.phone
                );
              });
            }}
          >
            <label forHtml="emailPhone"></label>
            <input
              value={emailPhone}
              onChange={(e) => setEmailPhone(e.target.value)}
              id="emailPhone"
            />
            <Button className="button" type="submit">
              Login
            </Button>
          </form>
        </>
      </div>
    </>
  );
};

export default Client;
