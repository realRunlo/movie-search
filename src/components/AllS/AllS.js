import styles from "./AllS.module.css"
import {useRouter} from "next/router"
import Link from "next/link"

const Pages = ({props})=>{
  const router = useRouter();
  console.log(router.query.key);
  
  var pags = [];
  for(var i=1;i<=props.total_pages;i++){
      pags.push(i);
  }
  return(
    <div className={styles.container}>
    {pags.map((i) =>(
        <Link
        href={{
          pathname: router.pathname,
          query: { key:router.query.key ,pag: i }
        }}
      >
      <button className={styles.btt}>{i}</button>
      </Link>
    ))}
       
    </div>
  )
    


};

export default Pages;