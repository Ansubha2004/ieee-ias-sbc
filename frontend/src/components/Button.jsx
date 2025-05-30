import React from 'react'
import clsx from "clsx"

function Button({themecss,click,submit,icon,iconcss,Content}) {
  return (
    <button onClick={click} onSubmit={submit} className={clsx("flex items-center",themecss)}>
        <a>{Content}</a>
        <img src={icon} className={iconcss} alt="" />
    </button>
  )
}

export default Button
