import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Our Grocery Store Services</h1>
        <p className="sub-heading">
          We offer a variety of services to make your shopping easier and more convenient.
        </p>
      </div>

      <div className="container grid grid-three-cols">
        {services && services.length > 0 ? (
          services.map((curElem, index) => {
            const { id, price, description, provider, service, image } = curElem;

            return (
              <div className="card" key={id || index}>
                <div className="card-img">
                  <img
                    src={image || "/images/grocery-default.png"}
                    alt={service}
                    width="200"
                  />
                </div>

                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p><strong>Provider:</strong> {provider}</p>
                    <p><strong>Price:</strong> {price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-services">No services available at the moment.</p>
        )}
      </div>
    </section>
  );
};
