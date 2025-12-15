import React, { useEffect, useState } from "react";
import "../11-Pagination-flipkart/page.css";
import Card from "./components/Card";

function Page() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchDta = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const response = await data.json();
    setData(response.products);
  };

  useEffect(() => {
    fetchDta();
  }, []);

  //PAGINATION
  const PAGE_SIZE = 10;
  const totalProducts = data.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToNext = () => {
    setCurrentPage((prev) => prev + 1)
  }
   const goToPrev = () => {
    setCurrentPage((prev) => prev - 1)
  }

  return (
    <div>
      <h1>pagination</h1>
      <div className="page-container">
        <button disabled={currentPage === 0} onClick={() => goToPrev()}>prev</button>
        {[...Array(noOfPages).keys()].map((n) => (
          <span key={n} onClick={() => handlePageChange(n)}  className={`page-no ${n === currentPage ? "active" : ""}`}>
            {n}
          </span>
        ))}
        <button disabled={currentPage === noOfPages - 1} onClick={() => goToNext()}>next</button>
      </div>
      <div className="product-container">
        {data.slice(start, end).map((p) => (
          <Card key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}

export default Page;
