import styled from "styled-components"

export const HeroSection = (props) => {

    return (
        <Herosection bglink={props.bglink}>
            <div className="arrow-area"></div>
            <section>
                <h1 id="heroId">{props.title}</h1>
                <p>{props.text}</p>
            </section>
            <div className="arrow-area"></div>

        </Herosection>
    )
}

const Herosection = styled.section `
    min-height: 65Vh;
    width: 100%;
    background: black;
    padding: 3rem;
    overflow: hidden;
    background: #C33764;  /* fallback colour. Make sure this is just one solid colour. */
    background: -webkit-linear-gradient(to right, rgba(0,74,173,.7), rgba(0,33,76,.7)), url('${props=> props.bglink }');
    background: linear-gradient(to right, rgba(0,74,173,.7), rgba(0,33,76,.7)), url("${props=> props.bglink }"); /* The least supported option. */
    background-size: cover;
    background-position: center;
    display: flex;

    .arrow-area {
        width: 20%;

    }
    section {
        color: #fff;
        width: 59%;
        text-align: center;
        margin: auto;
        h1 {
            font-size: 4rem;
            text-transform: uppercase;
            margin: 0 auto;
            color: #fff;
        }
        p {
            font-size: 1.3rem;
            margin-top: 30px;
        }
    }

    #heroId {
        @media (max-width: 400px){
            font-size: 3rem;
        }
    }

`