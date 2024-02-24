import React from 'react'
import image from './img.avif'
import style from './About.module.css';

export default function About() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={image} className={`d-block w-100 ${style.set}`} alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h4 className={style.display}>Welcome to News API, your go-to source for the latest news updates from around the world. We strive to provide you with a seamless and informative experience, tailoring news content based on categories and countries that matter to you.</h4>
            <h1 className={style.middle}>Our Mission</h1>
            <h4 className={style.last}>At News API, our mission is to deliver accurate and up-to-date news content that empowers our users to stay informed. We understand the importance of diverse perspectives, and our platform offers news coverage across a variety of categories and countries to cater to a global audience.</h4>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={image} className={`d-block w-100 ${style.set}`} alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h1 className={style.middle}>Features</h1>
            <h4 className={style.display}>Explore the following features that make News API unique:</h4>
            <h4 className={style.last}><i className={style.middle}>Category-based News:</i> Choose from a range of categories such as Technology, Business, Health, Entertainment, and more to personalize your news feed.</h4>
            <h4 className={style.last}><i className={style.middle}>Country-specific News:</i> Stay connected with events in your country or explore international news by selecting your preferred country.</h4>
            <h4 className={style.last}><i className={style.middle}>Real-time Updates:</i> Our platform ensures that you receive real-time updates, keeping you informed about the latest happenings as they unfold.</h4>
          </div>
        </div>

        <div className="carousel-item">
          <img src={image} className={`d-block w-100 ${style.set}`} alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          <h1 className={style.middle}>Contact Us</h1>
            <h4 className={style.display}>We value your feedback and suggestions. If you have any questions, concerns, or would like to get in touch with us, please feel free to contact our support team at <br/><i className={style.last}> Email : pratham.singhalmtr@gmail.com.</i>
</h4>
            <h4 className={style.diff}>Thank you for choosing News API as your trusted news source. Stay informed, stay connected!
</h4>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
