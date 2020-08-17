import React from "react";

export const Blog = (props) => {
  const loadBlogSection = () => {
    return (
      <div className="text-gray-800 mx-2">
        <div className="bg-gray-200  border">
          <div className="text-center text-3xl">
            <h2>{props.blogTitle}</h2>
            <p className="py-1 text-xl">{props.blogSubtitle}</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {props.blogs.map((blog) => (
              <div className="col-md-6 col-lg-4" key={Math.random()}>
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
        {loadBlogSection()}
      </section>
    </React.Fragment>
  );
};
