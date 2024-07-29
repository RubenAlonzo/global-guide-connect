export const isAuthenticated = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.isLoggedIn);
};
