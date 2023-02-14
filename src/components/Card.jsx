import styled from "styled-components";

const Card = () => {
    const cards = [
        {
            title: 'UX and UI design',
            image: './images/design.png',
            para: 'We start designing a web app with the analysis of target audience and planning convenient, quick and frictionless user journeys. Along the way, our UI designers join in to wrap the interface into a stylish cover.'
        },
        {
            title: 'Front End Development',
            image: './images/web.png',
            para: "I can develop website for everyone's need.I can develop portable, SEO friendly and optimized websites with up - to - date tools.",
        },
        {
            title: 'Integration',
            image: './images/integration.png',
            para: "We start designing a web app with the analysis of target audience and planning convenient, quick and frictionless user journeys. Along the way, our UI designers join in to wrap the interface into a stylish cover.",
        },
        {
            title: 'Back-end Development',
            image: './images/backend.png',
            para: "Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Node.js, PHP, Go."
        }
        ,
        {
            title: 'Android Development',
            image: './images/android.png',
            para: "I can develop Android app for everyone's need.I can develop portable, SEO friendly and optimized websites with up - to - date tools.",
        },

    ]
    return (
        <CardWrapper>
            <h2 className="common-heading">Our Services</h2>
            <div className="container grid grid-three-column">
                {
                    cards.map((items, index) => {
                        return (
                            <div key={index} className='card'>
                                <div className="icon-wrapper">
                                    <img src={items.image} alt="" />
                                </div>
                                <h3>{items.title}</h3>
                                <p>{items.para}</p>
                            </div>
                        )
                    })
                }
            </div>
        </CardWrapper>
    )
}
const CardWrapper = styled.section`
 padding:2rem;
 background-color:${({ theme }) => theme.colors.black};
 .container{
    max-width:120rem;
    margin:0 auto;
 }

.card {
  margin:0 auto;
  width: 100%;
  height: 35rem;
  padding: 2em 1.5em;
  background: linear-gradient(#ffffff 50%,${({ theme }) => theme.colors.highLight} 50%);
  background-size: 100% 200%;
  background-position: 0 2.5%;
  border-radius: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.5s;

.icon-wrapper {
    color: #ffffff;
    border-radius: 50%; 
    text-align:center;
}

img{
    height:10rem;
}

h3 {
    font-size: 2rem;
    font-weight: 600;
    margin: 1em 0;
}

p { 
    font-size: 1.5rem;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align:center;
}

&:hover {
  background-position: 0 100%;
}
&:hover .icon-wrapper {
  background-color: #ffffff;
}
&:hover h3{
 color:${({ theme }) => theme.colors.white}
}
&:hover p {
  color:${({ theme }) => theme.colors.white}
}
 
}

@media (max-width:${({ theme }) => theme.media.mobile}){
    .container{
        padding: 1rem 0;
    }
.card{
    height:100%;
}
}

`

export default Card
