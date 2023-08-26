'use client'
import Head from 'next/head'
import Image from 'next/image'
import styles from './login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, signOut } from 'next-auth/react'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [userMsg, setUserMsg] = useState('')

  const handleOnChangeEmail = (e) => {
    setUserMsg('')
    const emailInput = e.target.value
    setEmail(emailInput)
  }
  const handleLoginWithEmail = (e) => {
    e.preventDefault()
    console.log('Login button')
    signIn()
    // if (email) {
    //   if (email === 'marc@gmail.com') {
    //     console.log('route to dashboard')
    //     router.push('/')
    //   } else {
    //     setUserMsg('There was a problem logging in')
    //   }
    // } else {
    //   setUserMsg('Please enter a valid email address')
    // }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign in</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <a href='/' className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <Image
                src='/static/youTube.png'
                placeholder='blur'
                blurDataURL={'/static/youTube.png'}
                alt='youtube logo'
                width={128}
                height={34}
              />
            </div>
          </a>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            type='email'
            name='signin'
            placeholder='Email Address'
            id=''
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />
          <p className={styles.userMsg}>{userMsg}</p>
          <button className={styles.loginBtn} onClick={handleLoginWithEmail}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login
