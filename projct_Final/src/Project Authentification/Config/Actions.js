export const AddStagiareAction = (user) => {
    return {
        type: "Add_Stagiare",
        payload: user

    }
}
export const UpdateUserAction = (user) => {
    return {
        type: "Update_Stagiare",
        payload: user

    }
}
export const DeleteUserAction = (id) => {
    return {
        type: "Delete_Stagiare",
        payload: id

    }
}
// export const FilterUserAction = (idVille) => {
//     return {
//         type: "Filter_User",
//         payload: idVille

//     }
// }
// export const ClearFilterUserAction = () => {
//     return {
//         type: "Clear_Filter_User",


//     }
// }