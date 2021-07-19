import styled from "styled-components"

export const HomeHeroSection = (props) => {

    return (
        <section className="h-50">
       {/* <Herosection > bglink={props.bglink}>*/}
                <div id="carouselExampleControls " class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="/rowan-freeman.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src="/rowan-freeman.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src="/rowan-freeman.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            {/* <div className="arrow-area"></div>
            <section>
                <h1 id="heroId">{props.title}</h1>
                <p>{props.text}</p>
            </section>
            <div className="arrow-area"></div> */}

        {/* // </Herosection> */}

        </ section>
    )
}
export const HeroSection = (props) => {

    return (
        <section className="h-50">
       <Herosection  bglink={props.bglink}>
                
            <div className="arrow-area"></div>
            <section>
                <h1 id="heroId">{props.title}</h1>
                <p>{props.text}</p>
            </section>
            <div className="arrow-area"></div>

        </Herosection>

        </ section>
    )
}
export const CategoryHeroSection = (props) => {

    return (
        <CatHerosection bglink={props.bglink}>
            <div className="arrow-area"></div>
            <section>
                <h1 id="heroId">{props.title}</h1>
                <p>{props.text}</p>
            </section>
            <div className="arrow-area"></div>

        </CatHerosection>
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
const CatHerosection = styled.section `
    min-height: 35Vh;
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