import React, { Component } from "react";
import ProductRow from "./../ProductRow";
import Commerce from "@chec/commerce.js";
import "./style.scss";

const commerce = new Commerce(
  "pk_test_468219bf75e89e0308d6dc2d4a2575d92fa575c5cab82"
);

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    commerce.products.list().then((result) => {
      console.log(result);
      this.setState({ products: result.data });
    });
  }

  render() {
    return (
      <div className="container main-content">
        {this.state.products.map((product) => {
          return (
            <ProductRow
              key={product.id}
              image={product.image.url}
              name={product.name}
              description={product.description}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
