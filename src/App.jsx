import React from "react";
import "./Dark.css";
import Navbar from "./components/Navbar";
import IconText from "./components/Icontext";
import LogoList from "./components/LogoList";
import ReviewList from "./components/RewiewList";
import FAQ from "./components/FAQ";
import DarkModeToggle from "./DarkmodeToggle";
import EmailValidationForm from "./components/EmailValidationForm";



const App = () => {
  return (
    <div>
    <html lang="en" className="">
      <DarkModeToggle />


    <div className="pages">
        <div className="page1">
          <div className="innehåll">
           <Navbar />
           

            <div className="textbuttons">
              <div className="text">
                <div className="title">
                  <h1 className="h1">Manage All Your Money In One App</h1>
                </div>
                <div className="subtitle">
                  <p className="p1">
                    We offer you a new generation of the mobile banking.
                    <br />
                    Save, spend & manage money in your pocket.
                  </p>
                </div>
              </div>
              <div className="buttons">
                <button className="button1">
                  <img className="appstore" src="/images/app store.jpg" alt="app store" />
                  <p>
                    Download on the
                    <br />
                    <strong>App Store</strong>
                  </p>
                </button>
                <button className="button2">
                  <img className="googleplay" src="/images/google play.jpg" alt="google play" />
                  <p>
                    GET IT ON
                    <br />
                    <strong>Google Play</strong>
                  </p>
                </button>
              </div>
            </div>

            <div className="discovermore"></div>
            <div className="image1"></div>
          </div>
        </div>

        <div className="page2">
          <div className="innehåll2">
            <div className="logotop">
          <LogoList/>
            </div>

            <div className="phonetext">
              <div className="image2">
                <img className="phone2" src="/images/iphonepage2.jpg" alt="iphone2" />
              </div>
              <div className="text2">
                <div className="appfeatures">
                  <h2 id="AF">App Features</h2>
                  <p id="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilises ultrices.
                    Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
                  </p>
                </div>
                <div className="icontext">
                <IconText/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div className="page3">
          <div className="innehåll3">
            <h1 id="headline3">How Does It Work?</h1>
            <div className="telefoner3">
              <img id="telefon1" src="/images/telefon1.jpg" alt="telefon1" />
              <img id="telefon2" src="/images/telefon2.jpg" alt="telefon2" />
              <img id="telefon3" src="/images/telefon3.jpg" alt="telefon3" />
            </div>
            <div className="beskrivning3">
              <h2 id="bh3">Latest transaction history</h2>
              <p id="bp3">
                Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
                conectetur condimentum.
              </p>
            </div>
          </div>
        </div>

        {/* Page 4 */}
        <div className="page4">
          <div className="innehåll4">
            <div className="sektion1">
              <div className="text4">
                <h2 id="h23">
                  Make your money
                  <br />
                  transfer simple and clear
                </h2>
                <ul className="ul3">
                  <li>Banking transactions are free for you</li>
                  <br />
                  <li>No monthly cash commission</li>
                  <br />
                  <li>Manage payments and transactions online</li>
                </ul>
                <button id="knapp4">Learn more →</button>
              </div>
              <div className="img4">
                <img src="/images/img4.jpg" alt="img4" />
              </div>
            </div>

            <div className="sektion2">
              <div className="img42">
                <img src="/images/img4.2.jpg" alt="img42" />
              </div>
              <div className="text42">
                <h2 id="h24">
                  Receive payment from
                  <br />
                  international bank details
                </h2>
                <div className="icontext">
                  <div className="it1">
                    <img id="bild1" src="/images/it1.jpg" alt="it1" />
                    <p>
                      Manage your payments online. Mollis congue egestas egestas fermentum fames.
                    </p>
                  </div>
                  <div className="it2">
                    <img id="bild2" src="/images/it2.jpg" alt="it2" />
                    <p>
                      A elementum and imperdiet enim, pretium etiam facilisi aenean quam mauris.
                    </p>
                  </div>
                </div>
                <div className="knapp">
                  <button id="knapp42">Learn more →</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 5 */}
        <div className="page5">
          <div className="innehåll5">
            <div className="recension-section">
              <h2 id="headline5">
                Clients are
                <br />
                Loving Our App
              </h2>
              <div className="recentioner">
                
                <ReviewList/>
              </div>
            </div>
          </div>
        </div>

        {/* Page 6 */}
        <div className="page6">
          <div className="innehåll6">
            <div className="ruta1">
              <div className="text6">
                <div className="text6u">
                  <h2 id="questions">
                    Any questions?
                    <br /> Check out the FAQs
                  </h2>
                  <p>Still have unanswered questions and need to get in touch?</p>
                </div>
                <div className="text6n">
                  <div className="vibe">
                    <div className="vibe-content">
                      <img src="/images/vibe.jpg" alt="vibeicon" />
                      <p>Still have questions?</p>
                    </div>
                    <button id="btn6">Contact us →</button>
                  </div>
                  <div className="whatsapp">
                    <div className="whatsapp-content">
                      <img src="/images/whatsapp.jpg" alt="whatsappicon" />
                      <p>Don't like phone calls?</p>
                    </div>
                    <button id="btn61">Contact us →</button>
                  </div>
                </div>
              </div>
              <div className="text61">
              
                <FAQ />
              </div>
            </div>
            <div className="ruta2">
              <div className="subscribe">
                <img src="/images/notification.jpg" alt="notification" />
                <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
              </div>
              <div className="email">
                {/* <p className="email-text">Your Email</p> */}
                <EmailValidationForm />
            
              </div>
            </div>
            <div className="ruta3">
              <footer>© 2024 Silicon. All rights reserved. Credit MadrasThemes</footer>
            </div>
          </div>
        </div>
      </div>
    </html>
      
    </div>
  );
};

export default App;
