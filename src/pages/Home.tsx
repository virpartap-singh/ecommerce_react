import React from 'react'
import Layout from '../container/layout/Layout'
import Slider from '../container/Slider/SliderComponent'
import Categories from '../container/categories/Categories'

const Home:React.FC=():React.ReactElement =>{
  return (
    <div>
        <Layout>
            <Slider />
            <Categories />
        </Layout>
    </div>
  )
}

export default Home