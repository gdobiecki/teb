export default class PostPage {
    commentInput() { return cy.get('#comment'); }
    authorInput() { return cy.get('#author'); }
    emailInput() { return cy.get('#email'); }
    urlInput() { return cy.get('#url'); }
    submitButton() { return cy.get('#submit'); }

    addComment(comment, author, email, url = '') {
        this.commentInput().type(comment);
        this.authorInput().type(author);
        this.emailInput().type(email);
        this.urlInput().type(url);
        this.submitButton().click();
    }
}
