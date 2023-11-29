import Link from "next/link";

export default function Custom404() {
  return<div style={{height:"100dvh",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
   <h1>404 / Page Not Found</h1>

  <Link href={"/"}> <button style={{padding:"7px",width:"130px",borderRadius:"6px",background:"#0D5DCD",color:"white"}}>Back</button></Link>
  
  
   </div>
}