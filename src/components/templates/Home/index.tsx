import type { NextPage } from 'next'
import styles from './Home.module.sass'

import Button from '../../molecules/Button'

const Home: NextPage = () => (
  <div className={styles.home}>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>

        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>

    <Button>Hello Next</Button>
  </div>
)

export default Home
