import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

function ExampleComponent({href, className, title, description}) {
  return (
    <a href={href} className={className}>
      <h3>{title} &rarr;</h3>
      <p>{description}</p>
    </a>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Learning about <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <ExampleComponent 
            href={"/hooks/hooks-examples"} 
            className={styles.card} 
            title={"Hooks"}
            description={"See examples of hooks and state in React Components."}
          />

          <ExampleComponent 
            href={"/components/accordion-usage"} 
            className={styles.card} 
            title={"Components"}
            description={"Learn more about components and component libraries."}
          />

          <ExampleComponent 
            href={"/api-calls/api-calls"} 
            className={styles.card} 
            title={"API Example"}
            description={"See examples of API calls and responses"}
          />

          <ExampleComponent 
            href={"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"} 
            className={styles.card} 
            title={"Deploy"}
            description={"Instantly deploy your Next.js site to a public URL with Vercel."}
          />
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
