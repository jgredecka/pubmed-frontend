import axios from 'axios';


const getHeaders = () => {
	const headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	};

  return headers;
}

const getPubmedIds = params => (
	axios.get(
		'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi',
		{
			params, 
			headers: getHeaders()
		}
	)
)

const getSummaryDocs = params => (
	axios.get(
		'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi',
		{
			params,
			headers: getHeaders()
		}
	)
)

const addToBookmarks = (pubmedId) => (
	axios.post(
		'http://localhost:8000/bookmarks/',
		{
			pmid: pubmedId,
		},
		{
			headers: getHeaders()
		}
	)
)


const getBookmarks = (params = {}) => (
	axios.get(
		'http://localhost:8000/bookmarks/',
		{
			params,
			headers: getHeaders()
		}
	)
)

export {
	getPubmedIds,
	getSummaryDocs,
	addToBookmarks,
	getBookmarks,
}