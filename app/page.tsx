
import style from "./page.module.css";
import "./globals.css";
import Link from "next/link";
export default function Home(){
  return(
    <div>
      <h1>Countries List</h1>
      < h2>click on any button to show its data :</h2>
      
       <Link href="./country/pakistan" style={{margin:"10px",borderRadius:"10px",border:"2px solidblack",padding:"10px"}}
       >Pakistan</Link> 
       <Link href="./country/india" style={{margin:"10px",borderRadius:"10px",border:"2px solidblack",padding:"10px"}}
       >India</Link> 
       <Link href="./country/japan" style={{margin:"10px",borderRadius:"10px",border:"2px solidblack",padding:"10px"}}
       >Japan</Link>

    
        

      
    </div>
  );
}