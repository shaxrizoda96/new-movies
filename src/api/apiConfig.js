export const MY_API_KEY = '3b62cbd3019cef6ea3bcc5ecce56c01c';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const ORIGINAL_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
export const MOVIE_API = `https://api.themoviedb.org/3/movie/`;

export const BY_GENRES = `https://api.themoviedb.org/3/discover/movie?api_key=${MY_API_KEY}&language=en-US&include_adult=false&with_genres=`;

// export const SEARCH =  `https://api.themoviedb.org/3/discover/movie
//     ?api_key=${MY_API_KEY}
//     &language=en-US
//     &include_adult=false
//     &with_genres=12,85,16
//     &sort_by=popularity.asc
//     &page=1
//     &year=1980
//     &with_cast=`;

//    const SORT_BY_VALUES = [
//     'popularity.asc', 
//     'popularity.desc',
//     'release_date.asc',
//     'release_date.desc',
//     'revenue.asc',
//     'revenue.desc', 
//     'original_title.asc',
//     'original_title.desc',
//     'vote_average.asc',
//     'vote_average.desc',
//     'vote_count.asc', 
//     'vote_count.desc'
// ];

// const apiConfig = {
//     baseUrl: 'https://api.themoviedb.org/3/movie/',
//     apiKey: '3b62cbd3019cef6ea3bcc5ecce56c01c',
//     originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
//     w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
// }

// export default apiConfig;