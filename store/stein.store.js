
export const state = () => ({
  data: [],
})

export const mutations = {
  SET(state, data) {
    state.data = data;
  },
}

export const actions = {
  async get({ commit }, query) {
    const params = new URLSearchParams(query).toString();
    await fetch(
      `/api/v1/stein?${params}`
    )
    .then(async (res) => {
      const data = await res.json();
      commit('SET', data)
    })
  },
}
