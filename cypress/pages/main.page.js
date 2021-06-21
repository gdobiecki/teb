export default class MainPage {
    open() {
        cy.visit('/');
    }

    openPostWithTitle(title) {
        cy.get('a').contains(title).click();
    }
}
