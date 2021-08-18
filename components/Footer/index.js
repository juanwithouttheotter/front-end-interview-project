import styled from "styled-components";

const Foot = styled.div`
height: 2.5rem; 
width: 100%;
color: white;
background: #121212;
background-repeat: repeat;
background-attachment: scroll;
background-position: 0% 0%;
position: fixed;
bottom: 0pt;
left: 0pt;
`

const Index = () => {
    return (
        <Foot>
            Footer
        </Foot>

    );
}

export default Index;