export function createNewPayment(payment) {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiHost')}/v1/payment`,
        'content-type': 'application/json',
        body: payment
    }).then(response => response);
}

export function getPayment(paymentId) {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiHost')}/v1/payment/${paymentId}`
    }).then(response => response);
}
