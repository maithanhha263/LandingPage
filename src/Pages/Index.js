import React, { Fragment } from 'react';

function Index () {
    return (
        <Fragment>
            <div className="loader_bg">
      <div className="loader"><img src="assets/images/loading.gif" alt="#"/></div>
   </div>

   <div className="full_bg" />

      <header className="header-area">
         <div className="container">
            <div className="row d_flex">
               <div className=" col-md-3 col-sm-3">
                  <div className="logo">
                     <a href="index.html">Pro Psycho</a>
                  </div>
               </div>
               <div className="col-md-9 col-sm-9">
                  <div className="navbar-area">
                     <nav className="site-navbar">
                        <ul>
                           <li><a className="active" href="index.html">Home</a></li>
                           <li><a href="about.html">Guideline</a></li>
                           <li><a href="service.html">Services </a></li>
                           <li className="d_none"><a href="Javascript:void(0)"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                           <li><a href="login.html"><button className="button-login">Login</button></a></li>
                           <li><a href="signup.html"><button className="button-signup">Sign up</button></a></li>
                           <li><a href="trial.html"><button className="button-trial">Free Trial</button></a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
     
      <div className="slider_main">
     
         <div id="banner1" className="carousel slide">
            <ol className="carousel-indicators">
               <li data-target="#banner1" data-slide-to="0" className="active"></li>
               <li data-target="#banner1" data-slide-to="1"></li>
               <li data-target="#banner1" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              
               <div className="carousel-item active">
                  <div className="container">
                     <div className="carousel-caption relative">
                        <div className="row d_flex">
                           <div className="col-md-5">
                              <div className="creative">
                                 <h1>A Strong Image of Yourself is Our Success </h1>
                                 <p>Create a life that looks good on the inside, not one that just looks on the outsidet</p>
                              </div>
                           </div>
                           <div className="col-md-7">
                              <div className="row mar_right">
                                 <div className="col-md-6">
                                    <div className="agency">
                                       <figure><img src="assets/images/img1.png" alt="#"/></figure>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="agency">
                                       <figure><img src="assets/images/img2.jpg" alt="#"/></figure>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption relative">
                        <div className="row d_flex">
                           <div className="col-md-5">
                              <div className="creative">
                                 <h1>Spa <br/>Center </h1>
                                 <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                 <a className="read_more" href="Javascript:void(0)">Contact us</a>
                                 <a className="read_more" href="Javascript:void(0)">Read More</a>
                              </div>
                           </div>
                           <div className="col-md-7">
                              <div className="row mar_right">
                                 <div className="col-md-6">
                                    <div className="agency">
                                       <figure><img src="assets/images/img1.png" alt="#"/></figure>
                                       <div className="play_icon">
                                          <a className="play-btn" href="javascript:void(0)"><img src="assets/images/play_icon.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="agency">
                                       <figure><img src="assets/images/img2.png" alt="#"/></figure>
                                       <div className="play_icon">
                                          <a className="play-btn" href="javascript:void(0)"><img src="assets/images/play_icon.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
           </div>
      </div>
   </div>
  
   <div className="help">
      <div className="carousel-item active">
         <div className="container">
            <div className="carousel-caption relative">
               <div className="row d_flex">
                  <div className="col-md-5">
                     <div className="creative">
                        <h1>How can we help you? </h1>
                     </div>
                  </div>
                  <div className="col-md-7">
                     <div className="container2">
                        <div className="item">
                           <h2>Useful Resources</h2>
                           <p className="content">You can search and share about blog, information, book of psychology </p>
                        </div>
                        <div className="item">
                           <h2>Schedule a consultation</h2>
                           <p className="content">We have a consultation schedule available for you to choose</p>
                        </div>
                        <div className="item">
                           <h2>Q&A about psychology</h2>
                           <p className="content">You can chat with a psychologist or other client</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
  
   <div className="customers">
      <div className="clients_bg">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="titlepage text_align_center">
                     <h2>What is Says Customers</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   
      <div id="myCarousel" className="carousel slide clients_banner" data-ride="carousel">
         <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
         </ol>
         <div className="carousel-inner">
            <div className="carousel-item active">
               <div className="container">
                  <div className="carousel-caption relative">
                     <div className="row d_flex">
                        <div className="col-md-2 col-sm-8">
                           <div className="pro_file">
                              <i><img src="assets/images/test2.png" alt="#"/></i>
                              <h4>English.Many</h4>
                              <span>normal distribution</span>
                           </div>
                        </div>
                        <div className="col-md-10">
                           <div className="test_box text_align_left">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <div className="container">
                  <div className="carousel-caption relative">
                     <div className="row d_flex">
                        <div className="col-md-2 col-sm-8">
                           <div className="pro_file">
                              <i><img src="assets/images/test2.png" alt="#"/></i>
                              <h4>English.Many</h4>
                              <span>normal distribution</span>
                           </div>
                        </div>
                        <div className="col-md-10">
                           <div className="test_box text_align_left">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <div className="container">
                  <div className="carousel-caption relative">
                     <div className="row d_flex">
                        <div className="col-md-2 col-sm-8">
                           <div className="pro_file">
                              <i><img src="assets/images/test2.png" alt="#"/></i>
                              <h4>English.Many</h4>
                              <span>normal distribution</span>
                           </div>
                        </div>
                        <div className="col-md-10">
                           <div className="test_box text_align_left">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
         <i className="fa fa-angle-left" aria-hidden="true"></i>
         <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
         <i className="fa fa-angle-right" aria-hidden="true"></i>
         <span className="sr-only">Next</span>
         </a>
      </div>
   </div>
   
   <footer>
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-md-7">
                  <div className="row">
                     <div className="col-lg-6 col-md-12">
                        <div className="hedingh3 text_align_left">
                           <h3>About</h3>
                           <p> Pro Psycho  is a online platform  designed to provide users with personalized and effective counseling services that are tailored to their unique needs.</p>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <div className="hedingh3 text_align_left">
                           <h3>Blog</h3>
                           <p>Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythin</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-5">
                  <div className="row">
                     <div className="col-lg-6 col-md-12">
                        <div className="hedingh3 text_align_left">
                           <h3>Menu</h3>
                           <ul className="menu_footer">
                              <li><a href="index.html">Home</a></li>
                              <li><a href="about.html">About</a></li>
                              <li><a href="service.html">Service</a></li>
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="contact.html">Contact us</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <div className="hedingh3  text_align_left">
                           <h3>Newsletter</h3>
                           <form id="colof" className="form_subscri">
                              <input className="newsl" placeholder="Email" type="text" name="Email" />
                              <button className="subsci_btn">Subscribe</button>
                           </form>
                           <ul className="top_infomation">
                              <li><i className="fa fa-phone" aria-hidden="true"></i>
                                 +01 1234567890
                              </li>
                              <li><i className="fa fa-envelope" aria-hidden="true"></i>
                                 <a href="Javascript:void(0)">group@gmail.com</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="follow text_align_center">
                        <h3>Follow Us</h3>
                        <ul className="social_icon ">
                           <li><a href="Javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                           <li><a href="Javascript:void(0)"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                           <li><a href="Javascript:void(0)"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                           <li><a href="Javascript:void(0)"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <p>© 2023 All Rights Reserved. Design by <a href="https://html.design/"> Group</a></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
  
   <script src="js/jquery.min.js"></script>
   <script src="js/bootstrap.bundle.min.js"></script>
   <script src="js/jquery-3.0.0.min.js"></script>
   <script src="js/owl.carousel.min.js"></script>
   <script src="js/bootstrap-datepicker.min.js"></script>
   <script src="js/custom.js"></script>
        </Fragment>
    )
}

export default Index;