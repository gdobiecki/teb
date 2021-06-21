export default class FirstDegreeStudiesPage {
    fieldOfStudies() { return cy.get('nav a[href*="kierunki-i-specjalnosci"]'); }

    openFieldOfStudies() { this.fieldOfStudies().click(); }
}
