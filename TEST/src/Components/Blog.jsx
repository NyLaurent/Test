import React from 'react'

const Blog = () => {
    const blogs =[
        {id:1, title:"Fresh Produce", image:"../assets/farm2.jpg"},
        {id:2, title:"Dairy Products", image:"../assets/farm2.jpg"},
        {id:1, title:"Meat and Poultry", image:"../assets/farm2.jpg"}
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
        <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>
                    Caring is the new market
                    </h2>
                    <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>
                    The Nextcent blog is the best place to read
                     about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their 
                    membership income and lots more​
                    </p>
        </div>
        <div>
            {
                blogs.map(blog => <div key={blog.id}>
                    <img src="" alt="" />

                </div>)
            }
        </div>

    </div>
  )
}

export default Blog