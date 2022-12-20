import style from '../styles/headers.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Headers() {
  const [nav, setNav] = useState([])

  const router = useRouter()

  const click = e => {
    e.preventDefault()
  }

  useEffect(() => {
    fetch('/api/nav').then(async resp => setNav(await resp.json()))
  }, [])

  return (
    <div className={style.headers}>
      <div className="container">
        <div className={style.sections}>
          <div className={style.sections__item}>
            lhab
          </div>
          {/* <div className={style.sections__item}>
            <ul className={style.nav}>
              {nav.map(({ name, href }, index) => (
                <li key={index} className={style.nav__item}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}