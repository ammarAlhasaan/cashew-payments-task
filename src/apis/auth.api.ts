import cashewApi from './cashew-payments.api'


const register = (name: string, email: string, password: string) => {
    return cashewApi.post("/users", {
        name,
        email,
        password,
        token: `${name}Token`
    });
};

const login = (email: string, password: string) => {
    return cashewApi
        .get("/users", {
            params: {
                email,
                password,
            }
        })
        .then((response) => {
            if (response.data.length > 0 && response.data[0].token) {
                localStorage.setItem("user", JSON.stringify(response.data[0]));
                return response.data;
            } else {
            }


        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};
