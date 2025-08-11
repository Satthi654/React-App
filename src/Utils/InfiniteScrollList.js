import React, { useState, useEffect, useRef } from "react";
import "../App.css";

export default function InfiniteScrollList() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loader = useRef(null);

    // Simulate fetching data
    const fetchItems = async (pageNum) => {
        setLoading(true);
        // Simulate API delay
        await new Promise((res) => setTimeout(res, 1000));
        // Generate fake data
        const newItems = Array.from({ length: 10 }, (_, i) => `Item ${(pageNum - 1) * 10 + i + 1}`);
        setItems((prev) => [...prev, ...newItems]);
        setLoading(false);
    };

    useEffect(() => {
        fetchItems(page);
    }, [page]);

    // Intersection Observer for infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1 }
        );
        if (loader.current) {
            observer.observe(loader.current);
        }
        return () => {
            if (loader.current) observer.unobserve(loader.current);
        };
    }, [loading]);

    return (
        <div style={{ maxWidth: 400, margin: "0 auto" }}>
            <h2>Infinite Scroll List</h2>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx} className="fade-in">{item}</li>
                ))}
                {loading &&
                    Array.from({ length: 5 }).map((_, idx) => (
                        <li key={`skeleton-${idx}`}><div className="skeleton"></div></li>
                    ))
                }
            </ul>
            <div ref={loader} style={{ height: 40, textAlign: "center" }} />
        </div>
    );
}