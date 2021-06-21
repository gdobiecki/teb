export default class FieldOfStudiesPage {
    open() {
        cy.visit('/studia-i-szkolenia/studia-i-stopnia/kierunki-i-specjalnosci', {
            onBeforeLoad: win => {
                win.sessionStorage.clear();
            }
        });
    }

    fieldOfStudy() { return cy.get('.direction-title > span'); }
    filter() { return cy.get('.filters label'); }
    filters() { return cy.get('.filters'); }
    searchingInput() { return cy.get('#listing-search'); }
    sorting() { return cy.get('.sort'); }
    enrollButton() { return cy.get('.cta-wrapper a'); }

    assertCitiesForGivenFiledOfStudies(fieldOfStudies, cities) {
        this.fieldOfStudy().contains(fieldOfStudies).parent().siblings('.cities').then(res => {
            cities.forEach(city => {
                expect(res.text()).to.include(city);
            });
        });
    }

    assertImageExistsForGivenFieldOfStudies(fieldOfStudies) {
        this.fieldOfStudy().contains(fieldOfStudies).parents('.direction-title-wrap').within(() => {
            cy.get('.direction-img img').should('be.visible');
        });
    }
}
