// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

const Box = ({size = 'medium', color, children}) => {
  // const myStyles = {fontStyle: 'italic'}

  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', backgroundColor: color}}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" color="lightblue">
        small lightblue box
      </Box>
      <Box size="medium" color="pink">
        medium pink box
      </Box>
      <Box size="large" color="orange">
        large orange box
      </Box>
    </div>
  )
}

export default App
