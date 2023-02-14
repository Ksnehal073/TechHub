import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return <Wrapper>
      <footer>
        <div className="container grid grid-two-column">
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=WSMa_0_-5BE"
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="copyRight">
            <p>
              @{new Date().getFullYear()} Snehal Karki. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </Wrapper>
};

const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.black};
  
  
  footer {
    width:80%;
    margin:0 auto;
    padding: 1rem;

    .footer-subscribe,.footer-social,.copyRight{
      text-align:center;
    }

    input{
      padding: 1.4rem 2.2rem;
      border-style: solid;
      border-width: .1rem;
      text-transform: uppercase;
      font-size: 1.8rem;
      cursor: pointer;
      outline:none;
    }

    input[type="submit"]{
      background-color: ${({ theme }) => theme.colors.highLight};
        }

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      justify-content:center;
      gap: 1rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 4rem;
      hr {
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }

  }

  @media (max-width:${({ theme }) => theme.media.mobile}){

  input[type="submit"]{
      margin:2rem 0;
        }
  }

  footer{
    width:100%;
    padding:4rem 0;
  }
`;

export default Footer;