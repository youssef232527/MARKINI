import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import "../style/editProfile.css";
import photoProfil1 from "../../images/photoProfil1.png";
import { useDispatch, useSelector } from "react-redux";
import { updateProfil, uploadPicture } from "../../action/user.actions";

function EditProfil(props) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const changerPhoto = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhotoPreselect(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleUpdateProfile = () => {
    const data = { firstName: firstName, lastName: lastName, status: status , email: gmail};
    dispatch(updateProfil(userData._id,data));
  };

  const handleUpdatePhoto = () => {
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", photoProfil);
    console.log(data)
    dispatch(uploadPicture
      (data, userData._id));
  };


  const updateFinal=()=>{
    handleUpdateProfile();
    handleUpdatePhoto();
    props.setEditProfilCondition(false)

    
  }
  // const [nom, setName]=useState("youssef");
  const [photopreselect, setPhotoPreselect] = useState("");
  const [photoProfil, setPhotoProfil] = useState(photoProfil1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gmail, setGmail] = useState("");
  const [status, setStatut] = useState("");
 
  /********image hander */

  const handleChangeName = (e) => {
    setFirstName(e.target.value);
  };
  // const handleClickData=()=>{
  //     props.fonction()
  // }

  return (
    <div className="containerEdit">
      <div className="EditProfil">
        {/* <button onClick={handleUpdateProfile}>valider</button> */}
        <h4 style={{ fontSize: "35px" }}>Edit Profile</h4>
        <p style={{ color: "rgb(181 164 159)" }}>
          peopple who view your profile will see the following information
        </p>
        <div id="PhotoEdit">
          <img src={photopreselect ? photopreselect : userData.picture}></img>
          {/* <button for="firstimg" id ="editButton"style={{background:"#696969"}} > Edit</button> */}
          <input
            type="file"
            accept="image/*"
            id="firstimg"
            style={{ display: "none" }}
            onChange={(e) => {
              setPhotoProfil(e.target.files[0]);
              changerPhoto(e);
            }}
          ></input>

          <label
            for="firstimg"
            id="editButton"
            style={{ background: "#696969" }}
          >
            Edit
          </label>
        </div>
        <span id="PersonelInfo">Personal information</span>

        <div id="name">
          <span>FirstName</span>
          <span>Last Name</span>
        </div>

        <div id="FirstLastName">
          <input
            type="text"
            placeholder="FirstName"
            value={firstName}
            onChange={handleChangeName}
          ></input>
          <input
            type="text"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              console.log("photo", photoProfil);
            }}
          ></input>
        </div>

        <div className="gmailState">
          <span>Gamil:</span>

          <input
            style={{ width: "300px" }}
            type="text"
            placeholder="your Gmail"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
          ></input>

          <span>State:</span>

          <input
            style={{ width: "300px" }}
            type="text"
            placeholder="your State"
            value={status}
            onChange={(e) => setStatut(e.target.value)}
          ></input>
        </div>
        <div className="saveCancel">
          <button
            style={{ background: "rgb(251 0 4 / 56%)" }}
            onClick={() => props.closeView()}
          >
            cancel
          </button>

          <button
            style={{ background: "rgb(36 212 84 / 87%)" }}
            onClick={updateFinal}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditProfil;
