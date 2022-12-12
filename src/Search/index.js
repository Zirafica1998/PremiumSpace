import React, { useEffect, useState } from "react"
import Axios from 'axios'
import Posts from "../Post";
import Pagination from "../Post/Pagination";

export default function SearchForm() {

  const [type, setType] = useState("Stan");
  const [searchWord, setsearchWord] = useState("");
  const [sizeFrom, setsizeFrom] = useState("");
  const [sizeOf, setSizeOf] = useState("");
  const [priceFrom, setpriceFrom] = useState("");
  const [priceOf, setpriceOf] = useState("");
  const [isSubmitted,setIsSubmitted] = useState("");
  const [realEstateList,setRealEstateList] = useState("");


  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPost] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(12);

  var jsonObject=[]
  var jsonObject1=[]
  const submitSearch = () => {
    setLoading(false);
    const fetchPosts = async () => {
      setLoading(true);
     await Axios.post('http://localhost:3001/realEstate/byData',{
      searchWord:searchWord,
      type:type
     }).then((res) =>{
      if(res.data.length>0){
        setPosts(res.data);
        setLoading(false);
        (res.data).forEach((element,index)=>{
          
          if(sizeFrom !="" && sizeOf != ""){
            if(element.povrsina>sizeFrom && element.povrsina<sizeOf){
              jsonObject.push(element);
            }
          }else if (sizeFrom =="" && sizeOf !=""){
            if(element.povrsina<sizeOf){
              jsonObject.push(element);
            }
          }else if(sizeFrom!="" && sizeOf==""){
            if(element.povrsina>sizeFrom){
              jsonObject.push(element);
            }
          }else if(sizeFrom =="" && sizeOf == ""){
            jsonObject.push(element);
          }
        })

        jsonObject.forEach((element,index)=>{
          if(priceFrom !="" && priceOf != ""){
            if(element.cena>priceFrom && element.cena<priceOf){
              jsonObject1.push(element);
            }
          }else if (priceFrom =="" && priceOf !=""){
            if(element.cena<priceOf){
              jsonObject1.push(element);
            }
          }else if(priceFrom!="" && priceOf==""){
            if(element.cena>priceFrom){
              jsonObject1.push(element);
            }
          }else if(priceFrom =="" && priceOf == ""){
            jsonObject1.push(element);
          }
          
          setLoading(false);
          setIsSubmitted(true);
        })
        
      }else{
        alert("Nema prozivoda")
      }
     })
      setPosts(jsonObject1);
    };
    fetchPosts();
  }

  return(
    <div>
      <div className="container forms">
              <div className="input-group">
                  <select name="type" onChange={(e) => {setType(e.target.value)}}>
                      <option value="stan">Stan</option>
                      <option value="kuca">Kuća</option>
                      <option value="lokal">Lokal</option>
                      <option value="poslovniProstor">Poslovni prostor</option>
                      <option value="zemljiste">Zemljište</option>
                      <option value="garaza">Garaža</option>
                      <option value="sveNekretnine">Sve nekretnine</option>
                  </select>
                  <input name="searchWord" type="text"  placeholder="Grad,Opština,Lokacija,Ulica" onChange={(e) => {setsearchWord(e.target.value)}} />
                  <input name="sizeFrom" type="text"  placeholder="od m2" onChange={(e) => {setsizeFrom(e.target.value)}} />
                  <input name="sizeOf" type="text"  placeholder="do m2" onChange={(e) => {setSizeOf(e.target.value)}} />
                  <input name="priceFrom" type="text"  placeholder="cena od" onChange={(e) => {setpriceFrom(e.target.value)}} />
                  <input name="priceOf" type="text"  placeholder="cena do" onChange={(e) => {setpriceOf(e.target.value)}}/>
                  <button className="button-prime" onClick={submitSearch}>Pretrazi</button>
              </div>
      </div>
      <div className="container result">
          <div className="result-search">
            <div className="search-container row">
                  <Posts posts={posts} loading={loading} pressSearch={isSubmitted} />
            </div>
          </div>
      </div>
    </div>
  )
}
