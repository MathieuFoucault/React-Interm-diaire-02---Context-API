import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
	const context = useContext(UserContext);

	if (!context) {
		return null;
	}

	const { isOnline, setIsOnline } = context;
	const toggleUserStatus = () => {
		setIsOnline(!isOnline);
	};

	return (
		<>
			<p>User is {isOnline ? "En ligne" : "Hors ligne"}</p>
			<button type="button" onClick={toggleUserStatus}>
				Click to change user status
			</button>
		</>
	);
}

export default UserProfile;
