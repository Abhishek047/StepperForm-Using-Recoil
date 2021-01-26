import { selector } from 'recoil';
import { stepState, beforeStepState } from './State';

export const setActiveStep = selector({
    key:'setActiveStep',
    set: ({set}, value) => {
        set(stepState, value);
    }
})

export const addStep = selector({
    key:'addStep',
    set: ({get, set}) => {
        const currentStep = get(beforeStepState);
        set(beforeStepState, currentStep+1);
    }    
});

export const backStep = selector({
    key:'backStep',
    set: ({get, set}) => {
        const currentStep = get(beforeStepState);
        set(beforeStepState, currentStep-1);
    }    
});