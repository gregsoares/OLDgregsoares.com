import React, { Component } from 'react';
// import { Button } from 'reactstrap';
// import logo from './logo.svg';

//Importing Components
import TopNav from './components/TopNav/TopNav';
import TopHeader from './components/TopHeader/TopHeader';
import IconCardSection from './components/IconCard/IconCardSection';
import CardSection from './components/CardSection/CardSection';
import ContactCard from './components/ContactCard/ContactCard';
import ContactForm from './components/ContactForm/ContactForm';
import TreeSection from './components/TreeSection/TreeSection';

// Testing
// import IconCard from './components/IconCard/IconCard';

class App extends Component {

  render() {
  const cards = [{ 'icon': 'fa-shopping-cart', 
                'title': "IconCard Title",
                'text': "Some great text to text the text in texting."},
                { 'icon': 'fa-laptop', 
                  'title': "LapTop Title",
                  'text': "SuperFastSuperLapTop."},
                { 'icon':"fa-lock",
                  'title':"IconCard Title",
                  'text': "Some great text to text the text in texting."}];
  const nodes = [{
    imgPath: "img/about/1.jpg",
    title: "Original Node",
    subtitle: "Something extraordinary came to pass",
    text: "I had a new hobby"
    },{
    imgPath: "img/about/2.jpg",
    title: "First Generation",
    subtitle: "Something extraordinary came to pass",
    text: "I had a new hobby"
    },
    {
    imgPath: "img/about/3.jpg",
    title: "Second Gen",
    subtitle: "Something extraordinary came to pass",
    text: "I had a new hobby"
    },
    {
    imgPath: "img/about/4.jpg",
    title: "third 39th",
    subtitle: "Something extraordinary came to pass",
    text: "I had a new hobby"
    }]

    const contactCards = [
      {
        imgPath: "img/about/1.jpg",
        title: "First Contact",
        subtitle: "Something extraordinary came to pass",
        text: "I had a new hobby" 
      },
      {
        imgPath: "img/about/2.jpg",
        title: "Second Contact",
        subtitle: "Something extraordinary came to pass",
        text: "I had a new hobby" 
      },
      {
        imgPath: "img/about/3.jpg",
        title: "Last Contact",
        subtitle: "Something extraordinary came to pass",
        text: "I had a new hobby" 
      },

    ]

    return (
      <div className="App">
        <TopNav />

      <ContactCard title='Card Section Title' subtitle='Card Section Subtitle' cards={contactCards} />
        <TopHeader title="Welcome to GregSoares.com" text="Full Stack JavaScript" btnText="Download Resume" />

        {/* topOne.icon, .title, .text */}
        
        <IconCardSection 
          title="IconCard Section Title" 
          subtitle="IconCardSection subtitle" 
          cards={cards}
          />

      <CardSection />


      <TreeSection title="TreeSection Title" subtitle="Handy Subtitle" nodes={nodes}/>

      <ContactForm />


        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; Your Website 2019</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>


        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="img/portfolio/02-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Explore</li>
                        <li>Category: Graphic Design</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="img/portfolio/03-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Finish</li>
                        <li>Category: Identity</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="img/portfolio/04-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Lines</li>
                        <li>Category: Branding</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="img/portfolio/05-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Southwest</li>
                        <li>Category: Website Design</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="img/portfolio/06-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Window</li>
                        <li>Category: Photography</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
