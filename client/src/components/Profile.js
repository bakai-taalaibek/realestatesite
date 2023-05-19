import { useUser } from "../utilities/zustand"

export const Profile = () => {
	const { user } = useUser()
	return (
		<div>
			{console.log(user)}
		</div>
	)
}