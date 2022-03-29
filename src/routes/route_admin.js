import { Dashboard, ManageBlog, Settings, ManagePortfolio } from "src/pages";

const route_admin = [
  {
    path: "",
    exact: true,
    name: "ADMIN CONSOLE",
    Component: Dashboard,
  },
  {
    path: "manage-portfolio",
    exact: true,
    name: "ADMIN CONSOLE",
    Component: ManagePortfolio,
  },
  {
    path: "manage-blog",
    exact: true,
    name: "ADMIN CONSOLE",
    Component: ManageBlog,
  },
  {
    path: "settings",
    exact: true,
    name: "ADMIN CONSOLE",
    Component: Settings,
  },
];

export default route_admin;
