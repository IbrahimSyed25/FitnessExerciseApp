export const exerciseoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "76f28eb5cfmshe8443a984dedc28p122addjsnf02d3a75a1bc",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "76f28eb5cfmshe8443a984dedc28p122addjsnf02d3a75a1bc",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export async function fetchData(url, options) {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}
