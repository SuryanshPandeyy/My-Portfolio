import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import { Button } from "@mui/material";

const Links = ({ id, idx }) => {
  const [session, loading] = useSession();
  const router = useRouter();
  const { pathname, query } = router;

  return (
    <>
      <nav>
        <ul>
          <Link href={id}>
            <a>
              <li
                style={
                  query.id === id
                    ? { backgroundColor: "royalblue", color: "#fff" }
                    : null
                }
              >
                Home
              </li>
            </a>
          </Link>
          <Link href={`[id]/[idx]/`} as={`${id}/${idx}/`}>
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
