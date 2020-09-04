import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Header = styled.h1`
	font-size: 48px;
	padding-bottom: 15px;
`

const FormWrapper = styled.div`
`

const TextInput = styled(TextField)`
	&& {
		width: 75%;
		padding-bottom: 20px;
	}
`

const SearchButton = styled(Button)`
	width: 75%;
`


export {
	Header,
	TextInput,
	FormWrapper,
	SearchButton,
}