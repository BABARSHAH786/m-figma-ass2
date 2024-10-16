import Image from "next/image"
import image1 from './../../public1/image1.jpg'
import image2 from './../../public1/image2.jpg'
import image3 from './../../public1/image3.jpg'



import Link from "next/link"
export default function NavBar(){
  return (
    <div>
      <h1 className="bg-yellow-100 h-10">Welcome to Home Page</h1>
      <Image src={image1} alt="Website template" height={50} width={250} className="w-[600px] h-[600px] "></Image>

      <Image src={image2} alt="Website template" height={250} width={250} className="w-[600px] h-[600px] "></Image>
      <Image src={image3} alt="Website template" height={100} width={100} className="w-[600px] h-[600px] "></Image>
      
        {/* <ul>
        <li><Link href='/about'>About</Link>   </li>
        <li><Link href='/products'>Products</Link></li>
        <li><Link href='/products'>Course</Link></li>
        <li><Link href='/products'>Contact</Link></li>
        </ul>
        </>


        <h1>hello</h1> */}







   
    </div>
    
  )

}