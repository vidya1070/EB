import React from "react";
import DietHome from "./DietHome";
import GetAllCustomers from "./GetAllCustomers";
import GetAllPackages from "./GetAllPackages";
import GetAllUsers from "./GetAllUsers";
import Profiledemo from "./Profiledemo";



export default function Customer() {
  return (
        <>

      <div className="container-fluid ">
        <p class="display-4 text-danger"><b>
          WE ARE GYM AND FITNESS</b>
          <br />
          <i class="display-5 text-warning">Helping People live longer, Happier And Healthier lives

          </i></p>
        <img class="bg-img" src="https://img.freepik.com/free-photo/3d-render-dumbbells-set-realistic-detailed-close-up-view-isolated-sport-element-fitness-dumbbell-design_460848-7418.jpg?size=626&ext=jpg" />

        <p class="display-3 text-danger"><b>Our Story</b></p>

        <p>
          Gym and Fitness was founded in 2002 as a family owned and operated business specialising in supplying high-quality gym equipment at great prices.

          Instead of being just another gym equipment retailer, our founders wanted to be the best in the industry and set their minds to doing so! Over the last two decades Gym and Fitness has grown into one of Pune's largest online fitness equipment retailers, helping thousands of customers live longer, happier and healthier lives.

        </p>
        <p >
          <b class="display-3 text-danger">Our Culture</b>
          <p>
            We know that building a positive culture is incredibly important. We believe in encouraging, supporting, challenging, learning and growing to be the best! Our flexible working solutions, gym rebates and educational opportunities create a positive work/life balance for all our employees.

            We believe in giving back and offering time, money and products to volunteer services and community organisations. We’re committed to improving individuals' health, fitness, and well-being by supporting global and local charities, local sports teams, and events.
          </p>



        </p>
        </div>

        {/* <GetAllUsers/>
        <GetAllPackages/> */}
        {/* <DietHome/> */}
        {/* <Profiledemo/> */}
        {/* <GetAllCustomers/> */}
      </>
      );
}