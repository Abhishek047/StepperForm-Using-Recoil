import { FirstPage, ProductInfo } from './';
import { Container, Slide, Box } from '@material-ui/core';
import { stepState, beforeStepState } from '../Recoil/State';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { setActiveStep } from '../Recoil/Selector';

export const LandingPage = () => {
    // USE RECOIL HERE
    const step = useRecoilValue(stepState);
    const transitionBeforeStep = useRecoilValue(beforeStepState);
    const updateStep = useSetRecoilState(setActiveStep); 

    useEffect(()=>{
        setTimeout(()=> updateStep(transitionBeforeStep), 500);
    },[transitionBeforeStep, updateStep]);


    const formStep = () => {
        switch(step) {
            case 1: {
                return(
                <Slide 
                    direction='right' 
                    in={transitionBeforeStep === 1}
                    mountOnEnter 
                    unmountOnExit
                >
                    <Box>
                        <ProductInfo />
                    </Box>
                </Slide>
                )
            }
            case 2: {
                return (
                <Slide 
                    direction='left' 
                    in={transitionBeforeStep === 2} 
                    mountOnEnter 
                    unmountOnExit
                >
                    <Box>
                        <FirstPage />
                    </Box>
                </Slide>
                )
            }
            case 3: {
                return (<div>CheckOut Page</div>)
            }
            default: {
                return (<div>404 not found</div>)
            }
        }
    }

    return (
        <div>
            <Container maxWidth='md'>
                {formStep()}
            </Container>
        </div>
    )
}
