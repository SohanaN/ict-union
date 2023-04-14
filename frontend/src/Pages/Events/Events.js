import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';

const Events = () => {

	const [event, setEvent]=useState([]);
   
	// Pagination 
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get('http://localhost:8081/events');
			setEvent(res.data);
			setLoading(false);
		}
		fetchPosts();
	}, []);

	// console.log(event);

	// get current posts
	const indexofLastPost = currentPage * postsPerPage;
	const indexofFirstPost = indexofLastPost - postsPerPage;
	const currentPosts = event.slice(indexofFirstPost, indexofLastPost);

	// change page 
	const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
		<>
			<main class="main">
			<Posts
				event={currentPosts}
				loading={loading
			} />
			 <div classNameName="row">
							<div className="col-12">
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={event.length}
				paginate={paginate}
			/>
			</div>
				</div>
				</main>
		</>
		
    );
};

export default Events;