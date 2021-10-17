import React, { Fragment } from "react";
import data from "./data.json";
import markeni from "../../images/markeni.png";
import Menu from "./menu";
import "../style/styleProfil.css";
import { MdModeEdit } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import {BsPlus} from "react-icons/bs";
import {FcApproval} from "react-icons/fc";
import { useState ,useEffect} from "react";

const ProfilNew = () => {
   useEffect(()=>{
    console.log("modifier")
  },[])



  /* function utils in skills */
  const deleteSkill = (key) => {
     var parent=document.getElementById("skillkey");
     var child=parent.getElementsByTagName("div");
    if(skills.length > 1){
      parent.removeChild(child[key]); 
    
    }else{
      let skill=document.getElementById("skillkey");
      const parent =skill.parentNode;
      parent.removeChild(skill)
    }
    
    
       
    // console.log("after suppression the parent is",parent);
    // console.log("after suppression the child is ", child[key]);
    let tab= skills;
    // console.log("le cléé", key);
    tab.splice(key, 1);    
    setSkills(tab);
   
    console.log(key)
    
    
  };
  
  const handleClick = (e) => {
      
    let skill = document.getElementById("skill").innerHTML;
    setSearchCompetance(e.target.innerHTML);
  };
  

  const handleChange = (e) => {
    setSearchCompetance(e.target.value);
    console.log(data.skills)
    // console.log(data.type);
   let skills = data.skills.filter((skill) => {
      const regex = new RegExp(`^${searchCompetance}`, "gi");
    //   console.log(skill)
     return skill.match(regex);
    });
    if (searchCompetance.length === 0) {
      skills = [];
    }
    setSkillsPresselection(skills);
    console.log(skills);
    // setSkillsPresselection(skills);
  };

  const handleSkills = () => {
      
    if (searchCompetance !== "") {
      skills.push(searchCompetance);
      setSearchCompetance("");
      setSkillsPresselection([]);
    }
  };


  /*searche competance*/
  const [searchCompetance, setSearchCompetance] = useState("");
  const [sKilLsPreselection, setSkillsPresselection] = useState([]);
  const [skills, setSkills] = useState([]);


  /*search language*/
  const [searchLanguage,setSearchLanguage]=useState("");
  const [languagePreselection, setlanguagePresselection] = useState([]);
  const [languages, setLanguage] = useState([]);


/**fonction utils language */


  const handleChangeLanguage = (e) => {
    setSearchLanguage(e.target.value);
    //console.log(data.skills)
    // console.log(data.type);
   let languages = data.languages.filter((language) => {
      const regex = new RegExp(`^${searchLanguage}`, "gi");
    //   console.log(skill)
     return language.match(regex);
    });
    if (searchLanguage.length === 0) {
      languages = [];
    }
    setlanguagePresselection(languages);
    //console.log(skills);
    // setSkillsPresselection(skills);
  };

  const handleClickLanguage = (e) => {
      
    let langue = document.getElementById("skill").innerHTML;
    setSearchLanguage(e.target.innerHTML);
  };
  const handleLanguage = () => {
      
    if (searchLanguage !== "") {
    languages.push(searchLanguage);
    setSearchLanguage("");
    setlanguagePresselection([]);
    }
  };

/***variable utils in language */
const languageSelection = languagePreselection && (
    <Fragment>
      {languagePreselection.map((language, key) => {
        return (
          <div id="skill" onClick={handleClickLanguage}>
            {" "}
            {language}{" "}
          </div>
        );
      })}
    </Fragment>
  );
  const languageSelect = languages && (
    <Fragment>
      <div className="borderSkills">
        {languages.map((langue, key) => {
          return (
            <div>
              <div className="borderskill">
                <span>{langue}</span>
                <ImCross
                  cursor="pointer"
                  onClick={() => {
                    deleteSkill(key);
                  }}
                  size="7px"
                />
              </div>
            </div>
          );
        })}
        
      </div>
    </Fragment>
    
  );

  
 /**variable utils in skill */
  const skillSelection = sKilLsPreselection && (
    <Fragment>
      {sKilLsPreselection.map((skill, key) => {
        return (
          <div id="skill" onClick={handleClick}>
            {" "}
            {skill}{" "}
          </div>
        );
      })}
    </Fragment>
  );
  const skillSelect = skills && (
    <Fragment>
      <div id="skillkey" className="borderSkills">
        {skills.map((skill, key) => {
          return (
            <Fragment>
              <div  className="borderskill">
                <span>{skill}</span>
                <ImCross
                  cursor="pointer"
                  onClick={() => {
                    deleteSkill(key);
                  }}
                  size="7px"
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
    
  );
  return (
    <div className="profil">
      <div id="imageProfilHande">
        <Menu></Menu>
        <div className="wrap">
          <div className="bodyProfil">
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
                  color="#2F4F4F"
                  // onClick={handleChange}
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
                  <p>photo</p>
                  <p>john</p>
                </div>
                <p>codebar</p>
              </div>
              <div className="infoDistance">
                <div className="cityDistance">
                  <button className="btnProfil">City</button>
                  <button className="btnProfil">
                    <span>Distance km</span>
                  </button>
                </div>
                <button className="btnProfil" style={{ background: "#37C3A7" }}>
                  <span>Download</span>
                </button>
              </div>
            </div>

            <div className="skills">
              <span>skill</span>
              <FcApproval/>
              <div className="search ">
                <VscSearch />

                <input
                  className="inputSkill"
                  type="text"
                  placeholder="Add Skill"
                  value={searchCompetance}
                  onChange={handleChange}
                />
                <BsPlus cursor="pointer" onClick={handleSkills}/>
                {/* <button className="btnProfilSkill" onClick={handleSkills}>
                  add
                </button> */}
              </div>
              {skillSelection}
              {skillSelect}
            </div>
            <div className="language">
              <h5>language</h5>
              <div className="search ">
                <VscSearch />
                <input
                  className="inputSkill"
                  type="text"
                  placeholder="Add language"
                  value={searchLanguage}
                  onChange={handleChangeLanguage}
                />
                <BsPlus cursor="pointer" onClick={handleLanguage}/>
                {/* <button className="btnProfilSkill" onClick={handleLanguage}>
                  add
                </button> */}
              </div>
              {languageSelection}
              {languageSelect}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfilNew;
