import React from "react";
import SideBar from "../components/Sidebar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  return (
    <div className="section flex  justify-center w-full gap-[10px]">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start main w-[90%]">
        <div className="side w-[25%]">
          <div className="Sidebar">
            <SideBar />
          </div>
        </div>

        <div className="content w-[60%] flex flex-col gap-5 pb-5 mt-4">
          <h1 className="text-[#f38f50]  font-bold text-xl md:text-2xl md:font-extrabold">
            Welcome to Bethany's Pie Shop
          </h1>
          <img
            src="/BethanysPieShop/images/hero.jpg"
            alt=""
            className="w-[100%]"
          />
          <h1 className="font-bold text-xl">Our History</h1>
          <p className=" font-semibold">
            Welcome to Bethany's Pie Shop, where pie-baking perfection meets
            convenience! For countless years, Bethany's passion for crafting the
            most scrumptious pies has been an unmatched delight. Our journey
            began in 2013 when we unveiled our first charming store in the heart
            of Brussels (Belgium), nestled in a cozy little street near the
            illustrious Grand Market. It was here that our pies first captured
            the hearts and taste buds of people from every corner of the globe,
            from delectable soft cakes to heavenly cheesecakes and tantalizingly
            spiced apple pies. Our store's extraordinary success was nothing
            short of a culinary fairy tale.
          </p>
          <figure className="flex justify-center items-center flex-col">
            <img
              src="/BethanysPieShop/images/bethany.jpg"
              alt=""
              className="w-[90%]"
            />
            <figcaption>Bethany from Bethnay Pies Shop</figcaption>
          </figure>
          <p className=" font-semibold">
            As the demand for Bethany's divine creations soared, an incredible
            milestone was reached in 2015, when we proudly sold an astonishing
            100 pies each day! Naturally, our beloved Pie Shop had to evolve,
            and we relocated to a grander, more spacious building to better
            serve our cherished patrons. The love and support we received from
            our ever-growing community inspired us to explore new possibilities.
            In response to numerous heartfelt requests from pie enthusiasts far
            and wide, we knew the time had come to bring our mouthwatering
            treats to your doorstep. Thus, in 2023, the idea of our very own
            webstore was born: a virtual haven where you can now relish the
            delight of ordering Bethany's scrumptious pies from the comfort of
            your own home, no matter where you reside in the world. What sets us
            apart, you ask? At Bethany's Pie Shop, we believe in using only the
            finest, handpicked ingredients to create each and every masterpiece.
            We meticulously source the freshest fruits, creamiest cheeses, and
            most aromatic spices to ensure that every bite of our pie is an
            unrivaled, tantalizing experience.
          </p>

          <p>
            Download our full{" "}
            <a
              href="/BethanysPieShop/downloads/Pricelist/Pricelist.pdf"
              download={"/BethanysPieShop/downloads/Pricelist/Pricelist.pdf"}
              className="text-blue-500 underline"
            >
              {" "}
              Prise List
            </a>
          </p>

          <hr
            style={{
              background: "gray",
              borderColor: "gray",
              height: "3px",
            }}
          />

          <h1 className="font-semibold text-xl md:text-2xl">
            Our Weekly Promotions
          </h1>
          <h1 className="font-semibold text-xl md:text-2xl">Pecan Pie</h1>
          <img
            src="/BethanysPieShop/images/pieoftheweek.jpg"
            alt=""
            className="w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
