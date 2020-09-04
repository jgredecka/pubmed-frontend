import React from 'react';
import { getBookmarks, getSummaryDocs } from './../../../api/api';
import { Container } from './styled';
import BookmarkCard from './Card';


class BookmarksView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookmarks: [],
		}
	}

	componentDidMount() {
		let savedArticles;
		let params = {
			db: 'pubmed',
			retmode: 'json',
			email: 'justynagredecka@outlook.com',
			tool: 'pubmedApi',
		}
		getBookmarks()
		.then(response => {
			params.id = response.data.toString();
			getSummaryDocs(params)
			.then(response => {
				savedArticles = Object.values(response.data.result);
				savedArticles.pop();
				this.setState({
					bookmarks: savedArticles
				})
			})
		})
	}

	render() {
		const { bookmarks } = this.state;

		return (
			<Container>
			{bookmarks.map(item => (
				<BookmarkCard 
				  title={item.title}
				  uid={item.uid}
				  key={item.uid} 
				/>
				))}
			</Container>
		)
	}
}


export default BookmarksView;