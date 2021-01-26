import { atom } from 'recoil';

export const stepState = atom({
    key: 'stepState',
    default:1,
});

export const personalInfoState = atom({
    key:'personalInfoState',
    default: {
        name: '',
        phone:'',
        email:'',
    },
});