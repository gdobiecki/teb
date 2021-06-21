import MenuComponent from '../pages/components/menu.component';
import FieldOfStudiesPage from '../pages/fieldOfStudies.page';
import FirstDegreeStudiesPage from '../pages/firstDegreeStudies.page';
import { ITCities, logisticsCities, managementEngineeringCities } from '../testData/testData';

describe('Task #1', () => {
    const menuComponent = new MenuComponent();
    const firstDegreeStudiesPage = new FirstDegreeStudiesPage();
    const fieldOfStudiesPage = new FieldOfStudiesPage();

    it('open proper page by hover over menu and click a link', () => {
        cy.visit('/');
        menuComponent.openStudiesMenu();
        menuComponent.openFirstDegreeStudy();
        firstDegreeStudiesPage.openFieldOfStudies();
        cy.url().should('contain', 'kierunki-i-specjalnosci');
    });

    it('filter by city and level of education', () => {
        fieldOfStudiesPage.open();
        cy.url().should('contain', 'kierunki-i-specjalnosci');
        fieldOfStudiesPage.filter().contains('Wrocław').click();
        cy.url().should('contain', encodeURI('wrocław'));
        fieldOfStudiesPage.filter().contains('Studia inżynierskie').click();
        cy.url().should('contain', encodeURI('studia inżynierskie'));
        fieldOfStudiesPage.fieldOfStudy().should('have.length', 3);
        fieldOfStudiesPage.assertCitiesForGivenFiledOfStudies('Informatyka', ITCities);
        fieldOfStudiesPage.assertImageExistsForGivenFieldOfStudies('Informatyka');
        fieldOfStudiesPage.assertCitiesForGivenFiledOfStudies('Inżynieria zarządzania', managementEngineeringCities);
        fieldOfStudiesPage.assertImageExistsForGivenFieldOfStudies('Inżynieria zarządzania');
        fieldOfStudiesPage.assertCitiesForGivenFiledOfStudies('Logistyka', logisticsCities);
        fieldOfStudiesPage.assertImageExistsForGivenFieldOfStudies('Logistyka');
        fieldOfStudiesPage.filters().should('be.visible');
        fieldOfStudiesPage.searchingInput().should('be.visible');
        fieldOfStudiesPage.sorting().should('be.visible');
        fieldOfStudiesPage.enrollButton().should('be.visible');
    });
});
