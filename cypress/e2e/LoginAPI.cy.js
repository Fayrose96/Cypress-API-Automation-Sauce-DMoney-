import envVariable from "../fixtures/envVariable.json"

describe("Login API", () => {
    it("Login with valid credentials", () => {
        cy.request({
            method: 'POST',
            url: envVariable.baseUrl + '/user/login',
            body: {
                "email": "salman@roadtocareer.net",
                "password": "1234"
            }
        }).then((response) => {
            expect(response.status).eq(200);
            // cy.log(response.body.token);
            envVariable.token = response.body.token;
            cy.writeFile("cypress/fixtures/envvariable.json", JSON.stringify(envVariable))
        })
    })
})