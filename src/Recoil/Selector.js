import { selector } from 'recoil';
import { stepState } from './State';

export const addStep = selector({
    key:'addStep',
    set: ({get, set}) => {
        const currentStep = get(stepState);
        set(stepState, currentStep+1);
    }    
});

export const backStep = selector({
    key:'backStep',
    set: ({get, set}) => {
        const currentStep = get(stepState);
        set(stepState, currentStep-1);
    }    
});