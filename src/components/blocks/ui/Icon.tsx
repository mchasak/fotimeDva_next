import React from 'react'
import clsx from 'clsx'
import IcoMoon from 'react-icomoon'

import iconSet from './selection.json'

type IconPropsType = {
  icon: string
  size?: number
  onClick?: () => void
  className?: string
}

const Icon = ({ icon, size, onClick, className }: IconPropsType) => {
  const hasOnClick = typeof onClick === 'function'
  return (
    <IcoMoon
      className={clsx(hasOnClick && 'hover:cursor-pointer', className)}
      onClick={onClick}
      iconSet={iconSet}
      icon={icon}
      size={size}
    />
  )
}

export default Icon
