export default class PostPage {
    commentInput() { return cy.get('#comment'); }
    authorInput() { return cy.get('#author'); }
    emailInput() { return cy.get('#email'); }
    urlInput() { return cy.get('#url'); }
    submitButton() { return cy.get('#submit'); }

    addComment(comment, author, email, url = '') {
        this.commentInput().then(el => { if (comment !== '') cy.wrap(el).type(comment); });
        this.authorInput().then(el => { if (author !== '') cy.wrap(el).type(author); });
        this.emailInput().then(el => { if (email !== '') cy.wrap(el).type(email); });
        this.urlInput().then(el => { if (url !== '') cy.wrap(el).type(url); });
        this.submitButton().click();
    }
}
