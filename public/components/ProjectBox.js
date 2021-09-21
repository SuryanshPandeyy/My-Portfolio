import Button from "@material-ui/core/Button";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src }) => {
  return `${src}`;
};
 
const ProjectBox = (props) => {
  return (
    <>
      <div className="cardPackage">
        <div className="packageCard">
          <div className="packageBlocker"></div>
          <div className="CardImg">
            <Image
              className="cardimg"
              loader={myLoader}
              src={props.image}
              alt={props.image}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="Carddetails">
            <div className="Cardtitle">{props.title}</div>
            <div className="view">
              <Link href=""><a href="projects.php">View</a></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
