import * as Type from '../Constant/video';
import api from '../API';

export const getVideoList = () => {
    return async (dispatch) => {
        try{
            const res = await api.get("");
            dispatch({
                type: Type.GET_VIDEOLIST,
                payload: res.data
            })
        }
        catch(err){
            console.error(err);
        }
    }
}