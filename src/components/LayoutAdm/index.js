import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import route_admin from "src/routes/route_admin";
import { NotFound } from "src/pages";
import "./style.css";
import {
  FaHome,
  FaRegImages,
  FaRegEdit,
  FaTools,
  FaSignOutAlt,
} from "react-icons/fa";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const LayoutAdm = () => {
  const btnLogout = () => {
    localStorage.removeItem("TOKEN");
  };
  return (
    // <div>
    //   <section className="menu pt-5">
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-md-3 d-none d-md-block">
    //           <div className="card-menu bg-white p-4">
    //             <h4>Menu</h4>
    //             <div className="mt-3">
    //               <div className="item align-items-center d-flex mb-3">
    //                 <Link to={"/admin-console"}>
    //                   <FaHome color="grey" size={20} />
    //                   <span>Dashboard</span>
    //                 </Link>
    //               </div>
    //               <div className="item align-items-center d-flex mb-3">
    //                 <Link to={"/admin-console/manage-portfolio"}>
    //                   <FaRegImages color="grey" size={20} />
    //                   <span>Manage Portfolio</span>
    //                 </Link>
    //               </div>
    //               <div className="item align-items-center d-flex mb-3">
    //                 <Link to={"/admin-console/manage-blog"}>
    //                   <FaRegEdit color="grey" size={20} />
    //                   <span>Manage Blogger</span>
    //                 </Link>
    //               </div>
    //               <div className="item align-items-center d-flex mb-3">
    //                 <Link to={"/admin-console/settings"}>
    //                   <FaTools color="grey" size={20} />
    //                   <span>Settings Page</span>
    //                 </Link>
    //               </div>
    //               <div className="item align-items-center d-flex mb-3">
    //                 <Link to={"/"} onClick={btnLogout}>
    //                   <FaSignOutAlt color="grey" size={20} />
    //                   <span>Log Out</span>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-md-9">
    //           <div className="card-content">
    //             {/* CONTENT NYA BROOO */}
    //             <Suspense fallback={loading}>
    //               <Routes>
    //                 {route_admin.map(
    //                   ({ path, name, Component, exact }, key) => {
    //                     return (
    //                       <Route
    //                         key={key}
    //                         exact={exact}
    //                         path={path}
    //                         name={name}
    //                         element={<Component />}
    //                       />
    //                     );
    //                   }
    //                 )}
    //                 <Route path="*" element={<NotFound />} />
    //               </Routes>
    //             </Suspense>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <>
      <section className="sidebar d-none d-md-block">
        <div className="content">
          <div className="card-menu bg-white p-4">
            <h4>Menu</h4>
            <div className="mt-3">
              <div className="item align-items-center d-flex mb-3">
                <Link to={"/admin-console"}>
                  <FaHome color="grey" size={20} />
                  <span>Dashboard</span>
                </Link>
              </div>
              <div className="item align-items-center d-flex mb-3">
                <Link to={"/admin-console/manage-portfolio"}>
                  <FaRegImages color="grey" size={20} />
                  <span>Manage Portfolio</span>
                </Link>
              </div>
              <div className="item align-items-center d-flex mb-3">
                <Link to={"/admin-console/manage-blog"}>
                  <FaRegEdit color="grey" size={20} />
                  <span>Manage Blogger</span>
                </Link>
              </div>
              <div className="item align-items-center d-flex mb-3">
                <Link to={"/admin-console/settings"}>
                  <FaTools color="grey" size={20} />
                  <span>Settings Page</span>
                </Link>
              </div>
              <div className="item align-items-center d-flex mb-3">
                <Link to={"/"} onClick={btnLogout}>
                  <FaSignOutAlt color="grey" size={20} />
                  <span>Log Out</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="main-wrapper">
        <div className="container-fluid">
          <Suspense fallback={loading}>
            <Routes>
              {route_admin.map(({ path, name, Component, exact }, key) => {
                return (
                  <Route
                    key={key}
                    exact={exact}
                    path={path}
                    name={name}
                    element={<Component />}
                  />
                );
              })}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default LayoutAdm;
