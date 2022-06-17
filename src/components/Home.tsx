import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BannerImage } from "../interfaces";


export default function Home(): JSX.Element {

  const [bannerImages, setBannerImages] = useState<BannerImage[]>([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const apiImages = await axios.get("https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details");
        if (apiImages.data?.Details) {
          setBannerImages(apiImages.data.Details)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getImages();
  }, [])
  return (
    <div id="home">Home
      <div className="image-banner">
        <div className="image-banner-images">
          {bannerImages.length > 0 &&
            bannerImages.map(bannerImage => (
              <div key={bannerImage.title}>
                <img src={bannerImage.url} alt={bannerImage.title} />
              </div>
            ))}
        </div>
        <div className="image-banner-text">
          <h1>Lorem ipsum dolor</h1>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          <Link to="/contact-us">
            <button className="contact">Contact us</button>
          </Link>
        </div>
      </div>

      <div className="learn-more">
        <div className="learn-more-text">
          <h1>Sed non nunc non nibh luctus condimentum</h1>
          <p>In eu elementum orci. Praesent eu nunc a lacus aliquam laoreet sit amet ut metus. Nam facilisis est libero, vitae ullamcorper orci fermentum faucibus. Vivamus faucibus suscipit lorem. Ut ac dapibus magna. Fusce porta ullamcorper quam vel congue. Nullam quis nulla est. Nullam est erat, imperdiet quis egestas vel, lobortis quis odio. Phasellus maximus semper tempor. Etiam rutrum rhoncus mauris sit amet aliquam.</p>
          <li>Aliquam mattis lacus non dui fermentum blandit.</li>
          <li>Interdum et malesuada fames ac ante ipsum primis in faucibus.</li>
          <li>Duis ornare justo quis aliquet dictum.</li>
          <li>Etiam viverra suscipit dolor sit amet volutpat.</li>
          <Link to="/about-us">
            <button className="learn-more">Learn more</button>
          </Link>
        </div>
        <div className="learn-more-image">
          <img src="/assets/Resources/learn-more-office" alt="office"></img>
        </div>
      </div>
    </div>
  );
}
