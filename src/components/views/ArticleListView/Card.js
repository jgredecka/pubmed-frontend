import React from 'react';
import Button from '@material-ui/core/Button';
import { StyledCard, Title, Journal, Authors, Link } from './styled';
import { addToBookmarks } from './../../../api/api';


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookmarked: props.bookmarked
		};
	}

	handleBookmarkClick = () => {
        const { uid } = this.props.item;
        addToBookmarks(uid)
        .then(response => this.setState({ bookmarked: true }))
        .catch(error => error.response)
	}

	render() {
        const { bookmarked } = this.state;
        const { uid, title, fulljournalname, pubdate, authors } = this.props.item;
		return (
          <StyledCard>
            <Link href={`https://pubmed.ncbi.nlm.nih.gov/${uid}/`}>
              <Title>
                {title}
              </Title>
            </Link>
            <Authors>
              {authors.map(item => (
                <span key={item.name}>{item.name} </span>
                ))}
            </Authors>
            <Journal>
              {fulljournalname} | {pubdate}
            </Journal>
            {bookmarked ? (
                <Button 
                  variant="contained" 
                  size="small" 
                  color="primary">
                  Bookmarked!
                </Button> 
                ) : (
                <Button 
                  variant="outlined" 
                  size="small" 
                  color="primary"
                  onClick={this.handleBookmarkClick}>
                  Add to bookmarks
                </Button>
                )
            }
          </StyledCard>
		)
	}
}


export default Card;