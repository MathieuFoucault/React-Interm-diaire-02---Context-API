import { useState } from "react";
import "./App.css";

import UserProfile from "./components/UserProfile";
import UserContext from "./components/UserContext";

function App() {
	const [isOnline, setIsOnline] = useState(false);
	const userContextValue = { isOnline, setIsOnline };
	return (
		<UserContext.Provider value={userContextValue}>
			<UserProfile />
		</UserContext.Provider>
	);
}

export default App;
