import React from "react";

const Products = () => {
  return (
    <section className="products">
      <div className="product">
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Product 1" />
        <h2>Product 1</h2>
        <p>$49.99</p>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="Product 2" />
        <h2>Product 2</h2>
        <p>$39.99</p>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://www.lezzat.co.uk/wp-content/uploads/2021/03/Amazon-Product-Photography-Agency-UK-1.jpg" alt="Product 3" />
        <h2>Product 3</h2>
        <p>$59.99</p>
        <button>Add to Cart</button>
      </div>
    </section>
  );
};

export default Products;
