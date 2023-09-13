import Link from "next/link";
import { useRouter } from "next/router";
import { IoPerson } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { BsFillCollectionFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Button } from "@mui/material";

const Links = () => {
  const router = useRouter();
  const { pathname } = router;

  const urls = [
    {
      title: "Bio",
      link: "/",
      icon: IoPerson,
    },
    {
      title: "Projects",
      link: "/Projects",
      icon: AiFillCode,
    }, 
    {
      title: "Templates",
      link: "/Templates",
      icon: BsFillCollectionFill,
    },
   
  ];
  return (
    <>
      <ul>
        {urls.map((url, i) => (
          <>
            <Link href={url.link} passHref key={i} className="link">
              <Button>
                <li className="menu_active">
                  <url.icon
                    className={
                      pathname === url.link ? "active icon" : "disable icon"
                    }
                  />
                  <h4 className={pathname === url.link ? "active" : "disable"}>
                    {url.title}
                  </h4>
                </li>
              </Button>
            </Link>
          </>
        ))}
      </ul>
    </>
  );
};

export default Links;
