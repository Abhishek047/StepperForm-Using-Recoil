import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    formInputBox:{
        display:'flex',
        flexFlow:'column',
        padding:'20px 50px',
        margin:'0 auto',
        justifyContent:'center',
        alignItems:'center',
    },
    inputField:{
        width:250,
        marginTop:20,
    },
    title:{
        fontSize:'min(2em, 8vw)',
    },
    btn:{
        marginTop:20,
        maxWidth:250,
    },
}));