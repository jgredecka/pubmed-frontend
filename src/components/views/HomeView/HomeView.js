import React from 'react';
import Container from './../../Container/Container';
import { HomeHeader, Description } from './styled';


const HomeView = () => {
	return (
		<Container>
		  <HomeHeader>
		    Search and browse biomedical literature articles.
		  </HomeHeader>
		  <Description>
		  	Search, browse  and save biomedical and life sciences 
		  	articles from a variety of life science journals.
		  </Description>
		</Container>
		)
}


export default HomeView;