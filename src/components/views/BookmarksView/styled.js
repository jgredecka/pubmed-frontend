import styled from 'styled-components';


const Container = styled.div`
	display: flex;
	max-width: 800px;
	margin-top: 50px;
	margin-left: 320px;
	margin-right: auto;
	flex-direction: column;
	text-align: left;
`

const StyledCard = styled.div`
	width: 100%;
	height: 100px;
`

const Title = styled.p`
	color: #3d6eb3;
	font-size: 15px;
`

const Link = styled.a`
    color: #3d6eb3;
	visited {
		color: #3d6eb3;
    }
    &:active {
        color: #3d6eb3;
 `

 export {
 	Container,
 	StyledCard,
 	Title,
 	Link,
 }