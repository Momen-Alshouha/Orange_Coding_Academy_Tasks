<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Netflix</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

    <style>
            @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700);
    body {
        font-family:Rubik,sans-serif;
        position:relative;
        font-weight:400;
        font-size:15px
    }
    ul {
        padding:0;
        margin:0
    }
    li {
    list-style:none
    }
        a:focus,a:hover {
        text-decoration:none;
        -webkit-transition:.3s ease;
        -o-transition:.3s ease;
        transition:.3s ease
    }
    a:focus {
    outline:0
    }
    img {
    max-width:100%
    }
    p {
        font-size:16px;
        line-height:30px;
        color:#898b96;
        font-weight:300
    }
    h4 {
        font-family:Rubik,sans-serif;
        margin:0;
        font-weight:400;
        padding:0;
        color:#363940
    }
    a {
    color:#5867dd
    }
    .no-padding {
    padding:0!important
    }
    .go_top {
        line-height:40px;
        cursor:pointer;
        width:40px;
        background:#5867dd;
        color:#fff;
        position:fixed;
        -webkit-box-shadow:0 4px 4px rgba(0,0,0,.1);
        box-shadow:0 4px 4px rgba(0,0,0,.1);
        -webkit-border-radius:50%;
        border-radius:50%;
        right:-webkit-calc((100% - 1140px)/ 2);
        right:calc((100% - 1140px)/ 2);
        z-index:111;
        bottom:80px;
        text-align:center
    }
    .go_top span {
    display:inline-block
    }
    .footer-big {
    padding:105px 0 65px 0
    }
    .footer-big .footer-widget {
    margin-bottom:40px
    }
    .footer--light {
    background:#e7e8ed
    }
    .footer-big .footer-menu ul li a,.footer-big p,.footer-big ul li {
    color:#898b96
    }
    .footer-menu {
    padding-left:48px
    }
    .footer-menu ul li a {
        font-size:15px;
        line-height:32px;
        -webkit-transition:.3s;
        -o-transition:.3s;
        transition:.3s
    }
    .footer-menu ul li a:hover {
    color:#5867dd
    }
    .footer-menu--1 {
    width:100%
    }
    .footer-widget-title {
    line-height:42px;
    margin-bottom:10px;
    font-size:18px
    }
    .mini-footer {
    background:#192027;
    text-align:center;
    padding:32px 0
    }
    .mini-footer p {
        margin:0;
        line-height:26px;
        font-size:15px;
        color:#999
    }
    .mini-footer p a {
    color:#5867dd
    }
    .mini-footer p a:hover {
    color:#34bfa3
    }
    .widget-about img {
    display:block;
    margin-bottom:30px
    }
    .widget-about p {
    font-weight:400
    }
    .widget-about .contact-details {
    margin:30px 0 0 0
    }
    .widget-about .contact-details li {
    margin-bottom:10px
    }
    .widget-about .contact-details li:last-child {
    margin-bottom:0
    }
    .widget-about .contact-details li span {
    padding-right:12px
    }
    .widget-about .contact-details li a {
    color:#5867dd
    }
    @media (max-width:991px) {
    .footer-menu {
    padding-left:0
    }
    }

   

    </style>

</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="allmovies">NETFLIX</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="{{route('movies.index')}}">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="create">Add Movie</a>
            </li>

          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    @yield('content')

    <footer class="footer-area footer--light">
        <div class="footer-big">
          <!-- start .container -->
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-12">
                <div class="footer-widget">
                  <div class="widget-about">
                    <img src="http://placehold.it/250x80" alt="" class="img-fluid">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vel doloremque eius quibusdam facilis minus dolorem cupiditate modi!</p>
                    <ul class="contact-details">
                     
                      <li>
                        <span class="icon-envelope-open"></span>
                        <a href="mailto:support@aazztech.com">support@aazztech.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Ends: .footer-widget -->
              </div>
              <!-- end /.col-md-4 -->
              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu footer-menu--1">
                    <h4 class="footer-widget-title">Popular Category</h4>
                    <ul>
                      <li>
                        <a href="#">Wordpress</a>
                      </li>
                      <li>
                        <a href="#">Plugins</a>
                      </li>
                      <li>
                        <a href="#">Joomla Template</a>
                      </li>
                      <li>
                        <a href="#">Admin Template</a>
                      </li>
                      <li>
                        <a href="#">HTML Template</a>
                      </li>
                    </ul>
                  </div>
                  <!-- end /.footer-menu -->
                </div>
                <!-- Ends: .footer-widget -->
              </div>
              <!-- end /.col-md-3 -->
      
              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu">
                    <h4 class="footer-widget-title">Our Company</h4>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">How It Works</a>
                      </li>
                      <li>
                        <a href="#">Affiliates</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Plan &amp; Pricing</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <!-- end /.footer-menu -->
                </div>
                <!-- Ends: .footer-widget -->
              </div>
              <!-- end /.col-lg-3 -->
      
              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu no-padding">
                    <h4 class="footer-widget-title">Help Support</h4>
                    <ul>
                      <li>
                        <a href="#">Support Forum</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Support Policy</a>
                      </li>
                      <li>
                        <a href="#">Refund Policy</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Buyers Faq</a>
                      </li>
                      <li>
                        <a href="#">Sellers Faq</a>
                      </li>
                    </ul>
                  </div>
                  <!-- end /.footer-menu -->
                </div>
                <!-- Ends: .footer-widget -->
              </div>
              <!-- Ends: .col-lg-3 -->
      
            </div>
            <!-- end /.row -->
          </div>
          <!-- end /.container -->
        </div>
        <!-- end /.footer-big -->
      
        <div class="mini-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="copyright-text">
                  <p>© 2018
                    <a href="#">DigiPro</a>. All rights reserved. Created by
                    <a href="#">AazzTech</a>
                  </p>
                </div>
      
                <div class="go_top">
                  <span class="icon-arrow-up"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</body>
</html>