import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
    image: "",
  });

  const { authorizationToken, API } = useAuth();

  // Fetch all services
  const fetchServices = async () => {
    try {
      const response = await fetch(`${API}/api/admin/services`, {
        headers: { Authorization: authorizationToken },
      });
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/admin/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Service Added Successfully");
        setFormData({ service: "", description: "", price: "", provider: "", image: "" });
        fetchServices();
      } else {
        toast.error("Failed to Add Service");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/services/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: authorizationToken },
      });
      if (response.ok) {
        toast.success("Service Deleted Successfully");
        fetchServices();
      } else {
        toast.error("Failed to Delete Service");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Admin Services Panel</h1>
      </div>

      <div className="container grid grid-two-cols">
        {/* Create Service Form */}
        <section className="section-form">
          <form onSubmit={handleCreate}>
            <div>
              <label>Service</label>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label>Provider</label>
              <input
                type="text"
                name="provider"
                value={formData.provider}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label>Image URL (optional)</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInput}
              />
            </div>
            <button type="submit">Add Service</button>
          </form>
        </section>

        {/* Services List */}
        <section className="section-list">
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <th>Service</th>
                <th>Description</th>
                <th>Price</th>
                <th>Provider</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s._id}>
                  <td>{s.service}</td>
                  <td>{s.description}</td>
                  <td>{s.price}</td>
                  <td>{s.provider}</td>
                  <td>{s.image ? <img src={s.image} alt={s.service} width="50" /> : "N/A"}</td>
                  <td>
                    <Link to={`/admin/services/${s._id}/edit`} style={{ marginRight: "10px" }}>
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(s._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </section>
  );
};
