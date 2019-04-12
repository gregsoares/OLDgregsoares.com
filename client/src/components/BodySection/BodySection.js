import React from 'react';

export default () => {
  return(
    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/" className="image"><img src="images/pic01.jpg" alt="" /></a>
          <div className="content">
            <h2 className="major">Magna arcu feugiat</h2>
            <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
            <a href="/" className="special">Learn more</a>
          </div>
        </div>
      </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="/" className="image"><img src="images/pic02.jpg" alt="" /></a>
            <div className="content">
              <h2 className="major">Tempus adipiscing</h2>
              <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
              <a href="/" className="special">Learn more</a>
            </div>
          </div>
        </section>

        <section id="three" className="wrapper spotlight style1">
          <div className="inner">
            <a href="/" className="image"><img src="images/pic03.jpg" alt="" /></a>
            <div className="content">
              <h2 className="major">Nullam dignissim</h2>
              <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
              <a href="/" className="special">Learn more</a>
            </div>
          </div>
        </section>
    </section>
  );
}