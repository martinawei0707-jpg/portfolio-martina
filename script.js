'use strict';

// 文章分類篩選：所有按鈕皆可透過 Tab 聚焦，以 Enter 或空白鍵啟動。
const filterButtons = document.querySelectorAll('.filter-button');
const articles = document.querySelectorAll('.article-card');
const status = document.getElementById('filter-status');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });

    let count = 0;
    articles.forEach((article) => {
      const isVisible = category === 'all' || article.dataset.category === category;
      article.hidden = !isVisible;
      if (isVisible) count += 1;
    });

    status.textContent = `目前顯示 ${count} 篇文章`;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// GitHub Pages 的網址為 username.github.io，從公開網址取得帳號名稱。
// 在本機預覽時仍指向 GitHub 首頁；交件前請確認部署後連結是否正確。
const githubLink = document.getElementById('github-profile');
const hostname = window.location.hostname;
if (hostname.endsWith('.github.io')) {
  const username = hostname.split('.')[0];
  githubLink.href = `https://github.com/${encodeURIComponent(username)}`;
  githubLink.textContent = '前往我的 GitHub 個人頁面';
}
