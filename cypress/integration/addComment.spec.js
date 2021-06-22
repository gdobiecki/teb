import CommentPreviewPage from '../pages/commentPreview.page';
import MainPage from '../pages/main.page';
import PostPage from '../pages/post.page';

describe('Task #2', () => {
    const commentPreviewPage = new CommentPreviewPage();
    const mainPage = new MainPage();
    const postPage = new PostPage();

    it('user can add a comment with all field filled', () => {
        const author = `author_${Date.now()}`;
        const comment = `comment_${Date.now()}`;
        const email = `email_${Date.now()}@gmail.com`;
        const url = 'https://google.com';
        mainPage.open();
        mainPage.openPostWithTitle('Hello world!');
        cy.url().should('contain', 'hello-world');
        postPage.addComment(comment, author, email, url);
        commentPreviewPage.author().should('contain.text', author);
        commentPreviewPage.comment().should('contain.text', comment);
    });

    it('user cannot add a comment without an email address', () => {
        const author = `author_${Date.now()}`;
        const comment = `comment_${Date.now()}`;
        const email = '';
        const url = 'https://google.com';
        mainPage.open();
        mainPage.openPostWithTitle('Hello world!');
        cy.url().should('contain', 'hello-world');
        postPage.addComment(comment, author, email, url);
        commentPreviewPage.errorMsg().should('contain.text', 'Error: Please fill the required fields (name, email).');
    });

    it('user cannot add a comment without a name', () => {
        const author = '';
        const comment = `comment_${Date.now()}`;
        const email = `email_${Date.now()}@gmail.com`;
        const url = 'https://google.com';
        mainPage.open();
        mainPage.openPostWithTitle('Hello world!');
        cy.url().should('contain', 'hello-world');
        postPage.addComment(comment, author, email, url);
        commentPreviewPage.errorMsg().should('contain.text', 'Error: Please fill the required fields (name, email).');
    });

    it('user cannot add a comment without actual comment', () => {
        const author = `author_${Date.now()}`;
        const comment = '';
        const email = `email_${Date.now()}@gmail.com`;
        const url = 'https://google.com';
        mainPage.open();
        mainPage.openPostWithTitle('Hello world!');
        cy.url().should('contain', 'hello-world');
        postPage.addComment(comment, author, email, url);
        commentPreviewPage.errorMsg().should('contain.text', 'Error: Please type your comment text.');
    });
    it('user cannot add a comment with all fields empty', () => {
        const author = '';
        const comment = '';
        const email = '';
        const url = '';
        mainPage.open();
        mainPage.openPostWithTitle('Hello world!');
        cy.url().should('contain', 'hello-world');
        postPage.addComment(comment, author, email, url);
        commentPreviewPage.errorMsg().should('contain.text', 'Error: Please fill the required fields (name, email).');
    });

    //It's skipped, because page doesn't allow to add comments too frequently.
    //If you want to run this test, just replace `skip` with `only`.
    it.skip('user can add a comment without url', () => {
        const author = `author_${Date.now()}`;
        const comment = `comment_${Date.now()}`;
        const email = `email_${Date.now()}@gmail.com`;
        const url = '';
        mainPage.open();
        mainPage.openPostWithTitle('Hello world!');
        cy.url().should('contain', 'hello-world');
        postPage.addComment(comment, author, email, url);
        commentPreviewPage.author().should('contain.text', author);
        commentPreviewPage.comment().should('contain.text', comment);
    });
});
