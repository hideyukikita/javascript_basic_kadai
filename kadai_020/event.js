// textというidを持つHTML要素を取得する
const text = document.getElementById('text');
// btnというidを持つHTML要素を取得する
const btn = document.getElementById('btn');

// btnが押されたときに作動するイベント処理
btn.addEventListener('click', () => {

  // テキストの書き換え
  text.textContent = 'ボタンをクリックしました';

});