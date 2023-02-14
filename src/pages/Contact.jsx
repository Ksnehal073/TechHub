import styled from 'styled-components'
import { Button } from '../components/Button';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Get in touch</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3542065027955!2d77.69693424965806!3d12.884930620217542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae132a7ef38a39%3A0xbf888e2c3943f7b3!2sBangalore%20Technological%20Institute!5e0!3m2!1sen!2sin!4v1676087653278!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container grid grid-two-column">
        <div className="contact-img">
          <picture>
            <img src="../public/images/contact.svg" alt="Contact Image" />
          </picture>
        </div>
        <div className="contact-form">
          <h4>Contact us</h4>
          <form
            action=""
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <Button className='btn hireme'>
                <NavLink to='/'>Hire me</NavLink>
            </Button>
          </form>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`


  margin:0 auto;

  .container {
    padding:8rem 0;
      max-width:120rem;
      display: grid;
      .contact-img {
        display: flex;
        justify-content: center;
        align-items: center;
        picture {
         text-align: center;
        }
        img{
          width:80%;
        }
      }

     .contact-form{
      width:80%;
      margin:0 auto;
      h4{
        font-size:2rem;
        margin:2rem 0;
      }
      .contact-inputs{
        display:flex;
        flex-direction:column;
        gap:2rem;
        justify-content:center;

        input{
          padding:1rem;
          outline:none;
          border-radius:2rem;
          border:1px solid ${({ theme }) => theme.colors.black};
        }

        textarea{
          resize:none;
          outline:none;
          border-radius:1rem;
          padding:1rem;
        }
      }
     } 

     

      }

.common-heading{
  color:${({ theme }) => theme.colors.black};
}
 
    
  `;

export default Contact
