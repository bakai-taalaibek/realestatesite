import { useUser } from "../utilities/zustand";
import adService from "../services/ads";
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const useAuthCheck = (path) => {
  const { setUser } = useUser();
  const navigate = useNavigate()
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const storedUser = JSON.parse(loggedUserJSON);
      setUser(storedUser);
      adService.setToken(storedUser.token);
    } else {
      navigate(path)
    }
  }, []);
}