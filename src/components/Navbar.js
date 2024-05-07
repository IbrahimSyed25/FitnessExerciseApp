import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "40px", height: "40px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid rgb(222 138 138)",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
