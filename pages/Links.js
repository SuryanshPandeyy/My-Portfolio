import Link from "next/link";
import {useRouter} from "next/router";
import { IoPerson, IoPersonOutline } from "react-icons/io5"; 
import { AiOutlineCode, AiFillCode  } from "react-icons/ai"; 
import { BsCollection, BsFillCollectionFill } from "react-icons/bs"; 
import { HiOutlineMail, HiMail } from "react-icons/hi"; 


const Links = () => {
  return (
    <>
      <ul>
        <div>
          <Link href="/">
            <a>
              <li>
                {typeof window !== "undefined" ? (
                  window.location.href ==
                  `${window.location.protocol}//${window.location.hostname}/` ? (
                    <>
                    <IoPerson className="headerIcon"/>
                  <h3>Bio</h3>
                  </>
                  ) : (
                    <>
                    <IoPersonOutline className="headerIcon"/>
                  <h3>Bio</h3>
                  </>
                  )
                ) : (
                  ""
                )}
              </li>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/Projects">
            <a>
              <li>
                {typeof window !== "undefined" ? (
                  window.location.href ==
                  `${window.location.protocol}//${window.location.hostname}/Projects/` ? (
                    <>
                    <AiFillCode className="headerIcon"/>
                  <h3>Projects</h3>
                  </>
                  ) : (
                    <>
                    <AiOutlineCode className="headerIcon"/>
                  <h3>Projects</h3>
                  </>
                  )
                ) : (
                  ""
                )}
              </li>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/Templates">
            <a>
              <li>
                {typeof window !== "undefined" ? (
                  window.location.href ==
                  `${window.location.protocol}//${window.location.hostname}/Templates/` ? (
                    <>
                    <BsFillCollectionFill className="headerIcon"/>
                  <h3>Templates</h3>
                  </>
                  ) : (
                    <>
                    <BsCollection className="headerIcon"/>
                  <h3>Templates</h3>
                  </>
                  )
                ) : (
                  ""
                )}
              </li>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/Contact">
            <a>
              <li>
                {typeof window !== "undefined" ? (
                  window.location.href ==
                  `${window.location.protocol}//${window.location.hostname}/Contact/` ? (
                    <>
                    <HiMail className="headerIcon"/>
                  <h3>Contact</h3>
                  </>
                  ) : (
                    <>
                   <HiOutlineMail className="headerIcon"/>
                  <h3>Contact</h3>
                  </>
                  )
                ) : (
                  ""
                )}
              </li>
            </a>
          </Link>
        </div>
      </ul>
    </>
  );
};

export default Links;
