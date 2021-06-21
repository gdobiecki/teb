import CommentPreviewPage from '../pages/commentPreview.page';
import MainPage from '../pages/main.page';
import PostPage from '../pages/post.page';

describe('Task #2', () => {
    const commentPreviewPage = new CommentPreviewPage();
    const mainPage = new MainPage();
    const postPage = new PostPage();
    it('add comment', () => {
        const comment = `comment_${Date.now()}`;
        const author = `author_${Date.now()}`;
        const email = `email_${Date.now()}@gmail.com`;
        const url = 'https://google.com';
        mainPage.open();
        mainPage.openPostWithTitle('Hello world!');
        cy.url().should('contain', 'hello-world');
        postPage.addComment(comment, author, email, url);
        commentPreviewPage.author().should('contain.text', author);
        commentPreviewPage.comment().should('contain.text', comment);
    });
});
