
import {useRouter} from 'next/router';
import {useState,useEffect} from 'react';
import {findMovies} from '../../../api/api'
import Layout from '../../../components/Layout/Layout'
import MovieList from '../../../components/movieList/MovieList'
import AllS from '../../../components/AllS/AllS';
import styles from '../../../styles/Home.module.css'

export default function SearchPage(props){
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
          router.push({
            pathname: router.pathname,
            query: {key:searchKey, pag: "1"},
        },)
        resetInputField();
        
        
    
    }
    

    if(props.results.total_results==0){
        return(
            <Layout>
                  <form className={styles.wrapper}>
                <img src="/lupaico.png" className={styles.icon} alt=""></img>
                <input type="text" className={styles.inputS} value={searchKey} onChange={getData} />
                 <input className={styles.searchButton} onClick={callSearchFunction} type="submit" value="SEARCH" />
            
                </form>
                <p className={styles.notFound}>Not found...</p>
            </Layout>
        
        )
    }
    
    return(
        <Layout>
            <form className={styles.wrapper}>
            <img src="/lupaico.png" className={styles.icon} alt=""></img>
            <input type="text" className={styles.inputS} value={searchKey} onChange={getData} />
             <input className={styles.searchButton} onClick={callSearchFunction} type="submit" value="SEARCH" />
            
             </form>
             <p className={styles.found}>Results for "{router.query.key}"</p>
            <MovieList props={props.results}/>
            <AllS props={props.results}/>
        
        
        </Layout>
        )
}


export async function getServerSideProps(context) {
  
    const results = await findMovies(context.params.key,context.params.pag);
    

   
    return {
      props: {
        results,

      }, 
      
    }
 }
