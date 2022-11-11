import React from 'react'

export default function Hero({hero,children}) {
  return (
    <div className={hero}>
      {children}
    </div>
  )
}

Hero.defaultProps = {
  hero: "defaultHero"
};