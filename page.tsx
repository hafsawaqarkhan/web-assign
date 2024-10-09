
import Link from "next/link"
export default function Home() {
  return (
    <div >
      <div>
        <ul>
          <li><Link href= "/">Home</Link></li>   
           <li><Link href="/about" target = "_blank">About</Link></li>
          <li>< Link href="/contact">contact</Link></li> 
          <li> <Link href= "/services">services</Link></li>
        </ul>

      </div>
      <h1 style = {{color :"pink"}}  >Hafsa Khan</h1>
    </div>
  );
} 

