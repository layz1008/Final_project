import axios from 'axios'

export const getNews = async () => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=07f3568073274011bc90905e922e120e')
        return response.data
    } catch (error) {
        throw error
    }
}