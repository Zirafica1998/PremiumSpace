import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import Pagination from "./Pagination";
import { useTranslation } from "react-i18next";


export default function Posts( posts){
  const [postsGet,setPostsGet] = useState([]);
  const [submit,setSubmit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  let history = useNavigate();
  const { t } = useTranslation();


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
          <div className="result-count"><p><span>{postsGet.length}</span> {t("result_serach")}</p></div>
          {currentPost.map(val => (
              <div className="realEstate col-lg-4 col-md-4 col-sm-6"  key={val.id} onClick = {() => {history('/products/'+val.id)}}>
                <a>
                  <div className="up-section">
                    <div className="img">
                    {val.slika == null ? (
                      <img src='no-image.png' alt='No image'></img>
                    ):(
                       <img src={"https://firebasestorage.googleapis.com/v0/b/premiumspace-dfd7a.appspot.com/o/images%2F"+(val.id)+"%2F"+((val.slika).toString().split(';'))[0]+"?alt=media"} alt="image" />
                     )}                    
                     </div>
                    <div className="price">
                        <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.cena)}</span>
                    </div>
                    <div className="type">
                       <span>{t(val.vrstaUsluge)}</span>
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
                      <span>{val.opis}</span>
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
