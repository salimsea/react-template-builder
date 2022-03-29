import React, { useEffect } from "react";
import { BlogDummy1, BlogDummy2 } from "src/assets";
import "./style.css";
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="title-blog">
        <div className="container text-center">
          <h1>Blogger</h1>
          <p className="mt-3">
            This page is for sharing knowledge, news about technology and coding
          </p>
        </div>
      </section>

      <section className="blogger">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div>
                <input
                  type="text"
                  placeholder="Enter you keyword..."
                  className="form-control textinput-search"
                />
              </div>
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="card-post">
                    <img src={BlogDummy1} className="img-post" alt="" />
                    <div className="bg-primary py-3 mx-0 px-4">
                      <small>17 Jan 2022, 10:30 AM</small>
                      <h2>Miskin = Privillage ?</h2>
                      <p>
                        Disini saya akan menjelaskan kenapa bisa begitu ? apa
                        yang akan saya jelaskan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-post">
                    <img src={BlogDummy2} className="img-post" alt="" />
                    <div className="bg-primary py-3 mx-0 px-4">
                      <small>17 Jan 2022, 10:30 AM</small>
                      <h2>How to scrapp data tokopedia?</h2>
                      <p>
                        Disini saya akan menjelaskan kenapa bisa begitu ? apa
                        yang akan saya jelaskan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-post">
                    <img src={BlogDummy1} className="img-post" alt="" />
                    <div className="bg-primary py-3 mx-0 px-4">
                      <small>17 Jan 2022, 10:30 AM</small>
                      <h2>Miskin = Privillage ?</h2>
                      <p>
                        Disini saya akan menjelaskan kenapa bisa begitu ? apa
                        yang akan saya jelaskan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-post">
                    <img src={BlogDummy2} className="img-post" alt="" />
                    <div className="bg-primary py-3 mx-0 px-4">
                      <small>17 Jan 2022, 10:30 AM</small>
                      <h2>How to scrapp data tokopedia?</h2>
                      <p>
                        Disini saya akan menjelaskan kenapa bisa begitu ? apa
                        yang akan saya jelaskan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-recent-post">
                <h3>Recent Post</h3>
                <div className="mt-3">
                  <div className="row">
                    <div className="col-md-5 align-self-center">
                      <img src={BlogDummy1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7">
                      <small>17 Jan 2022, 10:30 AM</small>
                      <h6>How to scrapping data tokopedia?</h6>
                      <p>Disini saya akan menjelaskan kenapa bisa begitu...</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 align-self-center">
                      <img src={BlogDummy2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7">
                      <small>17 Jan 2022, 10:30 AM</small>
                      <h6>How to scrapping data tokopedia?</h6>
                      <p>Disini saya akan menjelaskan kenapa bisa begitu...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-category-post">
                <h3>Category</h3>
                <div className="mt-3">
                  <ul>
                    <li>
                      <div className="bulet-color"></div>
                      Programming
                    </li>
                    <li>
                      <div className="bulet-color"></div>
                      Marketing
                    </li>
                    <li>
                      <div className="bulet-color"></div>
                      Tutorial
                    </li>
                    <li>
                      <div className="bulet-color"></div>
                      Scrapping
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
