import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'
import { getPop } from '../api/api'
import MovieList from '../components/movieList/MovieList'
import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";


// export default function getStaticProps() , na parte API é que se define funções de ir buscar info à API



export default function Home(props) {
  const router = useRouter();

  const [searchKey, setSearchKey] = useState("");

  const resetInputField = () => {
      setSearchKey("");
  }

  function getData(event) {
      setSearchKey(event.target.value);
  }
  

  

  
  const callSearchFunction = (event) => {
      event.preventDefault();
      const href = "find/" + searchKey + "/1";
      router.push(href);
      resetInputField();
         
  }

 return(
    <Layout>

      <form className={styles.wrapper}>
            <img src="/lupaico.png" className={styles.icon} alt=""></img>
            <input type="text" className={styles.inputS} value={searchKey} onChange={getData} />
            
            
            <input className={styles.searchButton} onClick={callSearchFunction} type="submit" value="SEARCH" />
            
        </form>

              <div className={styles.tpRate}> Most Popular </div>
             <MovieList props={props.results} />

            
               
     </Layout >
 )

};

export async function getServerSideProps() {
  const results = await getPop();
  
  
  return {
    props: {
      results,
    }, 
  }
}









