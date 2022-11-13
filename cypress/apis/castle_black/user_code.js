module.exports = {
    postUserCodeOptions: function () {
        return {
            method: 'POST',
            url: 'https://castle-black-edge.stsh.io/api/v1/users/f777dda2-4dc2-441a-8c36-d1b71cfef790/code?client_id=2024400d-b3ad-4cfd-b20b-23a18cde27db&response_type=code&redirect_uri=https://app-edge.stash.com/authorize&code_challenge_method=S256&code_challenge=test',
            body: {
                "authorize": {
                    "remember_device": "false"
                },
                "three_eyed_raven": {
                    "user_agent": "Postman",
                    "ip_address": "0.0.0.0",
                    "issue_reason": "user_sign_up"
                }
            }
        }
    }
}