module.exports = {
    getSignUp: function () {
        return cy.request({
            method: 'GET',
            url: 'https://login-edge.stash.com/sign_up?client_id=2024400d-b3ad-4cfd-b20b-23a18cde27db&redirect_uri=https://app-edge.stash.com/authorize&response_type=code'
        })
    }
}