import React, { Fragment, useContext, useEffect, useState } from "react";
import "../style/styleProfil.css";
import { MdModeEdit } from "react-icons/md";
import data from "./data.json";
import { CgProfile } from "react-icons/cg";
import codeBar from "../../images/codeBar.jpg";
import EditProfil from "./editProfil";
import photoProfil1 from "../../images/photoProfil1.png";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "qrcode";
import { UidContext } from "../Routes/AppContext";


  const Personnal = () =>{
  
    const uid = useContext(UidContext);
    const [imageURL,setImageURL]=useState('');
    const generateQrCode = async()=>{
      try{
        console.log('uid',uid)
          const response = await QRCode.toDataURL(uid);
          setImageURL(response)
          console.log("response",response)
      }catch (err){
        console.log(err)
    
      }
    }
    
    
    
      
      useEffect(()=>{
        generateQrCode()
        
      },[uid])


  
  

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userReducer);

  /* edit profil */
  const [editProfilCondition, setEditProfilCondition] = useState(false);
  const [dataPers, setDataPers] = useState([]);

  //  function getData( dataPersonel ){
  //   setDataPers(dataPersonel)
  //  }
  function closeProfil() {
    setEditProfilCondition(false);
  }

  const editProfil = editProfilCondition && (
    <EditProfil setEditProfilCondition={setEditProfilCondition} photo={photoProfil1} closeView={closeProfil} />
  );

  var colorEdit = editProfilCondition ? "#fff" : "#2F4F4F";

  /*city*/

  const [city, setCity] = useState("");
  const [cityPreselection, setCityPreselection] = useState([]);

  const handleChangeCity = (e) => {
    setCity(e.target.value);

    let cityIn = data.city.filter((pays) => {
      const regex = new RegExp(`^${city}`, "gi");

      return pays.match(regex);
    });
    setCityPreselection(cityIn);

    if (city.length === 0) {
      setCityPreselection([]);
      cityIn = [];
    }
  };

  const handleClick = (e) => {
    setCity(e.target.innerHTML);
    setCityPreselection([]);
    var tab = dataPers;
    console.log("tab", tab);
  };
  const cityPreselectionIn = cityPreselection && (
    <Fragment>
      {cityPreselection.map((city, key) => {
        return (
          <div id="pays" onClick={handleClick}>
            {" "}
            {city}{" "}
          </div>
        );
      })}
    </Fragment>
  );

  const image = dataPers.photo ? dataPers.photo : photoProfil1;

  return (
    <div>
      {editProfil}
      <div className="completeProfil">
        <div>
          <div className="completeP">
            <h4>complete your profil </h4>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "35%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="pourcentageC">
            <p>35% complete</p>
          </div>
        </div>
        <div>
          Edit Profil
          <MdModeEdit
            size="22px"
            color={colorEdit}
            onClick={() => setEditProfilCondition(true)}
            cursor="pointer"
          />
        </div>
      </div>

      <div className="completeProfilBar">
        <div className="completePhoto">
          <h4>Personnal information </h4>
        </div>
        <div className="infoProfil">
          <div className="photoNom">
            <img src={userData.picture}></img>
            <div style={{ marginLeft: "50px" }}>
              <h5>
                {userData.firstName} {userData.lastName}{" "}
              </h5>
              {/* <h5>{userData.pseudo}</h5> */}
              <h6>{userData.kind}</h6>
            </div>
          </div>
          <img src={imageURL} alt ="imageCodeBar"/>
          {/* <QRCode  value="12345" size="90"   includeMargin={true}  includeMargin={true} />  */}
          {/* <img className="imgCodeBar" src={codeBar} alt="image" /> */}
        </div>
        <div className="infoDistance">
          <div className="cityDistance">
            <div>
              <input
                type="text"
                placeholder="city"
                onChange={handleChangeCity}
                value={city}
              ></input>
              {cityPreselectionIn}
            </div>
            <input type="text" placeholder="Klm"></input>
          </div>
          <button className="btnProfil" style={{ background: "#37C3A7" }}>
            {/* <span>Download</span> */}
            <a href ={imageURL} download> downalod</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Personnal;
