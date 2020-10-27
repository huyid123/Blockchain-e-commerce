import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Main.css';

class Main extends Component {
  
  render() {
    return (
      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">      
            <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav">
                  <li class="nav-item">
                  <a class="nav-link" href="# ">Product</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="# ">Features</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="# ">Pricing</a>
                  </li>
               </ul>
            </div>
        </nav>          
            {/* slide 1*/}
        <Carousel>            
            <Carousel.Item>
            <div className="slide">
              <img
                  className="d-block"
                  src={require("../Image/ps5-1500x600.jpg")}
                  alt="First slide"
              />   
              <div className="caption">
                    <h3>PS5 </h3>
                    <p>There's really not much left to find out about the PS5, which is good because you can 
                        now start planning which version you're going to get, what games you'll pick up first, 
                        the accessories you'll need, how much you need to save, and when exactly it'll land on your doorstep.</p>
                        <div class="button_cont" align="center">
                          <a class="example_e" href="add-website-here" target="_blank" rel="nofollow noopener">Discover More</a>
                        </div>
              </div>
            </div> 
            </Carousel.Item>                               
            <Carousel.Item>
            <div className="slide">
              <img
                  className="d-block"
                  src={require("../Image/xbox-1500x600.jpg")}
                  alt="First slide"
              />   
              <div className="caption">
                    <h3>Xbox Series X </h3>
                    <p>Xbox Series X is compatible with thousands of games across four generations of Xbox.
                        And, with Smart Delivery games, you buy a game once and get the best version of that game for the console you’re playing on.
                        To play a backward compatible game, insert the disc or search your library and select the game you want to play.</p>
                    <div class="button_cont" align="center">
                        <a class="example_e" href="add-website-here" target="_blank" rel="nofollow noopener">Discover More</a>
                    </div>                        
              </div>
            </div> 
            </Carousel.Item>                      
            <Carousel.Item>
            <div className="slide">
              <img
                  className="d-block"
                  src={require("../Image/msi-1500x600.jpg")}
                  alt="First slide"
              />   
              <div className="caption">
                    <h3>XBOX </h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <div class="button_cont" align="center">
                          <a class="example_e" href="add-website-here" target="_blank" rel="nofollow noopener">Discover More</a>
                    </div>
              </div>
            </div> 
            </Carousel.Item>                      
        </Carousel>
        
        
      </div>
    );
  }
}

export default Main;
