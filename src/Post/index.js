import React, { useEffect, useState } from "react"
import Pagination from "./Pagination";

export default function Posts( posts, loading, pressSearch){
  const [postsGet,setPostsGet] = useState([]);
  const [submit,setSubmit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;


 

  const currentPost = (posts.posts).slice(indexOfFirstPost, indexOfLastPost);


 
  const paginate = pageNumber => setCurrentPage(pageNumber);
  useEffect(()=>{
    
     setPostsGet(posts.posts);
     setSubmit(true)
  })
  if(postsGet.length > 0 && submit){
    return (
      <div>
        <div className='row'>
          <div className="result-count"><p><span>{postsGet.length}</span> rezultata na osnovu pretrage</p></div>
          {currentPost.map(val => (
              <div className="realEstate col-lg-4 col-md-4 col-sm-6"  key={val.id} >
                <a href={"products/"+val.id} key={val.id}>
                  <div className="up-section">
                    <div className="img">
                        <img src={((val.slika).toString().split(';'))[0]} alt="image" />
                      
                    </div>
                    <div className="price">
                        <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.cena)}</span>
                    </div>
                  </div>
                  <div className="center-section">
                    <div className="title">
                      <span>{val.naslov}</span>
                    </div>
                    <div className="location">
                      <span>{val.opstina}</span>
                    </div>
                    <span className="desc">
                      {/* <span>{val.opis}</span> */}
                      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                  </div>
                  <div className="bottom-section">
                    <div className="number-room">
                      <img src="room-icon.png" alt="room-icon"></img>
                      <span>{val.brojSoba}</span>
                    </div>
                    <div className="size">
                      <img src="size-icon.png" alt="size-icon"></img>
                      <span>{val.povrsina} m²</span>
                    </div>
                  </div>
              </a>
              </div>
          ))}
          </div>
          <Pagination postsPerPage={postsPerPage} totalPosts={postsGet.length} paginate={paginate}/>
        </div>
        
    );
  }
};

function CommaFormatted(amount) {
	var delimiter = ","; // replace comma if desired
	var a = amount.split('.',2)
	var d = a[1];
	var i = parseInt(a[0]);
	if(isNaN(i)) { return ''; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	var n = new String(i);
	var a = [];
	while(n.length > 3) {
		var nn = n.substr(n.length-3);
		a.unshift(nn);
		n = n.substr(0,n.length-3);
	}
	if(n.length > 0) { a.unshift(n); }
	n = a.join(delimiter);
	if(d.length < 1) { amount = n; }
	else { amount = n + '.' + d; }
	amount = minus + amount;
	return amount;
}
