import { createContext, useState } from "react";
import ProfileContext from "../contexts/ProfileContext";
import Page from "./Page";
import TopNav from "./TopNav";

function MainContent() {
  const [username, setUsername] = useState("Meraj");
  const ProfileContext = createContext();
  // Consumner should be wrapped in ContextProvider
  return (
    <ProfileContext.Provider
      value={{
        username: username,
        setUsername: setUsername
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TopNav username={username} />
        <Page username={username} setUsername={setUsername} />
      </div>
    </ProfileContext.Provider>
  );
}
export default MainContent;
