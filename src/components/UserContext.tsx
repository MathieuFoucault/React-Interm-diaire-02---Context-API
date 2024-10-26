import { createContext } from "react";

type UserContextType = {
	isOnline: boolean;
	setIsOnline: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
