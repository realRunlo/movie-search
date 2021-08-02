


export async function getPop(){
  const API_KEY = "941abfc276edb624da0952178d892f72"
  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=en-US&page=1");
  const results = await response.json();

  return results

}

export async function findMovies(searchKey,pagNum) {
  const API_KEY = "941abfc276edb624da0952178d892f72"
  const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&language=en-US&query=" + searchKey + "&page="+pagNum+"&include_adult=false";

  const response = await fetch(url);
  const results = await response.json();

  return results;
}





