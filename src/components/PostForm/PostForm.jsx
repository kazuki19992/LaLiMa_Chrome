// 投稿フォーム
import React from 'react';
import Grid from '@material-ui/core/Grid';

// import PostText from './PostText';
//import { makeStyles } from '@material-ui/core/styles';

// import DateTime from './DateTimePicker';
// import SendBtn from './SendBtn';
// import RemindTemplate from './RemindTemplate'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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

    const FormTheme = {
        height: "100px",
    }

    return (
        <div className={classes.root} style={FormTheme}>
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
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        {/* <RemindTemplate /> */}
                        <div className={classes.temp}>
                            <Button
                            variant="contained"
                            >
                                展開
                            </Button>
                        </div>
                        {/* <br /> */}
                        {/* <SendBtn /> */}
                        <div className={classes.temp}>
                            <Button
                            variant="contained"
                            color="primary"
                            >
                                送信
                            </Button>
                        </div>
                    </Grid>
                </form>
            </div>
        )
    }
}
export default PostForm
