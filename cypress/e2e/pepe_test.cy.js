const userCodeApi = require('../apis/castle_black/user_code.js')

describe('Pepe Tests', () => {
    it('Pepe Test 1', () => {
        cy
        .request(userCodeApi.postUserCodeOptions())
            .then((response) => { 
                const code = response.body.authorize.code
                cy.log(code)
             })
    })
})