'use client'
import Head from 'next/head'
import Image from 'next/image'
import styles from './login.module.css'

const handleLoginWithEmail = (e) => {
  e.preventDefault()
  console.log('Login button')
}

const Login = () => {
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
                src='/static/netflix.svg'
                placeholder='blur'
                blurDataURL={'/static/netflix.svg'}
                alt='netflix logo'
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
            type='text'
            name='signin'
            placeholder='Email Address'
            id=''
            className={styles.emailInput}
          />
          <p className={styles.userMsg}></p>
          <button onClick={handleLoginWithEmail}>Sign In</button>
        </div>
      </main>
    </div>
  )
}

export default Login
