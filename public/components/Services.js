import ServiceJson from "/public/json/ServiceJson";
import Link from "next/link";
import { Button } from "@mui/material";
const nServices = (val) => {
  return (
    <>
      <tr>
        <td className="id">{val.id}</td>
        <td className="title">{val.title}</td>
        <td className="price">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(val.price)}
        </td>
        <td className="view">
          <Link href={`/Services/${val.id}`}>
            <a>
              <Button>View</Button>
            </a>
          </Link>
        </td>
      </tr>
    </>
  );
};

const Services = () => {
  return (
    <>
      <div className="serviceBox">
        <h3>Services</h3>
        <table className="serviceTable">
          <tr>
            <th className="id">Id:</th>
            <th className="title">Title</th>
            <th className="price">Price</th>
            <th className="options">Options</th>
          </tr>
          {ServiceJson.map(nServices)}
        </table>
      </div>
    </>
  );
};

export default Services;
