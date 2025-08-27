import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminServiceUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authorizationToken, API } = useAuth();

  const [data, setData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
    image: "",
  });

  // Fetch single service
  const getSingleService = async () => {
    try {
      const response = await fetch(`${API}/api/admin/services/${id}`, {
        headers: { Authorization: authorizationToken },
      });
      const serviceData = await response.json();
      setData(serviceData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleService();
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/admin/services/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Service Updated Successfully");
        navigate("/admin/services");
      } else {
        toast.error("Failed to Update Service");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Edit Service</h1>
      </div>
      <div className="container grid grid-one-col">
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Service</label>
              <input type="text" name="service" value={data.service} onChange={handleInput} required />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={data.description}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label>Price</label>
              <input type="text" name="price" value={data.price} onChange={handleInput} required />
            </div>
            <div>
              <label>Provider</label>
              <input type="text" name="provider" value={data.provider} onChange={handleInput} required />
            </div>
            <div>
              <label>Image URL</label>
              <input type="text" name="image" value={data.image} onChange={handleInput} />
            </div>
            <button type="submit">Update Service</button>
          </form>
        </section>
      </div>
    </section>
  );
};
