import React from "react"
import { useNavigate } from "react-router-dom"
import DocumentTitle from "../changeTitle"

const Categories = () => {
  DocumentTitle("Categories || Bajrang Computers")
  const navigate = useNavigate()
  return <>
    <div class="container-fluid mt-5 card-group">
      <div onClick = {() => navigate('/categories/newproducts')} class="card px-2">
        <img src="/assets/NewProducts.avif" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">New Products</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div class="card px-2">
        <img src="/assets/MostPopularProducts5.jpg" class="p-5 card-img-top" alt="..."></img>
        <div className="p-3"></div>
        <div class="p-5 card-body">
          <h5 class="card-title">Most Popular Products</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>    </div>
      </div>

      <div class="card px-2">
        <img src="/assets/AboutOurVision.webp" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Best Value</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>    </div>
      </div>
    </div>
  </>
}

export default Categories