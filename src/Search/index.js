import React, { useEffect, useState } from "react"
import Axios from 'axios'
import Posts from "../Post";
import MessageBox from "../MessageBox";
import $ from "jquery"
import { useTranslation } from "react-i18next";


export default function SearchForm() {
  const { t } = useTranslation();
  const [type, setType] = useState("Stan");
  const [searchWord, setsearchWord] = useState("");
  const [sizeFrom, setsizeFrom] = useState("");
  const [sizeOf, setSizeOf] = useState("");
  const [priceFrom, setpriceFrom] = useState("");
  const [priceOf, setpriceOf] = useState("");
  const [isSubmitted,setIsSubmitted] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typeService,setTypeService] = useState("Prodaja");

  
  const [noProduct,setNoProduct] = useState();
  
  var jsonObject=[]
  var jsonObject1=[]
  const submitSearch = () => {
    setLoading(false);
    const fetchPosts = async () => {
      setLoading(true);
      
      var data={
        searchWord:searchWord,
        type:type,
        typeService:typeService
      }

     await Axios.post('http://localhost:3001/realEstate/byData',data).then((res) =>{
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
        setNoProduct(true);
      }
     })
      setPosts(jsonObject1);
    };
    fetchPosts();
  }

  return(
    <div>
      { noProduct && <MessageBox text={t("no-product")} refresh={false} pressSearch = {noProduct}></MessageBox>}
      <div className="container forms">
              <div className="input-group">
                  <select name="type" id="typService"  onChange={(e) => {setTypeService(e.target.value)}}>
                      <option value="prodaja">{t("sell")}</option>
                      <option value="izdavanje">{t("rent")}</option>
                  </select>
                  <select name="type" onChange={(e) => {setType(e.target.value)}}>
                      <option value="stan">{t("apartment")}</option>
                      <option value="kuca">{t("house")}</option>
                      <option value="lokal">{t("shop")}</option>
                      <option value="poslovniProstor">{t("business_premises")}</option>
                      <option value="zemljiste">{t("land")}</option>
                      <option value="garaza">{t("garage")}</option>
                  </select>
                  <input name="searchWord" type="text"  placeholder={t("placeholder_serach_word")} onChange={(e) => {setsearchWord(e.target.value)}} />
                  <input name="sizeFrom" type="text"  placeholder={t("placeholder_sizeOf")} onChange={(e) => {setsizeFrom(e.target.value)}} />
                  <input name="sizeOf" type="text"  placeholder={t("placeholder_sizeFrom")} onChange={(e) => {setSizeOf(e.target.value)}} />
                  <input name="priceFrom" type="text"  placeholder={t("placeholder_priceOf")} onChange={(e) => {setpriceFrom(e.target.value)}} />
                  <input name="priceOf" type="text"  placeholder={t("placeholder_priceFrom")} onChange={(e) => {setpriceOf(e.target.value)}}/>
                  <button className="button-prime" id="searchButton" onClick={submitSearch}>{t("serach_button")}</button>
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
