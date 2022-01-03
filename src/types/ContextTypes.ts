import { Action } from '../context/GistContext';

export type StateType = {
    userName: string;
    PAT: string;
    isLoggedin: boolean;
    tab: number;
    gistID: string;
    searchValue: string;
    imgURL : string
}

export type dispatch = React.Dispatch<Action>;
