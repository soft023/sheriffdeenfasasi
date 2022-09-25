<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Sheriffdeen A Fasasi</title>

<meta name="description" content="Sheriffdeen Adigun Fasasi Personal Website">
<meta name="keywords" content="Fasasi, Sheriff, Sheriffdeen, Adigun, Iwo, Osun State, Web Developer, Laravel Developer, Software, Business Automation, Photoshop">
<meta name="author" content="Fasasi Sheriffdeen">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="apple-touch-icon" href="apple-touch-icon.png">

<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/w3.css">
<link rel="stylesheet" href="css/bootstrap-theme.min.css">
<link rel="stylesheet" href="css/fontAwesome.css">
<link rel="stylesheet" href="css/light-box.css">
<link rel="stylesheet" href="css/templatemo-main.css">
<link href="img/barlogo.png" rel="icon">

<script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
</head>

<body>

<div class="sequence">

<div class="seq-preloader">
<svg width="39" height="16" viewBox="0 0 39 16" xmlns="http://www.w3.org/2000/svg" class="seq-preload-indicator"><g fill="#F96D38"><path class="seq-preload-circle seq-preload-circle-1" d="M3.999 12.012c2.209 0 3.999-1.791 3.999-3.999s-1.79-3.999-3.999-3.999-3.999 1.791-3.999 3.999 1.79 3.999 3.999 3.999z"/><path class="seq-preload-circle seq-preload-circle-2" d="M15.996 13.468c3.018 0 5.465-2.447 5.465-5.466 0-3.018-2.447-5.465-5.465-5.465-3.019 0-5.466 2.447-5.466 5.465 0 3.019 2.447 5.466 5.466 5.466z"/><path class="seq-preload-circle seq-preload-circle-3" d="M31.322 15.334c4.049 0 7.332-3.282 7.332-7.332 0-4.049-3.282-7.332-7.332-7.332s-7.332 3.283-7.332 7.332c0 4.05 3.283 7.332 7.332 7.332z"/></g></svg>
</div>

</div>


<nav>
<div class="logo">
<img  class="w3-round w3-hover-sepia" src="img/logo.png" alt="">
</div>
<div class="mini-logo ">
<img src="img/mini_logo.png" alt="">
</div>
<ul>
<li><a class="w3-hover-yellow w3-round" href="#1"><i class="fa fa-home w3-text-yellow"></i> <em>Home</em></a></li>
<li><a class="w3-hover-yellow w3-round" href="#2"><i class="fa fa-user w3-text-yellow"></i> <em>About</em></a></li>
<li><a class="w3-hover-yellow w3-round" href="#3"><i class="fa fa-book w3-text-yellow"></i> <em>Experience</em></a></li>
<li><a class="w3-hover-yellow w3-round" href="#4"><i class="fa fa-institution w3-text-yellow"></i> <em>Projects & Skills</em></a></li>
<li><a class="w3-hover-yellow w3-round" href="#5"><i class="fa fa-envelope w3-text-yellow"></i> <em>Contact</em></a></li>
</ul>
</nav>

<div class="slides">
<div class="slide" id="1">
<div class="content first-content">
<div class="container-fluid">
<div class="col-md-3">
{{-- <div class="author-image"><img src="img/author_image.png" alt=""></div> --}}
<div class="author-image "><img class="w3-hover-sepia" src="img/mypic.png" alt=""></div>
</div>
<div class="col-md-9">

        @if (Session::has('successmsg'))
        <div class="alert alert-success">{{ Session::get('successmsg') }}</div>
        @endif

<h2 class="w3-text-yellow w3-cursive w3-hover-zoom">SHERIFFDEEN, ADIGUN FASASI</h2>
<p>I'm an experienced <em> software engineer</em>, who constantly seeks out <em>innovative solutions</em> to everyday problems. </em></p>
<div class="main-btn"><a class="w3-round w3-button w3-yellow w3-text-black" href="#2">Read More</a></div>
<div class="fb-btn"><a class="w3-round w3-button w3-yellow w3-text-black " href="https://www.linkedin.com/in/sheriffdeen-fasasi-244500158/" target="_blank">My Linkedin Profile</a></div>
</div>
</div>
</div>
</div>
<div class="slide" id="2">
<div class="content second-content">
<div class="container-fluid">
<div class="col-md-6">
<div class="left-content ">
<h2>About Us</h2>
<p>
Hi, I graduated from Ladoke Akintola University of Technology in 2013 with a degree in Computer Science(Btech). My interests are in web development, using PHP with Laravel, Web designing using HTML,CSS,AJAX, JQUERY, AND BOOTSTRAP.</p>
<p>
I have worked on many web projects, among them are various Financial Management Systems, Staff Management System, House Rent Management, Media House Management, etc. I have also built various static andriod app for loan computation, staff guide, and fixed deposit calculator using flutter.
<p>
I am very confident that I be very useful in any organisation that appreciate Talent, Character and Ambition.
</p>
<p>
Aside the above, it will also interest you that I am a good team player and love learning new things and relearning old things.
</p>
<div class="main-btn" ><a class="w3- round w3-button w3-yellow w3-text-black " href="#3">Read More</a></div>
</div>
</div>
<div class="col-md-6">
<div class="right-image">
<img src="img/about_image.jpg" alt="">
</div>
</div>
</div>
</div>
</div>
<div class="slide" id="3">
<div class="content third-content">
<div class="container-fluid">
<div class="col-md-12">
<div class="row">
<div class="first-section">
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-content">
<h2> Fidelity Bank Plc </h2><br>
<label class="w3-text-white"><b>Role</b>: Regulatory Reporting | IT Compliance (2022 - Till Date)</label>
<p>- Spooling of various report from oracle Database and Microsoft SQL Server to all the required regulatory bodies.<br>
-  Compliance risk assessment on all the bank process, system and activities.<br>
-  Automation of some of the compliance process using microsoft power app, power automate and power BI for creating dashboards.</p>
<div class="main-btn"><a class=" w3-round w3-button w3-yellow" href="https://www.linkedin.com/in/sheriffdeen-fasasi-244500158/" target="_blank">More Details</a></div>
</div>
</div>
<div class="col-md-6">
<div class="left-content">
    <h2> BGMFB </h2><br>
    <label class="w3-text-white"><b>Role</b>: Software Engineer | IT Officer (2019 - 2022)</label>
     <p>- I built various web applications to support the bank and its other investments including the banks main website(www.balogungambarimfb.com).<br>
        - I did graphics for banners, flyers, websites, and social media pages using photoshop.<br>
        {{-- - I monitored and maintained the bank computer systems, installs, and configures hardware and software.<br> --}}
        - I profile staff on different application of the bank and training staff.
  </p>
<div  class="main-btn"><a class=" w3-round w3-button w3-yellow" href="https://www.linkedin.com/in/sheriffdeen-fasasi-244500158/" target="_blank">More Details</a></div>
</div>
</div>
</div>
</div>
</div>
<div class="first-section">
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="left-content">
    <h2>Usability Consulting Limited </h2>
    <label class="w3-text-white"><b>Role</b>: Web Developer | Studio Manager (2018 - 2019)</label>
     <p>- Recommended, planned, and implemented web application development.<br>
        - Staff recruitment and training.  <br>
        - I created operation policies and ethics with the CEO approval.</p>
    <div class="main-btn"><a class=" w3-round w3-button w3-yellow" href="https://www.linkedin.com/in/sheriffdeen-fasasi-244500158/" target="_blank">More Details</a></div>
</div>
</div>
<div class="col-md-6">
<div class="left-content">
    <h2>Prized Consulting Limited  </h2>
    <label class="w3-text-white"><b>Role</b>: Web Developer (2017 - 2018)</label>
     <p>- Helped in preparation and documentation of program requirements and specifications.<br>
        - Built a price checker application. </p>
    <div class="main-btn"><a class=" w3-round w3-button w3-yellow"  href="https://www.linkedin.com/in/sheriffdeen-fasasi-244500158/" target="_blank">More Details</a></div>
</div>
</div>
</div>
</div>
</div>

<div class="first-section">
    <div class="container-fluid">
    <div class="row">
    <div class="col-md-6">
    <div class="left-content">
        <h2>Regent Microfinance Bank </h2>
        <label class="w3-text-white"><b>Role</b>: Ebanking Officer | IT Support (2016 - 2017)</label>
         <p>- Made Joint calls with relationship officers for presentation and sale of all e-channels products to customers.<br>
            - Resolved and coordinated disputes on cards, ussd, mobile app, POS, and ATM.  </p>
        <div class="main-btn"><a class=" w3-round w3-button w3-yellow" href="https://www.linkedin.com/in/sheriffdeen-fasasi-244500158/" target="_blank">More Details</a></div>
    </div>
    </div>
    <div class="col-md-6">
    <div class="left-content">
        <h2>Regent Microfinance Bank </h2>
        <label class="w3-text-white"><b>Role</b>: Teller | IT Support (2016 - 2016)</label>
         <p>- Received cash, paid cash, posted, and recorded transactions.<br>
            - Attended to issues relating to customer account.  <br>
            - Solved network problem, mail issues, and guide staff on the bank software usage.</p>
        <div class="main-btn"><a class=" w3-round w3-button w3-yellow" href="https://www.linkedin.com/in/sheriffdeen-fasasi-244500158/" target="_blank">More Details</a></div>
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
<div class="slide" id="4">
<div class="content fourth-content">
<div class="container-fluid">
<div class="row">
<div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/first_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
<b><span class="w3-badge w3-yellow">01 </span> Media House Management(Web)</b>
<p><b>Skills: </b> HTML, CSS, BOOTSTRAP, PHP / LARAVEL, JS & AJAX</p>
<p><b>Purpose: </b>For managing a radio station financial and non financial records.</p>
</div>
</div></a>
<div class="image">
<img src="img/first_item.jpg">
</div>
</div>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/second_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
    <b><span class="w3-badge w3-yellow">02 </span> Staff Management App(Web)</b>
    <p><b>Skills: </b> HTML, CSS, BOOTSTRAP, PHP / LARAVEL, JS & AJAX</p>
    <p><b>Purpose: </b>For managing staff record and appraisal.</p>
</div>
</div></a>
<div class="image">
<img src="img/second_item.jpg">
</div>
</div>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/third_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
    <b><span class="w3-badge w3-yellow">03 </span> Daily Contribution App(Web)</b>
    <p><b>Skills: </b> HTML, CSS, BOOTSTRAP, PHP / LARAVEL, JS & AJAX</p>
    <p><b>Purpose: </b>For managing daily money contribution.</p>
</div>
</div></a>
<div class="image">
<img src="img/third_item.jpg">
</div>
</div>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/fourth_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
    <b><span class="w3-badge w3-yellow">04 </span>Consumer Loan App(Web)</b>
    <p><b>Skills: </b> HTML, CSS, BOOTSTRAP, PHP / LARAVEL, JS & AJAX</p>
    <p><b>Purpose: </b>For consumen loan request and management</p>
</div>
</div></a>
<div class="image">
<img src="img/fourth_item.jpg">
</div>
</div>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/fifth_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
    <b><span class="w3-badge w3-yellow">05 </span> Ileowo App(Web)</b>
    <p><b>Skills: </b> HTML, CSS, BOOTSTRAP, PHP / LARAVEL, JS & AJAX</p>
    <p><b>Purpose: </b> For managing customer deposit and loan.</p>
</div>
</div></a>
<div class="image">
<img src="img/fifth_item.jpg">
</div>
</div>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/sixth_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
    <b><span class="w3-badge w3-yellow">06 </span> BGMFB Website</b>
    <p><b>Skills: </b> HTML, CSS, BOOTSTRAP, PHP / LARAVEL, JS & AJAX</p>
    <p><b>Purpose: </b>For Displaying necessary info of the bank.</p>
</div>
</div></a>
<div class="image">
<img src="img/sixth_item.jpg">
</div>
</div>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/seventh_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
    <b><span class="w3-badge w3-yellow">07 </span>Corporative App(Web)</b>
    <p><b>Skills: </b> HTML, CSS, BOOTSTRAP, PHP / LARAVEL, JS & AJAX</p>
    <p><b>Purpose: </b>Automation of a corporative saving, loan investment and other investment</p>
</div>
</div></a>
<div class="image">
<img src="img/seventh_item.jpg">
</div>
</div>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/eight_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
    <b><span class="w3-badge w3-yellow">08 </span> Staff Guide(Android)</b>
    <p><b>Skills: </b> Flutter </p>
    <p><b>Purpose: </b>For calculatating all the bank's loan product and FD.</p>
</div>
</div></a>
<div class="image">
<img src="img/eight_item.jpg">
</div>
</div>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/ninth_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
    <b><span class="w3-badge w3-yellow">09 </span> Loan Calculator(Desktop)</b>
    <p><b>Skills: </b> Csharp</p>
    <p><b>Purpose: </b>For calculatating all the bank's loan product and FD</p>
</div>
</div></a>
<div class="image">
<img src="img/ninth_item.jpg">
</div>
</div>
</div>
</div>
{{-- <div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/fifth_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
<h2>Number Ten</h2>
<p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
</div>
</div></a>
<div class="image">
<img src="img/fifth_item.jpg">
</div>
</div>
</div>
</div> --}}
{{-- <div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/first_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
<h2>Eleventh Item</h2>
<p>Cras varius dolor et augue fringilla, eu commodo sapien iaculis.</p>
</div>
</div></a>
<div class="image">
<img src="img/first_item.jpg">
</div>
</div>
</div>
</div> --}}
{{-- <div class="col-md-4 col-sm-6">
<div class="item">
<div class="thumb">
<a href="img/second_big_item.jpg" data-lightbox="image-1"><div class="hover-effect">
<div class="hover-content">
<h2>Twelvth Item</h2>
<p>Etiam tincidunt magna ex, sit amet lobortis felis bibendum id.</p>
</div>
</div></a>
<div class="image">
<img src="img/second_item.jpg">
</div>
</div>
</div>
</div> --}}
</div>
</div>
</div>
</div>
<div class="slide" id="5">
<div class="content fifth-content">
<div class="container-fluid">
<div class="col-md-6">
<div id="map">
<!-- How to change your own map point
1. Go to Google Maps
2. Click on your location point
3. Click "Share" and choose "Embed map" tab
4. Copy only URL and paste it within the src="" field below
-->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2796813114123!2d3.3804070147180547!3d6.486222995307886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c81309535eb%3A0x7e82a0729bbdfc5!2s18%20Abeokuta%20St%2C%20Adekunle%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1664056967200!5m2!1sen!2sng" width="100%" height="500px" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
</div>
<div class="col-md-6">
<form id="contact" action="store" method="post">
    @csrf
<div class="row">
<div class="col-md-12">
<fieldset>
<input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required="">
</fieldset>
</div>
<div class="col-md-12">
<fieldset>
<input name="email" type="email" class="form-control" id="email" placeholder="Your email..." required="">
</fieldset>
</div>
<div class="col-md-12">
<fieldset>
<input name="subject" type="text" class="form-control" id="subject" placeholder="Subject..." required="">
</fieldset>
</div>
<div class="col-md-12">
<fieldset>
<textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
</fieldset>
</div>
<div class="col-md-12">
<fieldset>
<button class=" w3-round w3-button w3-yellow" type="submit" id="form-submit" class="btn">Send Now</button>
</fieldset>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<div class="footer">
<div class="content">
<p>Copyright &copy; 2022  <a href="http://www.sheriffdeenfasasi.com">SFA</a>
</div>
</div>


<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

<script src="js/vendor/bootstrap.min.js"></script>

<script src="js/datepicker.js"></script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function() {



// navigation click actions
$('.scroll-link').on('click', function(event){
event.preventDefault();
var sectionID = $(this).attr("data-id");
scrollToID('#' + sectionID, 750);
});
// scroll to top action
$('.scroll-top').on('click', function(event) {
event.preventDefault();
$('html, body').animate({scrollTop:0}, 'slow');
});
// mobile nav toggle
$('#nav-toggle').on('click', function (event) {
event.preventDefault();
$('#main-nav').toggleClass("open");
});
});
// scroll function
function scrollToID(id, speed){
var offSet = 0;
var targetOffset = $(id).offset().top - offSet;
var mainNav = $('#main-nav');
$('html,body').animate({scrollTop:targetOffset}, speed);
if (mainNav.hasClass("open")) {
mainNav.css("height", "1px").removeClass("in").addClass("collapse");
mainNav.removeClass("open");
}
}
if (typeof console === "undefined") {
console = {
log: function() { }
};
}
</script>
</body>
</html>
