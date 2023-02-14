import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import {useGlobalStyle} from '../context'


const Hero = () => {
    const {name,image,para} = useGlobalStyle();
    console.log(para)
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section hero-data">
                    <p className='hero-top-data'>Hi There, I'm</p>
                    <h1 className='hero-heading'>{name}</h1>
                    <p className='hero-para'>{para}</p>
                    <Button className='btn hireme'>
                        <NavLink to='/contact'>Hire me</NavLink>
                    </Button>
                </div>
            
                <div className="section-hero-image">
                    <picture>
                        <img src={image} alt="Hero Image" className='hero-img' />
                    </picture>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 12rem 0;
    max-width:120rem;
    margin:0 auto;

    .section-hero-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .btn {
        max-width: 16rem;
    }

    .hero-top-data {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.black};
    }

    .hero-heading {
        text-transform: uppercase;
        font-size: 6rem;
    }

    .hero-para {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
    }

    .section-hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    picture {
        text-align: center;
    }

    .hero-img {
        max-width: 80%;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 7.2rem;
        }
    }
`

export default Hero
