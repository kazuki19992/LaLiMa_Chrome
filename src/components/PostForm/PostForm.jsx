// 投稿フォーム
import React from 'react';
import Grid from '@material-ui/core/Grid';
import dayjs from 'dayjs'
// import PostText from './PostText';
import { makeStyles } from '@material-ui/core/styles';

// import DateTime from './DateTimePicker';
// import SendBtn from './SendBtn';
// import RemindTemplate from './RemindTemplate'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
let message;
function updateItem(e){
    let nowTime=dayjs().format('HH:mm');
//     this.setState({mode:'1',mes:e.target.value,time:nowTime});
    message=e.target.value;
    console.log(nowTime);
    console.log(message);
    }
function submitItem(e){
    console.log("test",message);
    let existList = JSON.parse(localStorage.getItem('savedContents'));
    if(existList == null) existList = [];
    var entryText = message;
    var entry = {
        "mode": '1',
        "mes": entryText,
        "time": dayjs().format('HH:mm')
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existList.push(entry);
    localStorage.setItem('savedContents', JSON.stringify(existList));
    console.log(JSON.parse(localStorage.getItem('savedContents')));

}
function deleteItem(e){
    console.log("削除");
    let existList = JSON.parse(localStorage.getItem('savedContents'));
    if(existList != null){
        localStorage.removeItem('savedContents');
    };
    console.log(JSON.parse(localStorage.getItem('savedContents')));
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: "10px",
        left: 0,
        height: "100px",
        zIndex: 1000,
    },
    temp: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    text: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    }
));

export default function PostForm() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <form id="PostForm">
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        {/* <DateTime /><br /> */}
                        {/* <PostText /> */}
                        <div className={classes.text}>
                            <TextField
                            id="outlined-multiline-static"
                            label="入力してRiMAと話す"
                            size="small"
                            multiline
                            rows={4}
                            placeholder="リマインドをお願いする時は「展開」ボタンでテンプレートが展開されるよ！"
                            variant="outlined"
                            onChange={updateItem}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        {/* <RemindTemplate /> */}
                        <div className={classes.temp}>
                            <Button
                            variant="contained"
                            onClick={deleteItem}
                            >
                                削除
                            </Button>
                        </div>
                        {/* <br /> */}
                        {/* <SendBtn /> */}
                        <div className={classes.temp}>
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={submitItem}
                            >
                                送信
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}


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
    existList.push(entry);
    localStorage.setItem('savedContents', JSON.stringify(existList));
}