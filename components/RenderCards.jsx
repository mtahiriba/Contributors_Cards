'use client'

import { useState, useEffect } from "react"
import Card from "./Card"
import Loading from "./loading"


const RenderCards = () => {

    const [contributors, setContributors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isloadding, setIsloadding] = useState(true);


    const fetchContributors = () => {
        const perPage = 16;
        const apiUrl = `https://api.github.com/repos/angular/angular/contributors?page=${currentPage}&per_page=${perPage}`;
    
        setIsloadding(true);
    
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setContributors(prevContributors => [...prevContributors, data]);
            setIsloadding(false);
          })
          .catch(error => {
            console.error(error);
            setIsloadding(false);
          });
    };

    useEffect(() => {
        fetchContributors();
    }, [currentPage]);

    
    const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
          setCurrentPage(prevPage => prevPage + 1);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
  return (
    <div className="w-full mb-10">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 ">
            {contributors?.map((contributor) => <Card contributor={contributor}/>)}
        </div>
        <div className="flex-center">
            {isloadding && <Loading/>}
        </div>
    </div>
  )
}

export default RenderCards