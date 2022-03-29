import { Login, Blog, Home, Portfolio, Test, Create } from "src/pages";

const route_guest = [
  {
    path: "",
    exact: true,
    name: "HOME",
    Component: Create,
  },
  // {
  //   path: "portfolio",
  //   exact: false,
  //   name: "PORTFOLIO",
  //   Component: Portfolio,
  // },
  // {
  //   path: "portfolio/:id",
  //   exact: true,
  //   name: "PORTFOLIO",
  //   Component: Portfolio,
  // },
  // {
  //   path: "blog",
  //   exact: true,
  //   name: "BLOGGER",
  //   Component: Blog,
  // },
  // {
  //   path: "login",
  //   exact: true,
  //   name: "CONSOLE ADMIN",
  //   Component: Login,
  // },
  // {
  //   path: "test",
  //   exact: true,
  //   name: "CONSOLE ADMIN",
  //   Component: Test,
  // },
];

export default route_guest;
