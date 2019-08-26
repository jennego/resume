import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './stars.scss'
import bg1 from '../images/sq.jpg'
import HTML5 from '../images/html5-brands.svg'
import CSS3 from '../images/css3-alt-brands.svg'
import js from '../images/js-brands.svg'
import cloud1 from '../images/cloud1.png'
import cloud2 from '../images/cloud2.png'

import nep from '../images/nep.png'
import peggy from '../images/peggysky.png'
import stars from '../images/stars1.png'
import Footer from './footer.js'


class Plx extends Component {

    render() {

        
        
        return (

            <Parallax ref={ref => (this.parallax = ref)} pages={5} >
                <ParallaxLayer offset={0} speed={0} style={{
                    background:'linear-gradient(0deg, rgba(106,162,219,1) 0%, rgba(47,3,128,1) 55%)' }} />
                <ParallaxLayer offset={0} speed={0}>
                    <img src={stars} /> 
                    </ParallaxLayer> 
            
                <ParallaxLayer offset={1} speed={0} style={{background:'linear-gradient(0deg, rgba(192, 224, 247, 1) 0%,rgba(106, 162, 219, 1) 89%)'}} />
                <ParallaxLayer offset={2} speed={0} style={{ background:'linear-gradient(180deg, rgba(192, 224, 247, 1) 52%, rgba(247, 227, 249, 1) 82%)' }} />
                <ParallaxLayer offset={3} speed={0} factor={1.2} style={{ background:'linear-gradient(180deg, rgba(1,88,113,1) 0%, rgba(8, 83, 193, 1) 63%)' }} /> 
                    <ParallaxLayer offset={2} speed={-0.10} style={{ opacity: 0.8 }}>
                    <img src={`${cloud1}`} style={{ display: 'block', width: '40%', marginLeft: '80%', marginTop: '1%' }} />
                    <img src={`${cloud1}`} style={{ display: 'block', width: '20%', marginLeft: '50%', marginBottom: '50%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.1} speed={0} >
                    <div class="ocean">
                        <div class="wave"></div>
                        <div class="wave"></div>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer offset={4} speed={0} factor={1.2} style={{ background:'linear-gradient(180deg, rgba(8,83,193,1) 0%, rgba(47,3,128,1) 92%)' }} />

                <ParallaxLayer offset={0.3} speed={0.2}> 
                    <div style={{ textAlign: 'center', color: '#fff' }}>
                        <h1 className="title"> Jennifer Chow </h1>
                        <p className="statement"> I am a design-oriented developer making interactive experiences come to life.   </p>
                    </div>
                </ParallaxLayer>
                

                <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 1.0 }}>
                    <img src={`${nep}`} style={{ display: 'block', width: '20%', marginLeft: '10%', marginTop: '8%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1} style={{ opacity: 0.4 }}>
                    <img src={`${HTML5}`} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={`${CSS3}`} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                    <img src={`${js}`} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1.2} style={{ opacity: 0.4 }}>
                    <img src={`${cloud1}`} style={{ display: 'block', width: '30%', marginLeft: '10%' }} />
                    <img src={`${cloud2}`} style={{ display: 'block', width: '30%', marginLeft: '80%' }} />
                    <img src={`${cloud1}`} style={{ display: 'block', width: '30%', marginLeft: '40%' }} />
                </ParallaxLayer>
                

                <ParallaxLayer offset={1} speed={0.2}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Skills </h1>
    
                        
                        <ul class="list-group col-3" style={{textAlign: 'left'}}>
                            <li class="list-group-item"> <h4> Languages / Frameworks </h4> </li>
                            <li class="list-group-item">HTML/CSS</li>
                            <li class="list-group-item">JavaScript</li>
                            <li class="list-group-item">Ruby</li>
                            <li class="list-group-item">Ruby on Rails</li>
                            <li class="list-group-item">React</li>
                            <li class="list-group-item">Bootstrap and Other CSS UI packages</li>
                            <li class="list-group-item">Node/Express </li>
                        </ul>

                    <p> This very page is made with Gatsby, React and React-Spring! <a href="https://github.com/jennego/digi-resume"> See code for this site on Github.</a></p>
                    </div>

                </ParallaxLayer>


                <ParallaxLayer offset={1} speed={0.3} style={{ opacity: 1.0 }}>

                    <ul class="list-group col-3 offset-md-4" style={{marginTop: '6rem'}}>
                        <li class="list-group-item"> <h4> Software </h4> </li>
                        <li class="list-group-item">Atom, Visual Studio Code etc</li>
                        <li class="list-group-item">Microsoft Office</li>
                        <li class="list-group-item">Photoshop, After Effects, Premiere</li>
                        <li class="list-group-item">Windows/MacOSX</li>
                    </ul>
                </ParallaxLayer> 

                <ParallaxLayer offset={1} speed={0.4} style={{ opacity: 1.0 }}>

                    <ul class="list-group col-3 offset-md-8" style={{ marginTop: '6rem' }}>
                        <li class="list-group-item"> <h4>Other Technical </h4> </li>
                        <li class="list-group-item">Git / Github</li>
                        <li class="list-group-item">Bash CLI</li>
                        <li class="list-group-item">Heroku</li>
                        <li class="list-group-item">PostgreSQL</li>
                        <li class="list-group-item">WordPress</li>
                    </ul>
                </ParallaxLayer> 

                <ParallaxLayer offset={1} speed={2} style={{ opacity: 0.8 }}>
                    <img src={`${cloud1}`} style={{ display: 'block', width: '20%', marginLeft: '50%', marginTop: '1%' }} />
                    <img src={`${cloud2}`} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                    <img src={`${cloud1}`} style={{ display: 'block', width: '20%', marginLeft: '20%' }} />
                </ParallaxLayer>


                <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 1.0 }}>
                    <img src={`${peggy}`} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                </ParallaxLayer> 





                <ParallaxLayer offset={2} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Education </h1>
                        <h4> Full-Stack Web Development Certificate  </h4>
                          <h4>  CodeCore Bootcamp | 2017 </h4>
                        <p> 12 week, 60 hours/week, full-stack web development bootcamp. </p>
                        <h4> Bachelor of Arts </h4> 
                        <h4> Simon Fraser University | 2011-2013 </h4>
                        <p> >Major in English, Minor in History </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.3}>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h1 className="title"> Hobbies </h1>
                        <p className="statement"> Away from the computer, I enjoy horseback riding, photography and being a weirdo.   </p>
                        <p> My tech interests are html5, css3. JavaScript animation and interactvity.  </p>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer offset={3.9} speed={0.3}>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h1 className="title"> Contact </h1>
                        <form class="col-5 mx-auto" action="https://formspree.io/jennego@gmail.com" method="POST">

                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            
                        </div>
                        <div class="form-group">
                            <label for="name"> Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label class="form-check-label" for="text"> Your Message 
                            </label>
                            <textarea class="form-control" rows="4" id="text" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </ParallaxLayer>


                
        <Footer></Footer>
        </Parallax> 

        )}
    }


    export default Plx 
    
