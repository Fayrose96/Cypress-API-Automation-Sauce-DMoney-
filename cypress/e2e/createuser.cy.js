import envVariable from "../fixtures/envVariable.json"
import { faker } from "@faker-js/faker"
import Utility from "../fixtures/utility"

describe("Create User API", () => {
    const utility = new Utility();
    const firstName = faker.person.firstName();
    const email = firstName + utility.randomNumber(1000, 9999) + "@test.com";
    const phone = '0152' + utility.randomNumber(1111111, 9999999);
    const nid = (utility.randomNumber(1000000000, 9999999999).toString());
    it("creating user", () => {
        cy.request({
            method: 'POST',
            url: envVariable.baseUrl + '/user/create',
            headers: {
                "Authorization": envVariable.token,
                "X-AUTH-SECRET-KEY": "ROADTOSDET"
            },
            body: {
                "name": firstName,
                "email": email,
                "password": "P@ssword123",
                "phone_number": phone,
                "nid": nid,
                "role": "Customer"
            }
        }).then((response) => {
            expect(response.status).eq(201);
            cy.writeFile("cypress/fixtures/user.json", response.body)
        })
    })
})