import Button from "@material-ui/core/Button";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src }) => {
  return `${src}`;
};

const ProjectBox = ({ image, title, link }) => {
  return (
    <>
      <div className="cardPackage">
        <div className="packageCard">
          <div className="packageBlocker"></div>
          <div className="CardImg">
            <Image
              className="cardimg"
              loader={myLoader}
              src={image}
              alt={image}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="Carddetails">
            <div className="Cardtitle">{title}</div>
            <div className="view">
              <a href={link} target="blank">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
