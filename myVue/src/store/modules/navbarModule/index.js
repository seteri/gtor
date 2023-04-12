
const navbarModule = {
    namespaced: true,



    state() {
        return {
            navbarComponents: [
                {id: 1,name: "კატეგორიები", description: "კატეგორიების ჩამონათვალი"},
                {id: 2,name: "რეკლამა", description: "შეგვიკვეთე რეკლამა"},
                {id: 3,name: "თხოვნები", description: "გვითხარი რა თამაში დავამატოთ"},
                {id: 4,name: "დონაცია", description: "დაეხმარე საიტს არსებობაში"},
            ],

            gameCategories: ["შუთერი", "ექშენი", "RP", "ჰორორი", "ონლაინი", "ბრბოლა", "ომი"],

            showGameCategories: false,

        }
    },

    getters: {

        navbarComponents(state){
            return state.navbarComponents
        },
        gameCategories(state){
            return state.gameCategories
        },
        showGameCategories(state){
            return state.showGameCategories
        }


    },

    mutations: {

        toggleGameCategories(state){
            state.showGameCategories = ! state.showGameCategories
        }


    },


    actions: {


    },

}

export default navbarModule