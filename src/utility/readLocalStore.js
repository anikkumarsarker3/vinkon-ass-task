// Utility functions MUST NOT run on server
const isBrowser = typeof window !== "undefined";

const getProduct = () => {
    if (!isBrowser) return []; // prevent server crash

    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
};

const addProduct = (id) => {
    if (!isBrowser) return false;

    const list = getProduct();
    if (list.includes(id)) {
        return true; // already exists
    }

    const updated = [...list, id];
    localStorage.setItem("wishlist", JSON.stringify(updated));
    return false;
};

const removeProduct = (id) => {
    if (!isBrowser) return;

    const list = getProduct().filter(item => Number(item) !== Number(id));
    localStorage.setItem("wishlist", JSON.stringify(list));
};

export { getProduct, addProduct, removeProduct };
