import Button from "@material-ui/core/Button";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src }) => {
  return `${src}`;
};

const TemplateBox = (props) => {
  return (
    <>
        <div className="templateCard" style={{width: '100%'}}>
          <h1 className="title">{props.title}</h1>
        </div>
    </>
  );
};

export default TemplateBox;
