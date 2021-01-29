const initState ={
    products:[
        {
          id: 1,
          name: "Womens Black Dress",
          image:"/images/product-1.jpg",
          price: 1599,
          brand: "AA Creation",
          desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis turpis nec condimentum accumsan. 
                 Pellentesque sit amet felis sed quam lobortis cursus. Nunc euismod mollis tempus.Etiam et tempus neque. 
                 Proin sed dolor sed ipsum auctor ultrices. Maecenas cursus`,
        },
        {
            id: 2,
            name: "Mens Watch",
            image:"/images/watch-1.jpg",
            price: 1849,
            brand: "Piraso",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis turpis nec condimentum accumsan. Pellentesque sit amet felis sed quam lobortis cursus. Nunc euismod mollis tempus. Etiam et tempus neque. Proin sed dolor sed ipsum auctor ultrices. Maecenas cursus",
          },
          {
            id: 3,
            name: "Women's Suit",
            image:"/images/women-dress-1.jpg",
            price: 890,
            brand: "Apsara",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis turpis nec condimentum accumsan. Pellentesque sit amet felis sed quam lobortis cursus. Nunc euismod mollis tempus. Etiam et tempus neque. Proin sed dolor sed ipsum auctor ultrices. Maecenas cursus",
          },
          {
            id: 4,
            name: "Women Shoes",
            image:"/images/women-shoes.jpg",
            price: 699,
            brand: "Lee",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis turpis nec condimentum accumsan. Pellentesque sit amet felis sed quam lobortis cursus. Nunc euismod mollis tempus. Etiam et tempus neque. Proin sed dolor sed ipsum auctor ultrices. Maecenas cursus",
          },
          {
            id: 5,
            name: "Kid's Jeans",
            image:"/images/product-5.jpg",
            price: 499,
            brand: "Lee Sholly",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis turpis nec condimentum accumsan. Pellentesque sit amet felis sed quam lobortis cursus. Nunc euismod mollis tempus. Etiam et tempus neque. Proin sed dolor sed ipsum auctor ultrices. Maecenas cursus",
          },
          {
            id: 6,
            name: "Mens Jeans",
            image:"/images/product-6.jpg",
            price: 2349,
            brand: "Lee ",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis turpis nec condimentum accumsan. Pellentesque sit amet felis sed quam lobortis cursus. Nunc euismod mollis tempus. Etiam et tempus neque. Proin sed dolor sed ipsum auctor ultrices. Maecenas cursus",
          },
          {
            id: 7,
            name: "Mens Blazer ",
            image:"/images/mens-blazer.jpeg",
            price: 3299,
            brand: "Lee Sholly",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis turpis nec condimentum accumsan. Pellentesque sit amet felis sed quam lobortis cursus. Nunc euismod mollis tempus. Etiam et tempus neque. Proin sed dolor sed ipsum auctor ultrices. Maecenas cursus",
          },
          {
            id: 8,
            name: "Womens top",
            image:"/images/product-8.jpg",
            price: 999,
            brand: "Apsara",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis turpis nec condimentum accumsan. Pellentesque sit amet felis sed quam lobortis cursus. Nunc euismod mollis tempus. Etiam et tempus neque. Proin sed dolor sed ipsum auctor ultrices. Maecenas cursus",
          },    
    ],
    product:{}
}
 const ProductsReducer = (state= initState , action)=>{
   console.log(typeof action.id)
          switch(action.type){
            case 'PRODUCT':
              return {...state , product: state.products.find(product=> product.id === parseInt (action.id))}
             default:
                 return state;
          }
 }
 export default ProductsReducer;