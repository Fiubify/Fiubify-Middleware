const axios = require('axios');

class ProtectedUrl {
    static protectedEndpointByMethod(endpointConfig, validateEndpoint) {
        const callback = async (proxyReq, req, res) => {
            const reqMethod = req.method;
            const token = req.body.token;

            if(!endpointConfig[reqMethod]) {
                return;
            }

            const response = await axios.post(validateEndpoint, {
                    token: token,
                    role: endpointConfig[reqMethod]
            });


            if(response.status !== 200) {
                res.status(response.status).send(response.data);
            } else {
                delete req.body.token;
            }
        }

        return callback;
    }
}

module.exports = ProtectedUrl;