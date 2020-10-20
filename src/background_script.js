// バックグラウンドで動作させるコード
// リマインド通知を行う処理とか、リマインド登録を行う処理はここに書くべきだと思う……
// (Chromeがバックグラウンドで動き続けていれば、ウインドウを閉じてもこのコードは動き続けるはずです！！)
import dayjs from "dayjs"

let count = 0;
let now = dayjs().format('HH:mm');
console.log("now=",now);

const msgList = [
    "ねーねー。",
    "きいてるー？？",
    "はなそーよー",
    "大好きだよ",
    "愛してるよー！",
    "すき……",
    "ちゅっちゅ！！",
    "他の女と一緒にいないよね…？",
    "あなたを誰にも渡さない……",
    "ねー……",
    "むぅ",
    "いっぱいお話したいだけなのに……",
    "ねぇってばー",
    "すきだよ？",
    "こんなに好きなのに……",
    "私が悪いのかな……?",
    "はぁ。。。",
    "ふーん…",
    "こんなにすきなのに……",
    "あいたい。",
    "ねぇ、会いたいよー……",
    "通話しよ。。。",
]

setInterval(() => {
    now = dayjs().format('HH:mm');
    //console.log("count = ",now)
    replyEntry(msgList[Math.floor( Math.random()* msgList.length )]);
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
<<<<<<< HEAD
    let seed=Math.random() * 100;
    // if(seed==100) {
        existList.push(entry);
        localStorage.setItem('savedContents', JSON.stringify(existList));
    // }
    // else{
    //     console.log(seed)
    // }
=======
    let seed=Math.random() * 1000;
        existList.push(entry);
        localStorage.setItem('savedContents', JSON.stringify(existList));

>>>>>>> 4a2f7b66229de1800b1ac50fdc0b895e437d8794
}