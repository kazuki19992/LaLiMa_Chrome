// バックグラウンドで動作させるコード
// リマインド通知を行う処理とか、リマインド登録を行う処理はここに書くべきだと思う……
// (Chromeがバックグラウンドで動き続けていれば、ウインドウを閉じてもこのコードは動き続けるはずです！！)
import dayjs from "dayjs"
let count = 0;
let now = dayjs().format('HH:mm');
console.log("now=",now);
setInterval(() => {
    now = dayjs().format('HH:mm');
    console.log("count = ",now)
}, 10000);