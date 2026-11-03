// 活動文章：使用原生 JavaScript 完成搜尋與分類，不依賴額外套件。
const searchInput = document.querySelector('#article-search');
const filterButtons = document.querySelectorAll('[data-filter]');
const articles = Array.from(document.querySelectorAll('.article-card'));
const result = document.querySelector('#filter-result');
const empty = document.querySelector('#no-results');

if (searchInput && filterButtons.length && result) {
  let currentCategory = 'all';
  function updateArticles() {
    const keyword = searchInput.value.trim().toLocaleLowerCase();
    let visible = 0;
    articles.forEach(article => {
      const categoryMatches = currentCategory === 'all' || article.dataset.category === currentCategory;
      const text = (article.textContent + ' ' + (article.dataset.search || '')).toLocaleLowerCase();
      const show = categoryMatches && text.includes(keyword);
      article.hidden = !show;
      if (show) visible++;
    });
    result.textContent = `目前顯示 ${visible} 篇文章`;
    empty.hidden = visible !== 0;
  }
  filterButtons.forEach(button => button.addEventListener('click', () => {
    currentCategory = button.dataset.filter;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    updateArticles();
  }));
  searchInput.addEventListener('input', updateArticles);
}
