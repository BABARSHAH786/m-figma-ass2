export default function NavBar(){
  return (
    <div>
     {/* <h3 className="bg-red-200 border-8 pl-7 pt-4 pb-8 mb-5 ">check text</h3> */}
     {/* <h1 className="font-extrabold text-4xl">Tech Dynamos</h1> */}
     {/* <button className="bg-blue-200 border-green-6 p-6 m-4 border-shadow-lg text-red-230 rounded-full hover:bg-blue-700">Click Me</button>
     <p className="font-bold text-2xl text-justify-center p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eum dolorem eveniet quae velit modi dolorum nostrum quis commodi, quia tempora quas quo nihil numquam in maxime consequuntur facere sint optio expedita, ad doloribus sequi dolores quod. Voluptatem sunt eveniet temporibus. Ratione molestias eos deleniti totam natus, nesciunt voluptatum sit sint, asperiores aperiam ullam fugiat vel consequuntur amet fuga error ducimus officiis et laboriosam sequi quisquam ipsum? Fuga error voluptas dolor repellat maxime minus reprehenderit nostrum dolore quod enim nam assumenda ratione perferendis, est optio, exercitationem libero earum aut reiciendis qui a ad ullam sequi! Vero earum a similique harum ducimus quia vel perspiciatis cupiditate ipsa deleniti. Illum corrupti debitis saepe dolore assumenda laborum necessitatibus et facilis deserunt, velit temporibus, error a hic eligendi! Deleniti odio sapiente soluta aperiam! Eum sed odio voluptates id iste culpa deleniti facere ratione, alias, voluptate, nisi maiores ut esse neque quis expedita labore adipisci enim sit. Recusandae laudantium neque alias quam excepturi architecto aperiam incidunt molestiae laboriosam repellat dolorum in dolore, inventore mollitia voluptatum assumenda obcaecati tenetur id! Voluptas fuga possimus nam officiis neque, deserunt sequi aliquid at dolore sed! Beatae, quasi sunt pariatur nihil quidem similique corporis quo. A molestias aliquam nisi, cupiditate iusto amet fugiat distinctio quis iure molestiae voluptatem quisquam illo consequatur ullam nobis quidem quae quasi sed sunt rem id facilis corrupti quia? Nobis veritatis ex ea autem possimus. Voluptatum dicta modi quae id nemo ullam vel nesciunt recusandae! Rem eos, qui et quos, exercitationem dolores, itaque porro velit perspiciatis animi aspernatur! Id eligendi amet recusandae consectetur sunt error magni dicta doloremque maiores impedit esse velit asperiores explicabo odit natus, corporis numquam. Ut corrupti voluptatem laboriosam soluta, ea expedita sit qui vero natus autem minima rerum accusamus obcaecati magni maxime culpa blanditiis sapiente aperiam adipisci enim! Incidunt praesentium nam expedita vero aperiam! Dolore nihil amet nam eligendi aut beatae totam quisquam, temporibus quaerat, quo rem neque dolores fuga explicabo quod corporis ab qui. Quidem, molestias voluptatibus. Consectetur expedita recusandae incidunt fugiat, eligendi dolorem ea ducimus id amet fugit maxime reprehenderit veritatis, quasi deleniti beatae.</p> */}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="bg-red-200 border-8 p-4 text-2xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
                <p className="mt-4 text-lg text-gray-600">We'd love to hear from you! Please fill out the form below to get in touch.</p>
            </div>

            <div className="mt-10">
                <div className="max-w-xl mx-auto">
                    <form action="#" method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            {/* <input type="email" id="email" name="email" placeholder="Enter your email"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> */}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                           
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number (optional)</label>
                            
                        </div>

                        <div className="flex items-center justify-between">
                            <button type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer className="bg-gray-600 py-6 mt-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
            &copy; 2024 Your Company. All rights reserved.
        </div>
    </footer>
     
   
    </div>
  )
}
