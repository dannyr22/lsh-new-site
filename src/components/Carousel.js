import React from "react"

import Glide from "@glidejs/glide"

// new Glide(".glide").mount()

const Carousel = () => {
  return (
    <Glide>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">0</li>
            <li className="glide__slide">1</li>
            <li className="glide__slide">2</li>
          </ul>
        </div>
      </div>
    </Glide>
  )
}

export default Carousel
