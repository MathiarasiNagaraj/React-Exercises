import axios from 'axios'
export const getShortTeasers = async()=> {
    const data = await axios.get('https://mocki.io/v1/2e861907-77b4-4cd4-8043-041c70475fd6').then(data => data.data).catch(error => console.log(error));
    return data;
}
export const getMovies = async () => {
    const data = await axios.get('https://mocki.io/v1/cd6ef37c-2822-47dc-8a14-606d5edc9fa5').then(data => data.data).catch(error => console.log(error));
    return data;
}