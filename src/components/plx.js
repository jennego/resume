import React, {Component} from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import bg1 from '../images/sq.jpg'
import HTML5 from '../images/html5-brands.svg'
import CSS3 from '../images/css3-alt-brands.svg'
import js from '../images/js-brands.svg'

// Little helpers ...
// const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


class Plx extends Component {
    render() {
        const STAR_DATA = generateStarData();


        function createStar({ x, y }, index, debug) {
            const starInstance = document.createElementNS("http://www.w3.org/2000/svg", 'g');
            starInstance.classList.add('star-instance');
            starInstance.setAttribute('transform', `translate(${x} ${y})`);

            const radius = debug ? 10 : 1;
            const starReference = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

            starReference.setAttribute('r', radius);
            starReference.classList.add('star');

            const delay = index * 100 + 500 * Math.random();

            const duration = 3000 + Math.random() * 4000;
            const brightness = 0.7 + Math.random() * 0.3;


            starReference.style.setProperty('--star-animation-delay', `${delay}ms`);
            starReference.style.setProperty('--star-animation-duration', `${duration}ms`);
            starReference.style.setProperty('--star-animation-glow-duration', `10000ms`);
            starReference.style.setProperty('--star-brightness', `${brightness}`);

            starInstance.appendChild(starReference);
            return starInstance;
        }


        function createNightSky({ container, debug, starReference }) {
            STAR_DATA.forEach((data, index) => {
                const star = createStar(data, index, debug);
                container.appendChild(star);
            })
        }

        const starGroup = document.getElementById('starGroup');

        createNightSky({ container: starGroup, data: STAR_DATA });

        // this is here to make the actual code more accessible- will be avaialble at the top through hoisting
        function generateStarData() {
            return [{
                "x": 1596.973448245577,
                "y": 578.4171532781027
            },
            {
                "x": 624.1864228031227,
                "y": 227.26089443712394
            },
            {
                "x": 195.53121286639285,
                "y": 830.2913557403084
            },
            {
                "x": 654.6718140243884,
                "y": 357.55987380696473
            },
            {
                "x": 1270.262628273585,
                "y": 556.1937909655104
            },
            {
                "x": 1874.1099861074613,
                "y": 537.8371896254555
            },
            {
                "x": 227.66702184447672,
                "y": 933.5058204022108
            },
            {
                "x": 849.1452025050253,
                "y": 753.8239408253662
            },
            {
                "x": 162.39455177885364,
                "y": 371.44565705415175
            },
            {
                "x": 536.8391119975487,
                "y": 471.438417884515
            },
            {
                "x": 1700.8735348500447,
                "y": 811.1546053915013
            },
            {
                "x": 1313.5764431918108,
                "y": 177.0490832716154
            },
            {
                "x": 1380.7843468122915,
                "y": 705.8869453492149
            },
            {
                "x": 1611.2247060049194,
                "y": 121.86836681480617
            },
            {
                "x": 416.4980895593402,
                "y": 100.97360726285487
            },
            {
                "x": 1605.3045718862004,
                "y": 568.3522232795161
            },
            {
                "x": 1872.2274578638203,
                "y": 353.43127251104664
            },
            {
                "x": 609.8554307846044,
                "y": 933.4880549032565
            },
            {
                "x": 738.2998430349312,
                "y": 586.219408066047
            },
            {
                "x": 218.99173543432494,
                "y": 990.9343797547301
            },
            {
                "x": 1731.2780427178832,
                "y": 288.2617875993787
            },
            {
                "x": 536.515464451623,
                "y": 704.4454412867656
            },
            {
                "x": 1231.5398910809145,
                "y": 932.9406357890622
            },
            {
                "x": 1767.7240418782917,
                "y": 377.4978308404437
            },
            {
                "x": 60.763730956239215,
                "y": 180.0428524529891
            },
            {
                "x": 504.66745458498474,
                "y": 822.3694625674929
            },
            {
                "x": 190.57438689705154,
                "y": 850.4664376865585
            },
            {
                "x": 1226.602311895454,
                "y": 166.00523960305534
            },
            {
                "x": 28.252940020621065,
                "y": 95.72025749659052
            },
            {
                "x": 776.7402174706963,
                "y": 182.0857667170639
            },
            {
                "x": 1661.4365255203802,
                "y": 9.199715819379062
            },
            {
                "x": 1791.3643331034255,
                "y": 137.16432244657108
            },
            {
                "x": 264.2306334627267,
                "y": 179.96747301355498
            },
            {
                "x": 144.12707359609112,
                "y": 419.5856575392614
            },
            {
                "x": 1562.3921330416733,
                "y": 727.132203970914
            },
            {
                "x": 1477.836836260912,
                "y": 772.3942484736992
            },
            {
                "x": 740.0053875532842,
                "y": 808.3813934419943
            },
            {
                "x": 1791.0710885194505,
                "y": 786.1241026349015
            },
            {
                "x": 645.5653888153922,
                "y": 736.4977734546056
            },
            {
                "x": 1384.4168196732044,
                "y": 829.9732607536924
            },
            {
                "x": 163.6915577740048,
                "y": 387.589934948666
            },
            {
                "x": 1030.752807909637,
                "y": 986.8638306532176
            },
            {
                "x": 1547.5697556980297,
                "y": 738.4827189459013
            },
            {
                "x": 911.6204926165387,
                "y": 288.19639143783735
            },
            {
                "x": 436.2726947153002,
                "y": 156.52925590335153
            },
            {
                "x": 470.90493070521467,
                "y": 508.3648167337842
            },
            {
                "x": 570.7832681150248,
                "y": 90.46864903266116
            },
            {
                "x": 286.4828739132141,
                "y": 331.890507980424
            },
            {
                "x": 839.1294725722154,
                "y": 459.50407507204005
            },
            {
                "x": 918.5794503208701,
                "y": 382.36947443013645
            },
            {
                "x": 978.32693336608,
                "y": 233.22793996980872
            },
            {
                "x": 1942.6378792746775,
                "y": 775.2262931872873
            },
            {
                "x": 183.57275380766546,
                "y": 490.23746673496936
            },
            {
                "x": 1870.1346895593947,
                "y": 5.340554080379922
            },
            {
                "x": 77.8455233825599,
                "y": 991.3432482687949
            },
            {
                "x": 1150.8916475486242,
                "y": 734.8173445629565
            },
            {
                "x": 1267.778063245026,
                "y": 76.46690911117871
            },
            {
                "x": 412.5649555878659,
                "y": 388.8894946239125
            },
            {
                "x": 1963.9488881788552,
                "y": 332.86133487469607
            },
            {
                "x": 558.0428440555471,
                "y": 555.534536568679
            },
            {
                "x": 1800.204256032283,
                "y": 606.9161588457371
            },
            {
                "x": 446.76135290536666,
                "y": 184.04218476261437
            },
            {
                "x": 722.4139720353855,
                "y": 166.0382370352249
            },
            {
                "x": 385.7923791367068,
                "y": 522.5903196230092
            },
            {
                "x": 280.86655197312814,
                "y": 306.91336158262294
            },
            {
                "x": 929.575833643574,
                "y": 276.84878095307374
            },
            {
                "x": 1576.1257876455063,
                "y": 642.0639364621978
            },
            {
                "x": 272.42012120065783,
                "y": 303.4312556623606
            },
            {
                "x": 1308.241904521537,
                "y": 777.277639109069
            },
            {
                "x": 1798.34651340239,
                "y": 728.9710737899151
            },
            {
                "x": 1034.1455081792458,
                "y": 866.6111552206579
            },
            {
                "x": 191.3789885191175,
                "y": 26.837480326682428
            },
            {
                "x": 267.4427480940049,
                "y": 435.20349308803463
            },
            {
                "x": 169.5951738454462,
                "y": 16.116964765581223
            },
            {
                "x": 1304.4617878663903,
                "y": 300.4144440678036
            },
            {
                "x": 1057.5827335967429,
                "y": 423.5485979150542
            },
            {
                "x": 914.283134053933,
                "y": 79.1276015573803
            },
            {
                "x": 1514.105232679034,
                "y": 4.439816438432498
            },
            {
                "x": 1440.5716820429939,
                "y": 757.3441195933785
            },
            {
                "x": 301.8884359195071,
                "y": 879.0979664055392
            }]
        };
        return (

            
        
            <Parallax ref={ref => (this.parallax = ref)} pages={5} style={{}}>
                <ParallaxLayer offset={0} speed={0} style={{
                    background:'linear-gradient(0deg, rgba(106,162,219,1) 0%,rgba(25,0,150,1) 55%)' }} />
                <ParallaxLayer offset={0} speed={0}>
                    <svg id="svgCanvas" viewbox="0 0 2000 1000" preserveaspectratio="xMinYMin slice" width="100%" height="100%" >
                        <g id="starGroup"></g>
                    </svg>
                    </ParallaxLayer> 
            
                <ParallaxLayer offset={1} speed={0} style={{background:'linear-gradient(0deg, rgba(192, 224, 247, 1) 0%,rgba(106, 162, 219, 1) 89%)'}} />
                <ParallaxLayer offset={2} speed={0} style={{ background:'linear-gradient(180deg, rgba(192, 224, 247, 1) 52%, rgba(247, 227, 249, 1) 82%)' }} />
                <ParallaxLayer offset={3} speed={0} style={{ background:'linear-gradient(180deg, rgba(247,227,249,1) 13%, rgba(11,112,199,1) 43%, rgba(19,92,198,1) 70%)' }} > 
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0} style={{ background:'linear-gradient(180deg, rgba(19, 92, 198, 1) 0%, rgba(25, 0, 150, 1) 65%)' }} />

                <ParallaxLayer offset={0.3} speed={0.2}> 
                    <div style={{ textAlign: 'center', color: '#fff' }}>
                        <h1 className="title"> Jennifer Chow </h1>
                        <p className="statement"> I am a design-oriented developer making interactive experiences come to life.   </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Skills </h1>
                        <p className="statement"> I have skillz   </p>
                        <ul>
                        <li> Software: Atom, Visual Studio Code, Microsoft Office, Dreamweaver, Photoshop, After Effects, Premiere Pro </li>
                        <li> Languages and Frameworks: HTML, CSS, JavaScript,  Ruby, Ruby on Rails, Node.js/Express.js, Bootstrap </li>
                        <li> Other Technical: Git, Github, Bash CLI, PostgresSQL, Heroku, WordPress, MacOSX/Windows </li>
                        </ul>

                    <p> This very page is made with Gatsby, React and React-Spring! <a href="https://github.com/jennego/digi-resume"> See code for this site on Github.</a></p>
                    </div>

                </ParallaxLayer>


                <ParallaxLayer offset={1} speed={1} style={{ opacity: 0.3 }}>
                    <img src={`${HTML5}`} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={`${CSS3}`} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                    <img src={`${js}`} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
                </ParallaxLayer>


                <ParallaxLayer offset={2} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Education </h1>
                        <p className="statement"> I have education!   </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Hobbies </h1>
                        <p className="statement"> I am a horse!  </p>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer offset={4} speed={0.3}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="title"> Contact </h1>
                        <p className="statement"> I am a horse!  </p>
                    </div>
                </ParallaxLayer>


                



                {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '10%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer> */}


                {/* <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <img src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer> 

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '0%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true)
                    }}
                />

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url('server')} style={{ width: '20%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url('bash')} style={{ width: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                </ParallaxLayer>  
     */}
            </Parallax> 

        )}
    }

    export default Plx 
    
