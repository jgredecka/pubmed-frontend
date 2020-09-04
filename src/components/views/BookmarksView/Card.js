import React from 'react';
import { StyledCard, Title, Link } from './styled';


const BookmarkCard = ({ title, uid }) => {
	return (
		<StyledCard>
		  <Link href={`https://pubmed.ncbi.nlm.nih.gov/${uid}/`}>
            <Title>
              {title}
            </Title>
          </Link>
		</StyledCard>
		)
}


export default BookmarkCard;