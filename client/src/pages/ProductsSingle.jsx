import React,{useState,useEffect} from 'react';
import ProductsCard from './ProductsCard';
import Header from './Header';
import Reviews from './reviews';
import { useParams } from 'react-router-dom';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Star from "./star";
const ProductsSingle = () => {
  const { userid,producttitle } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${producttitle}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [producttitle]);

  

  if (!product) {
    return <div>Loading...</div>;
  }
  const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:4
}
const data = [
  {
      name: 'nishitha',
      review: 'good'
  },
  {
      name: 'Sathwik',
      review: 'good'
  },
  {
      name: 'nishitha',
      review: 'good'
  },
  {
      name: 'nishitha',
      review: 'good'
  },
  {
      name: 'nishitha',
      review: 'good'
  },
  {
      name: 'nishitha',
      review: 'good'
  },
  {
      name: 'nishitha',
      review: 'good'
  },
  {
      name: 'nishitha',
      review: 'good'
  }
];


  return(
    <>
      
      <ProductsCard {...product} />;
      <div className="div1">
            <div className="div2">
                <div className="div3">
                <Slider {...settings} style={{  }}>
                    {data.map((d, index) => (
                        <div className="div4" key={index} style={{width:'85%'}}>
                            <div className="div5">
                            <div className="avatar">{d.name.charAt(0).toUpperCase()}</div>
                            </div>
                            <div className="star">
                            <Star></Star>
                            </div>
                            <div className="div6">
                          
                                <p className="p1">{d.name}</p>
                                <p>{d.review}</p>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </div>
    </>
  )
};

export default ProductsSingle;