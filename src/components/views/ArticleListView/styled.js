import styled from 'styled-components';


const Container = styled.div`
	display: flex;
	max-width: 800px;
	margin-top: 100px;
	margin-left: 320px;
	margin-right: auto;
	flex-direction: column;
	text-align: left;
`

const StyledCard = styled.div`
	width: 100%;
	height: 250px;
	margin-bottom: 40px;
`

const Title = styled.p`
	color: #3d6eb3;
	font-size: 17px;
`

const Authors = styled.div`
	font-size: 13px;
`

const Journal = styled.p`
	color: black;
	font-size: 13px;
	font-weight: 600;
`
const Link = styled.a`
    color: #3d6eb3;
	visited {
		color: #3d6eb3;
    }
    &:active {
        color: #3d6eb3;
    }
`

const Count = styled.div`
	font-size: 15px;
	margin-bottom: 30px;
`


export {
	Container,
	StyledCard,
	Title,
	Journal,
	Authors,
	Link,
	Count,
}