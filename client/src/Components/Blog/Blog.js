import React from "react";

export const Blog = (props) => {
  const loadBlogSection = () => {
    return (
      <div>
        <div className="container">
          <div className="section-title text-center">
            <h2>{props.blogTitle}</h2>
            <p className="separator">{props.blogSubtitle}</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {props.blogs.map((blog) => (
              <div className="col-md-6 col-lg-4">
                <div className="block-blog text-left">
                  <a href="/">
                    <img
                      src={blog.imgURL}
                      className="img-responsive"
                      alt="img"
                    />
                  </a>
                  <div className="content-blog">
                    <h4>
                      <a href="/">{blog.text}</a>
                    </h4>
                    <span>{blog.date}</span>
                    <a className="pull-right readmore" href="/">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      {/* <!--========================== */}
      {/* Blog Section */}
      {/* ============================--> */}
      <section id="blog" className="padd-section wow fadeInUp">
        {() => loadBlogSection}
      </section>
    </React.Fragment>
  );
};
