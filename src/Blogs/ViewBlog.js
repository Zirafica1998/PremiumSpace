import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom';
import Axios from 'axios'

function ViewBlog() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [date,setDate] = useState("");


    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            await Axios.get('http://localhost:3001/Blog/byData/' + params.id).then((response) =>{
              response = response.data;

                var arrayDate=[];
                    var newDate=new Date(response.updatedAt)
                    var day= newDate.getDate();
                    var month = newDate.getMonth();
                    var year = newDate.getFullYear();
    
                    var dataString= day + "." + month + "." + year 
                    arrayDate.push(dataString);
                
              setDate(arrayDate)
              setData(response);
            })
            
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
        
    
        fetchData();
      }, []);
  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div className="blogs-detail container">
        <div className="row">
            <div className="col-md-12 title">
                <h3>{data.title}</h3>
            </div>
            <div className="col-md-12 date">
                <p>{date}</p>
            </div>
            <div className="col-md-12 text">
                <span>{data.text}</span>
            </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default ViewBlog
