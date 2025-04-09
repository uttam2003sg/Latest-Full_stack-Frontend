import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>
                Welcome,
                {user ? ` ${user.username} to our website` : ` to our website`}
              </p>
              <h1>Why Choose Us? </h1>
              <p>
              Fresh & Quality Products – We handpick the best groceries to ensure top-notch freshness and quality.
              </p>
              <p>
              Affordable Prices – Enjoy competitive pricing, discounts, and exciting deals on your favorite products.
              </p>
              <p>
              Fast & Reliable Delivery – Get your groceries delivered quickly and hassle-free to your doorstep.
              </p>
              <p>
              Wide Selection – From farm-fresh produce to pantry staples and household essentials, we have it all.
              </p>
              <p>
              Excellent Customer Service – Our dedicated support team is always available to assist you.
              </p>
              <p>
              Easy & Secure Shopping – Shop with confidence using our safe and user-friendly platform.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/supermarket-7357419_1280.jpg"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
