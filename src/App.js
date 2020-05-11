import React from 'react'
import './App.css'
import { layoutData } from './data'
import LayoutPrinter from './module/LayoutPrinter/index'

function App() {
  return (
    <div className='App'>
      <h1>Render Here</h1>
      {/* <LayoutBuilder */}
      {/*  saveLayout={d => console.log(d)} */}
      {/*  types={types} */}
      {/*  maxLevel={2} */}
      {/* /> */}
      <LayoutPrinter layout={layoutData} />
    </div>
  )
}

export default App
