import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [visible, setVisible] = useState();

  const listenScroll = () => {
    const height = 20;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > height) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll)
  }, [])
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  return <Wrapper>
    {
      visible &&
      <div className="top-btn" onClick={goToBtn}>
        <FaArrowUp className="top-btn--icon" />
      </div>
    }
  </Wrapper>
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn{
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.highLight};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .top-btn--icon{
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

     @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
  }
`

export default GoToTop
