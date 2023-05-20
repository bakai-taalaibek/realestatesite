import { useUser } from "../utilities/zustand";
import adService from "../services/ads";
import { useEffect } from 'react'

export const useAuthCheck = () => {
  const { setUser } = useUser();
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const storedUser = JSON.parse(loggedUserJSON);
      setUser(storedUser);
      adService.setToken(storedUser.token);
    }
  }, []);
}