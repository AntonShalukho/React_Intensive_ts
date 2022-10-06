import React from 'react'
import style from './ErrorPage.module.css'

const ErrorPage: React.FC = () => {
  return (
      <div className={style.wrapper}>
        <div className={style.errorText}>Sorry(( Page not found</div>
      </div>
  )
}

export default ErrorPage