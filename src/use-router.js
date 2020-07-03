import { useMemo } from 'react';
import {
    useHistory
} from 'react-router-dom';

export const useRouter = () => {
    const history = useHistory();
    
    //console.log('useRouter()');
    //console.log(history);


    return useMemo(() => {
        return {
            push: history.push
        }
    }, [history]);
};