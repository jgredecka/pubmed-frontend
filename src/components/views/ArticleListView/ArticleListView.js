import React from 'react';
import Card from './Card';
import { Container, Count } from './styled';
import queryString from 'query-string';
import { getPubmedIds, getSummaryDocs, getBookmarks } from './../../../api/api';


class ArticleListView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articleList: [],
			count: '',
			bookmarks: [],
		}
	}

	convertListToString = (idList) => {
		const idString = idList.toString();
		return idString
	}

	getSummaryValues = (resultObj) => {
		const articleList = Object.values(resultObj);
		return articleList
	}

	componentDidMount() {
		let pmidString;
		let count;
		let articleList;
		const searchParams = queryString.parse(this.props.location.search);
		let { term, retmax, ...summaryParams } = searchParams;

		getBookmarks()
		.then(response => this.setState({ bookmarks: response.data })) //Get all bookmark PMIDs to show if article has already been bookmarked
		.catch(error => console.log(error.response))

		getPubmedIds(searchParams) //Fetch PMIDs for given term.
		.then(response => {
			pmidString = this.convertListToString(response.data.esearchresult.idlist);
			count = response.data.esearchresult.count; //total count of articles
		})
		.then(() => {
			summaryParams.id = pmidString;
			getSummaryDocs(summaryParams) //Fetch summary docs for retrieved PMIDs.
			.then(response => {
				articleList = this.getSummaryValues(response.data.result);
				articleList.pop(); //Retain only objects containng article data.
				this.setState({
					articleList,
					count,
				})
			})
		})
		.catch(error => console.log(error.response))
	}

	render() {
		const { articleList, count, bookmarks } = this.state;
		return (
			<Container>
			  {count && <Count>Total results: {count}</Count>}
			  {articleList.map(item => {
			  	return item.pubtype[0] === 'Journal Article' ? ( //Display only journal articles
			  	<Card
			  	  item={item}
			  	  bookmarked={bookmarks.includes(item.uid) ? true : false}
			  	  key={item.uid} 
			  	/>
			   ) : null
			  })}
		    </Container>
		)
	}
}


export default ArticleListView;
