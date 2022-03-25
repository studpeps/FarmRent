import React from "react";
import "./Home.css";
import arrow from "./images/arrowHead.png"
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ searchText }, dispatch] = useStateValue();
  
  var items = [
    {
            "id":"12321341",
            "title":"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            "price":11.96,
            "rating":5,
            'image':"https://www.tafe.com/tractors/imt/thumb/TAFE-IMT-tractor-565.2.png"
    },
    {
            "id":"49538094",
            "title":"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
            "price":239.0,
            "rating":4,
            "image":"https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-500x500.jpg"
    },
    {
            "id":"4903850",
            "title":"JCB Tractor",
            "price":199.99,
            "rating":3,
            "image":"https://myknowledgebase.in/farming-tools-implements-and-equipment/spade-phawra/"
    },
    {
            "id":"12321341",
            "title":"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            "price":11.96,
            "rating":5,
            "image":"https://farmingbase.com/wp-content/uploads/2020/01/920px-Pickaxe-1.jpg"
    },
     {
           "id":"49538094",
            "title":"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
            "price":239.0,
            "rating":4,
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUQ58vl8fMMAqyHa4_8_9BTG00Di_DS37bg&usqp=CAU"
     },
    {
            "id":"4903850",
            "title":"JCB Tractor",
            "price":199.99,
            "rating":3,
            "image":"https://myknowledgebase.in/farming-tools-implements-and-equipment/spade-phawra/"
    },
     {
            "id":"12321341",
            'title':"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            "price":11.96,
            'rating':5,
            'image':"https://farmingbase.com/wp-content/uploads/2020/01/920px-Pickaxe-1.jpg"
     },
      {
            "id":"49538094",
            'title':"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
            'price':239.0,
            'rating':4,
            'image':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUQ58vl8fMMAqyHa4_8_9BTG00Di_DS37bg&usqp=CAU"
      },
        {
            "id":"12321341",
            "title":"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            "price":11.96,
            "rating":5,
            "image":"https://www.tafe.com/tractors/imt/thumb/TAFE-IMT-tractor-565.2.png"
        },
          {
            "id":"49538094",
            "title":"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
            "price":239.0,
            "rating":4,
            "image":"https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-500x500.jpg"
          },
          {
            "id":"12321341",
            "title":"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            "price":11.96,
            "rating":5,
            "image":"https://www.tafe.com/tractors/imt/thumb/TAFE-IMT-tractor-565.2.png"
          },
          {
            "id":"49538094",
            'title':"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
            "price":239.0,
            "rating":4,
            "image":"https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-500x500.jpg"
          },
          {
            "id":"4903850",
            "title":"JCB Tractor",
            "price":199.99,
            "rating":3,
            "image":"https://myknowledgebase.in/farming-tools-implements-and-equipment/spade-phawra/"
          },
          
          {
            "id":"49538094",
            "title":"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
            "price":239.0,
            "rating":4,
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUQ58vl8fMMAqyHa4_8_9BTG00Di_DS37bg&usqp=CAU"
          }
  ]

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://media.tehrantimes.com/d/t/2021/06/20/4/3808608.jpg"
          alt="hey cant see"
        />
        <div className="welcome_text">
        A place for all your
          <p>
          Farming needs
          </p>
        </div>

        <div className="arrow_head">
          <img src={arrow}/>
        </div>

        

        <div className="home__row">
            {
              items.
              filter((item)=>{
                if(searchText!="" && item.title.toLowerCase().includes(searchText.split(" ").join(" ").toLowerCase()))
                  return item;
                else if(searchText==="")
                  return item;
              })
              .map((item)=>{
                return  <Product
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
              })
            }
        </div>

      </div>
    </div>
  );
}

export default Home;
