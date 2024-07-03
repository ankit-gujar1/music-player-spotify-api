import React, { createContext, useContext, useReducer } from "react";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_global:null,
    viral_global:null,
    top_artists: null,
    playing: false,
    item: null,
    // token:'BQCvcNJEZbqKiq7KhQizrAgc9ua16rNVzc3ea_rf5N2bmypRJGMUXrnfH5oO8f6gRuUppclmy8E4B0tejNIvEbLor7Br04cZibIDJUIZ0YH_CPBrXSlVjpbCcGeCLC7s700i9Fsb7CkGf-zZe2Vygu1Jne2_ijUdm_lfHcxQ_w4b9uZodUaRhTBQgUFT-KvLG4GF0UMiKfDlEGJgk5uz'
};

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_TOP_GLOBAL":
            return {
                ...state,
                top_global: action.top_global,
            };

        case "SET_VIRAL_GLOBAL":
            return {
                ...state,
                viral_global: action.viral_global,
            };
        default:
            return state;
    }
};

export default reducer;

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateContext = () => useContext(StateContext);