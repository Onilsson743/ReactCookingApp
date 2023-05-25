import React from 'react'
import Navbar from '../fullcomponents/Navbar';
import Card from '../smallcomponents/Card';

const Home = () => {
    var product1 = {
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        name: "Laxallad",
        description: "Laxsallad med kokta ägg och en fräsch citronsås"
      }
      var product2 = {
        imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80",
        name: "Sallad",
        description: "En erhört god hög med pankakor"
      }
  return (
      <div className="App">
          <Navbar />
          <div className='container recipies-display'>
              <Card key="1" item={product1} />
              <Card key="2" item={product2} />
              <Card key="3" item={product2} />
              <Card key="4" item={product1} />
          </div>
      </div>
  )
}

export default Home