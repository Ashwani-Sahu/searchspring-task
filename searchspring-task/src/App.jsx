import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar";
import NoSearchResults from "./components/NoSearchResults";
import Footer from "./components/Footer";
import "./App.css";
import { API_URL, SITE_ID } from "./utils/appUtils";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalProductsAddedToCart, setTotalProductsAddedToCart] = useState(0);

  const fetchResults = async (searchQuery, currentPage = 1) => {
    setIsLoading(true);
    const url = `${API_URL}?siteId=${SITE_ID}&q=${searchQuery}&resultsFormat=native&page=${currentPage}`;
    const res = await fetch(url);
    const data = await res.json();

    setResults(data.results);
    setTotalPages(data.pagination.totalPages);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchResults(query, page);
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div
      className={
        isLoading || results?.length === 0
          ? "main-container-flex"
          : "main-container"
      }
    >
      <Navbar
        onSearch={handleSearch}
        totalProductsAddedToCart={totalProductsAddedToCart}
      />

      <div className="container">
        {isLoading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            {results.length === 0 ? (
              <NoSearchResults query={query} />
            ) : (
              <>
                <div className="top-pagination-wrapper">
                  <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={changePage}
                  />
                  {!!query?.length && (
                    <p>
                      Search results for <span>{query}</span>
                    </p>
                  )}
                </div>
                <div className="product-grid">
                  {results.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      setTotalProductsAddedToCart={setTotalProductsAddedToCart}
                      totalProductsAddedToCart={totalProductsAddedToCart}
                    />
                  ))}
                </div>
                <div className="top-pagination-wrapper">
                  <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={changePage}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>

      <Footer onSearch={handleSearch} />
    </div>
  );
}

export default App;
