import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;

}

::-webkit-scrollbar{
    width:1rem;
}

::-webkit-scrollbar-track{
    background-color:${({theme})=>theme.colors.bg}
}
::-webkit-scrollbar-thumb{
    background:${({ theme }) => theme.colors.highLight};
    border-radius:9px;
}



h1{
    font-size: 6rem;
    font-weight: 900;
}

h2 {
     color: ${({ theme }) => theme.colors.white};
     font-size: 4.4rem;
     font-weight: 300;
     text-align: center;
  }

h3 {
    font-size: 1.8rem;
    font-weight: 400;
    text-align:center;
}

p {
    opacity: .8;
    font-size: 1.8rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight:400;
}

a {
    text-decoration: none;
    font-size:2rem;
}

li{
    list-style: none;
}

.grid {
    display: grid;
    gap: 9rem;
}

.grid-two-column {
    grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
    grid-template-columns: repeat(3, 1fr);
}


.common-heading{
    color:${({theme})=>theme.colors.white};
    padding:4rem;
    font-weight:500;
}

.common-heading::after{
    content:'';
    position:relative;
    width:10rem;
    height:0.5rem;
    display:block;
    bottom:0;
    background-color:${({ theme }) => theme.colors.highLight};
    margin:0 auto;
}


${'' /* Responsive */}
@media (max-width:${({theme})=>theme.media.tab}){
.container{
    padding:0 3.2rem;
}

.grid-three-column{
    grid-template-columns:1fr 1fr;
}
}

@media (max-width:${({ theme }) => theme.media.mobile}){

    .grid{ 
        gap:3.2rem;
    }

    .grid-two-column,.grid-three-column{
        grid-template-columns:1fr;
    }
    .common-heading{
        font-size:2rem;
}

 
}


`