import Link from "next/link"
export default function NavBar(){
  return (
    <div>
      <>
        <ul>
        <li><Link href='/about'>About</Link>   </li>
        <li><Link href='/products'>Products</Link></li>
        <li><Link href='/products'>Course</Link></li>
        <li><Link href='/products'>Contact</Link></li>
        </ul>
        </>
   
    </div>
  )
}