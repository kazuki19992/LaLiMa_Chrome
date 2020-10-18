// 投稿フォーム
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PostText from './PostText';
// import DateTime from './DateTimePicker';
import SendBtn from './SendBtn';
import RemindTemplate from './RemindTemplate'


class PostForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            mode : '0',
            mes : 'なんで、チャット返してくれないの？？',
            time:'10:00'
        }

    }
    render() {
        const useStyles = makeStyles((theme) => ({
                root: {
                    position: "fixed",
                    bottom: "10px",
                    left: 0,
                    height: "100px",
                    zIndex: 1000,
                },
            }
        ));
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
                            <PostText />
                        </Grid>
                        <Grid item xs={4}>
                            <RemindTemplate />
                            {/* <br /> */}
                            <SendBtn />
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}
export default PostForm
