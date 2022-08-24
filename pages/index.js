import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Homepage</h1>
      <p>
        lorem ipsumVoluptate commodo occaecat occaecat officia dolor magna. Quis
        sint ipsum minim minim nisi. Elit quis mollit officia nostrud qui
        consequat. Aliquip mollit exercitation sit deserunt velit minim id culpa
        dolor. Mollit ut dolore aliquip eu qui exercitation aliqua dolor in quis
        officia consequat veniam. In voluptate cillum eiusmod laboris
        reprehenderit deserunt excepteur sit quis incididunt proident commodo
        enim laboris. Lorem Lorem velit excepteur adipisicing.
      </p>
      <p>
        lorem ipsumAdipisicing in cupidatat qui consectetur mollit commodo
        reprehenderit esse ut eu. Amet est pariatur culpa nulla irure Lorem quis
        amet aliquip sint laboris. Nulla excepteur velit minim nulla occaecat ad
        tempor ex aliquip quis aliquip cupidatat aliquip amet.
      </p>
      <Footer/>
    </div>
  )
}
