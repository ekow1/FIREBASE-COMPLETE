import { v4 as uuid } from "uuid";
let initialState = {
	users: [
		{ name: "Ama", email: "ama@gmail.com", gen: "48", id: uuid() },
		{ name: "tony", email: "gmail.com", gen: "40", id: uuid() },
		{ name: "John", email: "jon@gmail.com", gen: "4", id: uuid() },
		{
			name: "kachi ",
			email: "kachigmail.com",
			gen: "90",
			id: uuid(),
		},
		{
			name: "new user redux",
			email: "usergmail.com",
			gen: "90pp",
			id: uuid(),
		},
	],
};

let usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_USER":
			return { ...state, users: [...state.users, action.payload] };
			case "DELETE_USER":
				const unDeletedUsers = state.users.filter((user)=>user.id!==action.payload)
				return {...state ,users: unDeletedUsers}
				case "UPDATE_USER":

				const updatedUser = state.users.map((user)=>{
					if(user.id===action.payload.userData.id){
						return action.payload.userData
					}
					else {return user}
				})
				return {...state , users:updatedUser}

		default:
			return state;
	}
};

export default usersReducer;
