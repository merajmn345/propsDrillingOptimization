import { useContext } from "react";

function TopNav() {
  const profileContextValues = useContext(profileContext);
  console.log("values", profileContextValues);
  return (
    <div
      style={{ display: " flex", width: "100%", justifyContent: "flex-end" }}
    >
      {profileContextValues.username}
    </div>
  );
}
export default TopNav;
