import React, { useEffect, useState } from "react";
import "./Detail.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [item, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      });
  },[]);

  return (
    <>
     
      <div className="card">
        <div className="custom__card">
          <div className="custom__card__image">
           <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png.webp" alt="" />
          </div>
          <div className="custom__card__body">
            <div className="custom__card__body__name">
              <h3> Mehsulun adi: {item.name}</h3>
            </div>
            <div className="custom__card__body__price">
              <p>Price: ${item.price}</p>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default Detail;