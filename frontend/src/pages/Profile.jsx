import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import api from "../services/api";
import { toast } from "react-toastify";
import "../styles/profile.css";

function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {

    try {

      const res = await api.get("/auth/profile");

      setUser(res.data.user);

    } catch (error) {

      console.log(error);

      toast.error("Failed to Load Profile");

    }

  };

  if (!user) {

    return (
      <DashboardLayout>
        <h2>Loading...</h2>
      </DashboardLayout>
    );

  }

  return (

    <DashboardLayout>

      <div className="profile-card">

        <img
          src={
            user.image
              ? `http://localhost:5000/uploads/${user.image}`
              : "https://via.placeholder.com/150"
          }
          alt="Profile"
        />

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <p>
          <strong>Role:</strong> {user.role}
        </p>

      </div>

    </DashboardLayout>

  );

}

export default Profile;