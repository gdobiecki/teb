import { v4 as uuidv4 } from 'uuid';

export function addNewPayment() {
    const userdID = uuidv4();
    const typeID = uuidv4();
    const distributionModelID = uuidv4();
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiHost')}/v1/payment`,
        'content-type': 'application/json',
        body: {
            userId: userdID,
            typeId: typeID,
            distributionModelId: distributionModelID,
            title: 'Rata za studia',
            amount: '485.00',
            deadline: '2020-06-01',
            academicYear: '2019/2020',
            semester: 3
        }
    }).then(response => response);
}

export function getPayment(paymentId) {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiHost')}/v1/payment/${paymentId}`
    }).then(response => response);
}
