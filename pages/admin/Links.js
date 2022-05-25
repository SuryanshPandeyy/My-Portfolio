import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@mui/material";

const Links = () => {
  const {data:session, status} = useSession();
  const router = useRouter();
  const pathname = router.pathname;
  console.log(router);

  return (
    <>
      <nav>
        <ul>
          <Link href="/admin">
            <a>
              <li
                style={
                  pathname === "/admin"
                    ? { backgroundColor: "royalblue", color: "#fff" }
                    : null
                }
              >
                Home
              </li>
            </a>
          </Link>
          <Link href="/admin/Users">
            <a>
              <li
                style={
                  pathname === "/admin/Users"
                    ? { backgroundColor: "royalblue", color: "#fff" }
                    : null
                }
              >
                Users
              </li>
            </a>
          </Link>
          <Link href="/admin/Query">
            <a>
              <li
                style={
                  pathname === "/admin/Query"
                    ? { backgroundColor: "royalblue", color: "#fff" }
                    : null
                }
              >
                Query
              </li>
            </a>
          </Link>
          <Link href="/admin/Skills">
            <a>
              <li
                style={
                  pathname === "/admin/Skills"
                    ? { backgroundColor: "royalblue", color: "#fff" }
                    : null
                }
              >
                Skills
              </li>
            </a>
          </Link>
          <Button
            onClick={(e) => (
              e.preventDefault(), signOut((e) => e.preventDefault())
            )}
            className="signInOut"
          >
            Sign out
          </Button>
        </ul>
      </nav>
    </>
  );
};

export default Links;
