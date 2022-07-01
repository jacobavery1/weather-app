import classes from "./header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className={classes.header}>
      <h1 onClick={() => navigate("/")}>Weather</h1>
    </div>
  );
}
