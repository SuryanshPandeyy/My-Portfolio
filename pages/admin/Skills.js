import { useState, useEffect } from "react";

import useSWR, { mutate } from "swr";
import { Button } from "@mui/material";
import Links from "./Links";

const Skills = () => {
  const [newField, setNewField] = useState([{ name: null, value: null }]);

  console.log(newField);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/showSkills", fetcher);
  const [success, setSuccess] = useState("");
  const successMsg = (msg) => {
    setSuccess(msg);
  };

  if (!data) return null;
  if (error) return null;

  const datas = data.message;

  return (
    <div className="admin suryansh_portfolio">
      <Links />
      <div>
        {datas &&
          datas.map((item, i) => {
            return (
              <div key={i}>
                <div>{item.name}</div>
                <input value={item.value} />
              </div>
            );
          })}
      </div>

      {newField.map((field, i) => {
        return <div key={i}></div>;
      })}
      <div>
        <Button onClick={() => setNewField([...newField, newField])}>+</Button>
      </div>
    </div>
  );
};

export default Skills;
