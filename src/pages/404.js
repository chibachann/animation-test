// src/pages/404.js
import React from 'react'
import { Link } from 'gatsby'

const NotFound = () => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/">トップページへ戻る</Link>
    </div>
  )
}

export default NotFound
