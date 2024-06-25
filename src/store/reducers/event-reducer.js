import { SET_TZ_EVENT_BY_ADD_USER } from "../types/events-types";

const initialState = {
    tzEventByaddUser: null
}

const eventsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_TZ_EVENT_BY_ADD_USER:
            return {
                tzEventByaddUser: payload
            };

        default:
            return state;
    }
}

export default eventsReducer;
