import cashewApi from './cashew-payments.api'

const getPublicContent = () => {
    return cashewApi.get("/contents");
};
export default {getPublicContent};
