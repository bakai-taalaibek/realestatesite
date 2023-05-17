import { create } from "zustand";

export const useUser = create((set) => ({
	user: null,
	setUser: (newUser) => {
		set({ user: newUser })
	},
}));

export const useExitButton = create((set) => ({
	exitButtonBool: false,
	setExitButtonBool: (newState) => {
		set({ exitButtonBool: newState})
	}
}))

//export const baseUrl = ''
export const baseUrl = 'http://localhost:8080'