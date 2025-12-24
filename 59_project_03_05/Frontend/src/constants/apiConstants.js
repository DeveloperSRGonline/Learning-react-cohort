export const API_BASE_URL = "http://localhost:3000"; // Assuming default json-server port
export const ENDPOINTS = {
    PRODUCTS: "/products",
    USERS: "/users",
    CART: "/cart"
};

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    CART: "/cart",
    PROFILE: "/profile",
    ADMIN: "/admin",
    ADMIN_CREATE: "/admin/create-product",
    ADMIN_UPDATE: (id) => `/admin/update-product/${id}`
};

export const UI_STRINGS = {
    APP_NAME: "Premium Store",
    LOADER_TEXT: "Loading Excellence...",
    ERROR_LOGIN_REQUIRED: "Please login to add items to cart",
    CONFIRM_REMOVE: "Are you sure you want to remove this item?"
};
