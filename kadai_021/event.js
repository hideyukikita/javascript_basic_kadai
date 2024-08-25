// idがtext,btnの要素を取得
const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
  setTimeout(() => {
    text.textContent = ('ボタンをクリックしました');
  },2000 );
});