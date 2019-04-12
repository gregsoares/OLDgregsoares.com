import React from 'react';

export default () => {
  return(
    <section id="four" className="wrapper alt style1">
      <div className="inner">
        <h2 className="major">Vitae phasellus</h2>
        <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
        <section className="features">
          <article>
            <a href="/" className="#image"><img src="images/pic04.jpg" alt="" /></a>
            <h3 className="major">Sed feugiat lorem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
            <a href="/" className="special">Learn more</a>
          </article>
          <article>
            <a href="/" className="image"><img src="images/pic05.jpg" alt="" /></a>
            <h3 className="major">Nisl placerat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
            <a href="/" className="special">Learn more</a>
          </article>
          <article>
            <a href="/" className="image"><img src="images/pic06.jpg" alt="" /></a>
            <h3 className="major">Ante fermentum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
            <a href="/" className="special">Learn more</a>
          </article>
          <article>
            <a href="/" className="image"><img src="images/pic07.jpg" alt="" /></a>
            <h3 className="major">Fusce consequat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
            <a href="/" className="special">Learn more</a>
          </article>
        </section>
        <ul className="actions">
          <li><a href="/" className="button">Browse All</a></li>
        </ul>
      </div>
    </section>
  );
}