import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Merve",
      lname: "Batman",
      age: 23,
      address: {},
      password: 123123123,
      tc: 111111111,
    },
    theme: "dark",
    fullName: "Merve Batman",
    permissions: [1, 2, 3, 4, 5],
    userList: [
      "Merve",
      "Zeynep",
      "Musa",
      "Mehmet",
      "Elem",
      "Eda",
    ],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "Tv", type: "elektronik" },
      { id: 4, title: "Monitör", type: "elektronik" },
      { id: 5, title: "Bardak", type: "cam" },
    ]
  },
  getters: {
    woodItems: state => state.itemList.filter(i => i.type === "mobilya"),
    activeUser(state) {
      const user = {
        ...state.user
      };
      delete user.password;
      return user;
    }
  }
});

export default store;