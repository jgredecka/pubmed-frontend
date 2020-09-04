import React from 'react';
import Container from './../../Container/Container';
import { Header, TextInput, FormWrapper, SearchButton } from './styled';


class SearchView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: '',
		}
	}

	handleInputChange = (event) => {
		const { value } = event.target;
		this.setState({
			keyword: value,
		})
	}

	handleClickSearch = () => {
		const { keyword } = this.state;
		this.props.history.push(
			`/articles/?term=${keyword}&db=pubmed&retmode=json&retmax=20&email=justynagredecka@outlook.com&tool=pubmedApi`
			)
	}
	
	render() {
		return (
			<Container>
		      <Header>
		        Search articles
		      </Header>
		      <FormWrapper>
		        <TextInput
		          name="keyword" 
		          id="keyword outlined-basic" 
		          label="Keywords, e.g. lung cancer" 
		          variant="outlined"
		          onChange={this.handleInputChange} 
		        />
		        <SearchButton 
		          variant="contained" 
		          color="primary" 
		          size="large"
		          onClick={this.handleClickSearch}
		        >
		          Search
		        </SearchButton>
	          </FormWrapper>
		    </Container>
		)
	}
}



export default SearchView;