const API_KEY = 'dbd5da5accba2b0fb83479933e2afee6';
const API_BASE = 'https://api.themoviedb.org/3';

const getApi = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getApi: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await getApi(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para voce',
                items: await getApi(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await getApi(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await getApi(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await getApi(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug: 'horror',
                title: 'Terror',
                items: await getApi(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug: 'romance',
                title: 'Romance',
                items: await getApi(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug: 'documentary',
                title: 'Documentarios',
                items: await getApi(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await getApi(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await getApi(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}