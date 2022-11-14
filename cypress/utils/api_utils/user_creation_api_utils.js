const userCodeApi = require('../../apis/castle_black/user_code_api.js')
const tokenApi = require('../../apis/castle_black/token_api.js')
const signUpApi = require('../../apis/hodor/sign_up_api.js')


module.exports = {
    createUser: function () {
        userCodeApi.postUserCode().as('postUserCodeResponse')
        cy.then(function () {
            tokenApi.postToken(this.postUserCodeResponse.body.authorize.code).as('postTokenResponse')
        })
        cy.then(function () {
            cy.log(this.postTokenResponse.body.token.access_token)
            cy.log(this.postTokenResponse.body.token.token_type)
            cy.log(this.postTokenResponse.body.token.refresh_token)
        })
        cy.then(function () {
            signUpApi.getSignUp().as('getSignUpResponse')
        })
        cy.then(function () {
            cy.log(this.getSignUpResponse.body.match(/authenticity_token.*value\s*=\s*"(.*?)"/)[1])
        })
    }
}