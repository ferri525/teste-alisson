import styled from 'styled-components';

export const Container = styled.div`
	height: 70px;
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color:#008000;
	border-radius: 5px;
    margin-top:1.5rem;

	@media (min-width: 768px) {
		width: clamp(25rem, 40%, 500px);
	}
`;

export const Button = styled.button`
	height: 100%;
	width: 100%;
	border-radius: 5px;
	border: 3px solid #008000;
	text-align: center;
	font-size: 1.5em;
	font-weight: bold;
	transition: transform 0.2s;
	color: #fff;
    background-color: #32CD32;


	&:hover,
	&:focus {
		transform: translate(-10px, -10px);
        cursor: pointer;
	}

`;