import "./styles.css";
import { createNavigation } from "./Pages/Navbar";
import { createMainContent } from "./Pages/Navbar";

window.onload = () => {
  createNavigation();
  createMainContent();
};
