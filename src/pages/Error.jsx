import styled from "styled-components";
import { Button } from "../components/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <Wrapper>
        <picture>
            <img src="../images/error.svg" alt="error" />
        </picture>
            <NavLink to="/">
                <Button className="btn"> Go Back</Button>
            </NavLink>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  picture{
    text-align:center;
    img{
        width:50%;
        height:50%;
    }
  }

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error;