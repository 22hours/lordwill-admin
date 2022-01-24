export const localStorageSetting = () => {
    const localData = localStorage.getItem("user");
    return localData ? JSON.parse(localData) : null;
};
