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
