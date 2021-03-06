export default class CommentPreviewPage {
    author() { return cy.get('.comment-author b'); }
    comment() { return cy.get('.comment-content'); }
    errorMsg() { return cy.get('#error-page p'); }
}
