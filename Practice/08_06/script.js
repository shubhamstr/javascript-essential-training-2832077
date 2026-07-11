/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function createArticle(data) {
  const article = document.createElement('p');
  article.textContent = `${data.title} - ${data.author}`;
  document.getElementsByTagName('main')[0].appendChild(article);
  return article;
}

createArticle({
  title: 'The Importance of Learning JavaScript',
  author: 'John Doe'
});

const p = document.getElementsByTagName('p')[0];
p.classList.add('article');