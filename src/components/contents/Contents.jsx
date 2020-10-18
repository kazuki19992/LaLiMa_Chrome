import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Response from './Response';
import Request from './Request';
import Comment from './Comment'




    class Contents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs:[]
        };
      }
    render(){
        //const classes = useStyles();
        const messages=this.state.logs.map(e=>(
            <Comment mode={e.mode} text={e.mes} time={e.time}/>
        ))
        return (
        <div  style={{marginBottom: "110px",width: "95%", margin: "auto"}}>

        </div>
    )
    } 
}
export default Contents