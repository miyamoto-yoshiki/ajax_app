function memo() {
  const submit = document.getElementById("submit"); //投稿ボタンをIDで取得
  submit.addEventListener("click", (e) => {  //投稿するボタンを「click」した場合に実行される関数を定義
    const formData = new FormData(document.getElementById("form"));  //フォームに入力された値を取得
    const XHR = new XMLHttpRequest();  //XMLHttpRequestのオブジェクトを生成
    XHR.open("POST", "/posts", true);  //リクエスの内容を、HTTPメソッドはPOST、パスは/posts、非同期通信はtrueと設定
    XHR.responseType = "json";  //レスポンスの形式を定義
    XHR.send(formData);  //メモ投稿のフォームに入力された情報を送信
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;  //レスポンスとして返却されたメモのレコードデータを取得
      const list = document.getElementById("list");  //HTMLを描画する場所を指定する際に使用する「描画する親要素」のlistの要素を取得
      const formText = document.getElementById("content");  //メモの入力フォームをリセットする為に取得
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);  //listという要素に対しinsertAdjacentHTMLでHTMLを追加
      formText.value = "";  //入力されたままの文字はリセット
    };
    e.preventDefault();
  });
}
window.addEventListener("load", memo);