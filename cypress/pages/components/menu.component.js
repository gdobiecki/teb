export default class MenuComponent {
    studiesLink() { return cy.get('.links .expandable'); }
    firstDegreeStudy() { return cy.get('.level-2 a[href*="studia-i-stopnia"]'); }

    openStudiesMenu() { this.studiesLink().realHover(); }
    openFirstDegreeStudy() { this.firstDegreeStudy().click(); }
}
