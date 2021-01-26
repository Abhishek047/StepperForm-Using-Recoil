import { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { personalInfoState } from '../Recoil/State';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addStep } from '../Recoil/Selector';

export const FirstPage = () => {
    const personalInfo = useRecoilValue(personalInfoState);
    const nextStep = useSetRecoilState(addStep);

    const [ name, setName ] = useState(personalInfo.name);
    const [ email, setEmail ] = useState(personalInfo.phone);
    const [ phone, setPhone ] = useState(personalInfo.email);
    
    const classes = useStyles();

    const handleInfoSubmit = () => {
        // FIRST CHECK EVERYTHING
        console.log('1sm');
        // CALL NEXT STEP
        nextStep();
    }

    return (
        <div className={classes.formInputBox}>
            <Typography className={classes.title} gutterBottom>
                Enter Your Personal Details
            </Typography>
            <TextField 
                className={classes.inputField}
                label='Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <TextField 
                className={classes.inputField}
                label='Phone' 
                value={phone} 
                type='number'
                onChange={(e) => setPhone(e.target.value)} 
            />
            <TextField 
                className={classes.inputField}
                label='Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <Button 
                className={classes.btn} 
                fullWidth
                color='primary' variant='contained'
                onClick={handleInfoSubmit}    
            >
                Next
            </Button>
        </div>
    )
}
