import { useContext, useState } from "react";
import ProfileContext from "../contexts/ProfileContext";

function Profile(props) {
  const [updatedUsername, setUpdatedusername] = useState("");
  const profileContextValues = useContext(ProfileContext);
  return (
    <div style={{ marginTop: 30 }}>
      <input
        type="text"
        placeholder="username"
        value={updatedUsername}
        onChange={(e) => {
          setUpdatedusername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          profileContextValues.setUsername(updatedUsername);
        }}
      >
        Update Username
      </button>
    </div>
  );
}
export default Profile;
