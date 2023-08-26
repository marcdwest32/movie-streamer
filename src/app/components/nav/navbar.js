'use client'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'

const Navbar = () => {
  //   const [username, setUsername] = useState('')
  let username = null
  const { data: session } = useSession()
  if (session) {
    // console.log(JSON.stringify(session.user))
    // setUsername(session.user.name)
    username = session.user.name
  }

  const [dropdown, showDropdown] = useState(false)
  const handleShowDropdown = (e) => {
    e.preventDefault()
    showDropdown(!dropdown)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    signOut()
  }

  const handleLoginWithEmail = (e) => {
    e.preventDefault()
    signIn()
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href='/' className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src='/static/youTube.png'
              alt='youtube logo'
              width={128}
              height={34}
            ></Image>
          </div>
        </a>
        <ul className={styles.navItems}>
          <Link href={'/'}>
            <li className={styles.navItem}>Home</li>
          </Link>
          <Link href={'/browse/my-list'}>
            <li className={styles.navItem2}>List</li>
          </Link>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src='/static/dropdown.svg'
                alt='dropdown'
                width={24}
                height={24}
              ></Image>
            </button>
            {dropdown && (
              <div className={styles.navDropdown}>
                <div>
                  {username ? (
                    <button className={styles.linkName} onClick={handleLogout}>
                      Sign Out
                    </button>
                  ) : (
                    <button
                      className={styles.linkName}
                      onClick={handleLoginWithEmail}
                    >
                      Sign In
                    </button>
                  )}
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
