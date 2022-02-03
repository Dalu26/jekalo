
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