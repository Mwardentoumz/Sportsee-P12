import Header from "./components/header/header";
import ActivityList from "./components/ActivityList/ActivityList";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Welcome() {
    return (
        <Wrapper>
            <Header />
            <Dashboard>
                <ActivityList />
                <Choose>
                    <Title>Select USER</Title>
                    <NavLink to="user/12">👦 Karl </NavLink>
                    <NavLink to="user/18">👩 Cecilia </NavLink>
                </Choose>
            </Dashboard>

        </Wrapper>
    );
}

const Wrapper = styled.div`

    text-align: center;
    height: 100%;
  `

const Dashboard = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  `;

const Title = styled.h2`
  margin: 4rem 0rem;
`;

const Choose = styled.div`
display: flex;
padding: 5rem;
flex-direction: column;`