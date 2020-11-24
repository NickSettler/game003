import {LocalStorageStateObject} from "../../types";

enum LocalStorageKeys {
    GAME_STATE = "GAME_STATE"
}

export default class LocalStorage {
    public static saveGameState(state: Array<LocalStorageStateObject>) {
        localStorage.setItem(LocalStorageKeys.GAME_STATE, JSON.stringify(state));
    }
}
