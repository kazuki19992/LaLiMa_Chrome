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
    replyEntry("entry");
    console.log(JSON.parse(localStorage.getItem('savedContents')));
}, 10000);
// setInterval(() => {
//     localStorage.setItem('savedContents', JSON.stringify([{mode:'0',mes:'なんで、チャット返してくれないの？？',time:'10:11'}]));
// }, 1000);


function replyEntry(text){
    let existList = JSON.parse(localStorage.getItem('savedContents'));
    if(existList == null) existList = [];
    var entryText = text;
    var entry = {
        "mode": '0',
        "mes": entryText,
        "time": dayjs().format('HH:mm')
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    seed=Math.random() * 1000;
    if(seed==1000){
        existList.push(entry);
        localStorage.setItem('savedContents', JSON.stringify(existList));
    }

}