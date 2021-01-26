import { useSetRecoilState } from 'recoil';
import { addStep } from '../Recoil/Selector';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const ProductInfo = () => {
    const nextStep = useSetRecoilState(addStep);

    const classes = useStyles();

    const handleNextClick = () => {
        console.log('product');
        nextStep();
    }

    return (
        <Box>
            <Typography className={classes.title} gutterBottom>
                Product Info
            </Typography>
            <Button
                className={classes.btn} 
                color='secondary' 
                variant='contained'
                onClick={handleNextClick}
            >
                Next
            </Button>
        </Box>
    )
}
