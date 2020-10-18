import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Response from './Response';
import Request from './Request';

const useStyles = makeStyles((theme) => ({
    chatarea: {
        marginBottom: "110px",
    },
  }
));

export default function Contents() {
    const classes = useStyles();

    return (
        <div className={classes.chatarea} style={{width: "95%", margin: "auto"}}>
            <Response text="ねぇなんでチャット返してくれないの？私のこと嫌いなの？"/>
            <Request text="3分後にカップラーメンって教えて！"/>
            <Response text="は？まだ話おわってないんだけど。最低……"/>
        </div>
    )
}