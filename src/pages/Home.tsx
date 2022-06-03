import React from 'react'
import Layout from '../container/layout/Layout'
import Slider from '../container/Slider/SliderComponent'
import Categories from '../container/categories/Categories'
import Products from '../container/products/Product'
import Newsletter from '../container/newsletter/Newsletter'

const Home:React.FC=():React.ReactElement =>{
  return (
    <div>
        <Layout>
            <Slider />
            <Categories />
            <Products/>
            <Newsletter />
        </Layout>
    </div>
  )
}

export default Home