const initState = {
  users: [
    { id: 1, name: "tin" },
    { id: 2, name: "teo" },
  ],
  extra: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      state = { ...state, users };
      break;
    case "ADD":
      let id;
      if (state.users.length === 0) {
        id = 1;
      } else {
        id = state.users[state.users.length - 1].id + 1;
      }
      let user = { id: id, name: `user ${id}` };
      state = { ...state, users: [...state.users, user] };
      break;
    default:
      return state;
  }
  return state;
};

export default rootReducer;
