import { FirstPage } from './FirstPage';
import { Container } from '@material-ui/core';
import { stepState } from '../Recoil/State';
import { useRecoilValue } from 'recoil';

export const LandingPage = () => {
    const step = useRecoilValue(stepState);

    // USE RECOIL HERE
    const formStep = () => {
        switch(step) {
            case 1: {
                return(<div>Product Info</div>)
            }
            case 2: {
                return (<FirstPage />)
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
