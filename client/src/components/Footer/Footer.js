import React from 'react';

export default () => {
  return(
            <section id="footer">
          <div className="inner">
            <h2 className="major">Get in touch</h2>
            <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
            <form method="post" action="">
              <div className="fields">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" /></li>
              </ul>
            </form>
            <ul className="contact">
              <li className="fa-home">
                Untitled Inc<br />
                1234 Somewhere Road Suite 2894<br />
                Nashville, TN 00000-0000
              </li>
              <li className="fa-phone">(000) 000-0000</li>
              <li className="fa-envelope"><a href="/">information@untitled.tld</a></li>
              <li className="fa-twitter"><a href="/">twitter.com/untitled-tld</a></li>
              <li className="fa-facebook"><a href="/">facebook.com/untitled-tld</a></li>
              <li className="fa-instagram"><a href="/">instagram.com/untitled-tld</a></li>
            </ul>
            <ul className="copyright">
              <li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </section>
  );
}