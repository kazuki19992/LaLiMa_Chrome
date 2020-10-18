import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Comment from './Comment'




    class Contents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mode : '0',
          mes : 'なんで、チャット返してくれないの？？',
          time : '10:00'
        };
      }
    render(){
        //const classes = useStyles();
        return (
        <div  style={{marginBottom: "110px",width: "95%", margin: "auto"}}>
            <Comment mode={this.state.mode} text={this.state.mes} time={this.state.time}/>
        </div>
    )
    } 
}
export default Contents