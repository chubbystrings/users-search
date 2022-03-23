import styled from "styled-components";

const About = () => {
  return (
    <AboutPage>
        <h1>Github finder</h1>
        <p>This is an app to search for Github users.</p>
    </AboutPage>
  )
}

const AboutPage = styled.div`
    h1{
        color: #fff;
        font-size: 2rem;
        font-weight: 600;
    }
`
 
export default About