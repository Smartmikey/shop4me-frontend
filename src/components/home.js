import { HeroSection } from "./hero";
import { Button } from "./styled";
// import "../App.css"
import { CategoryImage } from "./category-image";
import { Title } from "./Title";
import { Patners } from "./patners";
import { useCookies } from "react-cookie";
import { CookieHandler } from "cookie";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_STORE } from "../query";
function Home() {

  const {error, data} = useQuery(GET_STORE)
 
  // const [cookie, setCookie, removeCookie] = useCookies("")
  const patners = [
    {
      id: 1,
      name: "Dangote",
      url: "/logo192.png"
    },
    {
      id: 2,
      name: "Apple",
      url: "/logo192.png"
    },
    {
      id: 3,
      name: "Google",
      url: "/logo192.png"
    },
    {
      id: 4,
      name: "Samsung",
      url: "/logo192.png"
    },
    {
      id: 5,
      name: "Tecno",
      url: "/logo192.png"
    },
    {
      id: 6,
      name: "LG",
      url: "/logo192.png"
    },
  ]
  const category = [
    {
      id: 1,
      name: "Dangote",
      url: "/logo192.png"
    },
    {
      id: 2,
      name: "Apple",
      url: "/logo192.png"
    },
    {
      id: 3,
      name: "Google",
      url: "/logo192.png"
    },
    {
      id: 4,
      name: "Samsung",
      url: "/logo192.png"
    },
    {
      id: 5,
      name: "Tecno",
      url: "/logo192.png"
    },
    {
      id: 6,
      name: "LG",
      url: "/logo192.png"
    },
  ]
  console.log(data);
  return (
    <>
    {/* <CookieHandler /> */}
      <HeroSection title="SHOP IN US SHIP TO NIGERIA" text="lorem ipsum The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link" bglink="/rowan-freeman.jpg" />
      <section className="featured-category">
        <div className="container mt-4 py-5">
        <h2>Featured stores</h2>
        <p>At mattis quis mi in hac proin metus velit. Id consectetur odio magnis sollicitudin purus mauris. Adipiscing purus sodales velit sem. Purus lacus faucibus feugiat diam. At in ultrices egestas.</p>
        <CategoryImage category={data?.getStores} />
        <Button text="browse more categories"/>
        </div>
      </section>
      <section className="container p-md-5">
        <div className="row m-md-5">
          <div className="col-md-6 px-4 col-lg-6 col-sm-12">
            <h2>About us</h2>
            <p>
              At mattis quis mi in hac proin metus velit. Id consectetur odio magnis sollicitudin purus mauris. Adipiscing purus sodales velit sem. Purus lacus faucibus feugiat diam. At in ultrices egestas sollicitudin ipsum. Sollicitudin ipsum duis faucibus lobortis malesuada. Potenti sagittis at egestas quis nunc viverra orci, volutpat. Lacinia ac magna pellentesque vitae id risus scelerisque non. Ultrices a
            </p>
          </div>
          <div className="col-md-6 px-4 col-lg-6 col-sm-12">
            <img src="About-us.jpg" className="w-100" />
          </div>
        </div>
      </section>
     
      <section className="container">
        <div className="mx-auto text-center m-md-5 py-5 m-sm-2">

          <h2 className="m-4">Do you have something <br /> special in mind to order?</h2>
          <p>At mattis quis mi in hac proin metus velit. Id consectetur odio magnis sollicitudin purus mauris. Adipiscing purus sodales velit sem. Purus lacus faucibus feugiat diam. At in ultrices egestas sollicitudin ipsum. Sollicitudin ipsum duis faucibus lobortis malesuada. Potenti sagittis at egestas quis nunc viverra orci, volutpat. Lacinia ac magna pellentesque vitae id risus scelerisque non. Ultrices a</p>
          <img src="Do you have.jpg" className="w-100" />
          <Button text="Order now" />
        </div>
      </section>
      <section>
        <div className="container " >
        <div className=" row" >
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-md-6 col-sm-12 mt-5">
                <img src="rowan-freeman.jpg" className="w-100" />
                <img src="rowan-freeman.jpg" className="w-100 mt-4" />
              </div>
              <div className="col-md-6 col-sm-12">
                <img src="rowan-freeman.jpg" className="w-100" />
                <img src="rowan-freeman.jpg" className="w-100 mt-4" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 p-md-5 my-auto">
            <h2>Shop through our<br /> numerous shopping list</h2>
            <p>At mattis quis mi in hac proin metus velit. Id consectetur odio magnis sollicitudin purus mauris. Adipiscing purus sodales velit sem. Purus lacus faucibus feugiat diam. </p>
          </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto m-5">
        <Patners patners={patners} />
      </section>
    </>
  );
}

export default Home;
