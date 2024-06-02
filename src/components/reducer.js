export const Reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "changeName":
            return {
                ...state,
                name: payload.name,
                surName: payload.surName
            }
        default:
            return {
                ...state
            }
    }
}