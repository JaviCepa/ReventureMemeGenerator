export async function fetchImages ({commit}) {
    const data = await fetch('/fixtures/MOCK_DATA.json')
    const images = await data.json()
    commit('images/setImages', images, { root:true })
}