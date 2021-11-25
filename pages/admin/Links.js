import Link from "next/link";
import { useRouter } from "next/router";

const Links = () => {
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
        </ul>
      </nav>
    </>
  );
};

export default Links;
