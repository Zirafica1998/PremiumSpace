import HeaderAdmin from '../Header'
import React, { useEffect , useState } from 'react'
import axios from 'axios';
import Popup from './Popup';
import PopupAdd from './PopupAdd';

function Blog() {


  const [blogObject, setBlogObject] = useState({});
  const [blogDetailsObject, setBlogObjectDetails] = useState({});

  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const togglePopupAdd = () => {
    setIsOpenAdd(!isOpenAdd);
  }
  const deleteRow = (data) =>{
    console.log(data);
    var checkedBoxes = document.querySelectorAll('input[name=mycheckboxes]:checked');
    var idList=[];
    checkedBoxes.forEach((element,index) =>{
      idList.push(element.attributes[2].nodeValue)
    })
    axios.post("http://localhost:3001/blog/delete", idList).then((response) => {
      if(response.status == 200){
        window.location.reload(false);
      }else{
        alert("Greska")
      }
    });
  }
  const openDetails = (state = {}) => {
      var id= state.target.getAttribute('a-key');
      axios.get('http://localhost:3001/blog/byData/'+id).then((response) => {
          setBlogObjectDetails(response.data);
          setIsOpen(true);
      });
  };

  const openAdd = (state = {}) => {
    setIsOpenAdd(true);
};

  useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
          axios.get(`http://localhost:3001/blog/`).then((response) => {
              setBlogObject(response.data);
              setLoading(false);
          });
      }
      
  
      fetchData();
    }, []);

  return (
    <>
        <HeaderAdmin></HeaderAdmin>
        {loading && <div>Loading</div>}
    <form onSubmit={deleteRow}>
    <table id="blogs">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Id</th>
            <th scope="col">Naslov</th>
            <th scope="col">Tekst</th>
            <th scope="col">Vidljivost</th>
          </tr>
        </thead>
        <tbody> 
        {!loading && blogObject.map((val,key) => (
        <tr key={key}>
            <th scope="col"><input type="checkbox" name='mycheckboxes' value={val.id}></input></th>
            <th onClick={(state) => openDetails(state)} a-key={val.id} key={key} scope="col">{val.id}</th>
            <th onClick={(state) => openDetails(state)} a-key={val.id} scope="col">{val.title}</th>
            <th onClick={(state) => openDetails(state)} a-key={val.id} scope="col">{val.text}</th>
            <th onClick={(state) => openDetails(state)} a-key={val.id}  scope="col">{val.allow}</th>
        </tr>
        ))}
        </tbody>
      </table>
      <button className='deleteBlog'>Obrisi</button>
      </form>
      <button onClick={(openAdd)} className="openAddBlog">Dodaj strucni tekst</button>
      {isOpen && <Popup
      content={blogDetailsObject}
      handleClose={togglePopup}
      
    />}
    {isOpenAdd && <PopupAdd
      handleClose={togglePopupAdd}
    />}
    </>
  )
}

export default Blog
