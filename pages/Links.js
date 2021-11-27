import Link from "next/link";
import { useRouter } from "next/router";
import { IoPerson } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { BsFillCollectionFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Links = () => {
  const router = useRouter();
  const { pathname } = router;
  console.log(router);
  return (
    <>
      <ul>
        <div>
          <Link href="/">
            <a>
              <li>
                <div className="menu_active">
                  <IoPerson
                    className={
                      pathname === "/" ? "active icon" : "disable icon"
                    }
                  />
                  <h3>Bio</h3>
                </div>
              </li>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/Projects">
            <a>
              <li>
                <div className="menu_active">
                  <AiFillCode
                    className={
                      pathname === "/Projects" ? "active icon" : "disable icon"
                    }
                  />
                  <h3>Projects</h3>
                </div>
              </li>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/Templates">
            <a>
              <li>
                <div className="menu_active">
                  <BsFillCollectionFill
                    className={
                      pathname === "/Templates" ? "active icon" : "disable icon"
                    }
                  />
                  <h3>Templates</h3>
                </div>
              </li>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/Contact">
            <a>
              <li>
                <div className="menu_active">
                  <HiMail
                    className={
                      pathname === "/Contact" ? "active icon" : "disable icon"
                    }
                  />
                  <h3>Contact</h3>
                </div>
              </li>
            </a>
          </Link>
        </div>
      </ul>
    </>
  );
};

export default Links;
