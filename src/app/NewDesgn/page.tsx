
const NewDesgn =() =>{
    const newDesignDate =[
        {id: 1,name: "Denium-Jeans", price:190,description: "new look update", Image: "/image10.jpg"},
        {id: 2,name: "Outlet-Jeans", price:250,description: "new look update", Image: "/image9.jpg"},
        {id: 3,name: "Outfiter-Jeans", price:330,description: "new look update", Image: "/image.8.jpg"},
        {id: 4,name: "product1", price:200,description: "new look update", Image: "/image.7.webp"},
        {id: 5,name: "product1", price:120,description: "new look update", Image: "/image2.jpg"},
        {id: 6,name: "product1", price:130,description: "new look update", Image: "/image5.avif"},
        
    
    ]
    return(
        <div>
           <div className="brands">
            {newDesignDate.map((product) => (
            
                 <div key={product.id} className="product-cart">
                <img src={product.Image} alt={product.name} />
                 <h3>{product.name}</h3>
                 <p>{product.description}</p>
                 <div className="price">${product.price}</div>
                 <button>Add to Cart</button>
                 </div>
            ))}
          
           </div>
        </div>
    )
}

export default NewDesgn;