export const selectUser = (user) => {
    return {
        type : "GET_USER",
        payload: user
    };
};