import { useRouter } from "next/router";
import React from "react";

function ProductItem(props) {
  const router = useRouter();
  const productId = router.query.productId;
  return <div> Detail of product {productId}</div>;
}

export default ProductItem;
