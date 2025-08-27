import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("admin layout ", user);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user || !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header style={{ background: "#333", color: "#fff", padding: "10px 20px" }}>
        <nav>
          <ul style={{ display: "flex", gap: "15px", listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <NavLink
                to="/admin/users"
                style={({ isActive }) => ({ color: isActive ? "#4CAF50" : "#fff" })}
              >
                <FaUser /> Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contacts"
                style={({ isActive }) => ({ color: isActive ? "#4CAF50" : "#fff" })}
              >
                <FaMessage /> Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/services"
                style={({ isActive }) => ({ color: isActive ? "#4CAF50" : "#fff" })}
              >
                <FaRegListAlt /> Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({ color: isActive ? "#4CAF50" : "#fff" })}
              >
                <FaHome /> Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
};
