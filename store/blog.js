const state = () => ({
  list: [],
});

const mutations = {
  setList(state, payload) {
    state.list(payload);
  },
};

export default {
  state,
  mutations,
};
