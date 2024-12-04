import { useState } from 'react'
import PreviewCard from './product_preview_component/PreviewCard'


const product = {
  Header: "Gabrielle Essence Eau De Parfum",
  Text: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer- Creator for the House of CHANEL.",
  Price: 149.99,
  Discount: 169.99
}



function App() {
  return (
    <>
      <PreviewCard Product={product} />
    </>
  )
}

export default App
