import network from './network'

export const getCharacters = (limitNumber) => {
    return new Promise((resolve, reject) => {
      network.get(`/characters?limit=${limitNumber}`).then(response => {
        resolve(response)
      }).catch(err => reject(err))
    })
}

export const getEpisodes = () => {
  return new Promise((resolve, reject) => {
    network.get('/episodes').then(response => {
      resolve(response)
    }).catch(err => reject(err))
  })
}

export const titleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
}

export const shortenXterLength = (string, number) => {
    if(string.length < number) {
        return string
    }
    return `${string.slice(0, number)}...`
}