
export const getToken = () => localStorage.getItem("token");
export const isLogged = () => !!localStorage.getItem("token");