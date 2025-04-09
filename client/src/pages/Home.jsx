import { Analytics } from "../components/Analytics";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Best for health & Taste</p>
              <h1>Welcome to Gupta Store</h1>
              <p>
                Welcome to Gupta Store, your go-to destination for everyday
                essentials at unbeatable prices!. At Gupta Store, we take pride
                in offering high-quality products at the best prices, all under
                one roof!
              </p>
              <div className="btn btn-group">
                <Link to="/contact">
                  <button className="btn">connect now</button>
                </Link>
                <Link to="/service">
                  <button className="btn secondary-btn">learn more</button>
                </Link>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/grocery-1232944_1280.jpg"
                alt="grocery"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/woman-8656632_1280.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
            Welcome to Gupta Store, your one-stop destination for fresh produce, pantry essentials, and everyday groceries at unbeatable prices. We take pride in offering high-quality products, sourced responsibly, to bring you the best in freshness and convenience. Shop with us today and experience seamless grocery shopping with fast delivery and excellent customer service!
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
