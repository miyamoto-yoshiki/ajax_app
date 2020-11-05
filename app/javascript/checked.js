function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    if (post.getAttribute("data-load") != null) {  //フロント実装のタイミング変更の所に解説あり
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", () => { 
      const postId = post.getAttribute("data-id");  //メモのIDを取得する
      const XHR = new XMLHttpRequest();  //変数XHRから、XMLHttpRequestのメソッドを使用できるようになる
      XHR.open("GET", `/posts/${postId}`, true);  //リクエストの詳細を設定
      XHR.responseType = "json";  //レスポンスの形式を指定
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;  //エラーが出た場合に、15行目以降に記述されている処理を行わないようにする
        }
        const item = XHR.response.post;
        if (item.checked === true) {  //既読であるかどうかを判断し、情報を切り替える処理をする
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
   });
}

setInterval(check, 1000);  //check関数が1秒に1度実行される