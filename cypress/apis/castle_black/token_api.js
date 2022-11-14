module.exports = {
    postToken: function (authorizeCode) {
        return cy.request({
            method: 'POST',
            url: `https://castle-black-edge.stsh.io/api/v1/token?client_id=2024400d-b3ad-4cfd-b20b-23a18cde27db&redirect_uri=https://app-edge.stash.com/authorize&grant_type=authorization_code&code=${authorizeCode}&Content-Type=application/json`,
            body: {
                "three_eyed_raven": {
                    "ip_address": "0.0.0.0",
                    "user_agent": "Test"
                }
            }
        })
    }
}