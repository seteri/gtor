import navbarModule from "../modules/navbarModule"
import gamesModule from "../modules/gamesModule"

export default function mainPlugin(store){
    store.registerModule("navbar", navbarModule)
    store.registerModule("games", gamesModule)

}