import Head from 'next/head'
import Section from '../../components/section.js'
import styles from '../../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'
import { api } from '../../components/api.js'

var rendersource = api;

export default function Home() {
  console.log(rendersource.sections[0].type)
  const router = useRouter()
  const { pid } = router.query
  return (
    <div className={styles.body}>
      
      <Head>
        <title>Rhombus</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
         

      <Container  className={styles.relative}>
      
        {
        rendersource.sections.map((section)=>  
          <Section data={section}/>
        )}
        <p>{pid}</p>
      </Container>
         


      
    </div>
  )
}
