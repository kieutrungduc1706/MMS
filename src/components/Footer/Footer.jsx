import React, { useRef, useState, useEffect } from "react";
import '../Footer/Footer.css';

const Footer = (props) => {
    return (
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify" style={{marginRight:200}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. distinctio pariatur natus consectetur,
            <br></br>
            Vero at, est blanditiis, velit aut fuga necessitatibus temporibus repellendus animi exercitationem  
            <br></br>
            laborum tenetur suscipit perspiciatis numquam doloremque distinctio pariatur natus consectetur,.</p>
          </div>

          <div class="col-xs-6 col-md-3" style={{marginRight:90}}>
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="">ReactJS</a></li>
              <li><a href="">UI Design</a></li>
              <li><a href="">NodeJS</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by DucKT
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    )
}


export default Footer;