import * as Type from '../Constant/video';

const iniState = {
    videoList : [],
    loading: null
};

const videoPlaylist = (state = iniState, action) => {
    switch(action.type){
        case Type.GET_VIDEOLIST:
            return{
                videoList:action.payload,
                loading:false
            }
        default: 
            return state;
    }
};

export default videoPlaylist;