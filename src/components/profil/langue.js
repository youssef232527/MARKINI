import { FcApproval } from "react-icons/fc";
import "../style/styleProfil.css";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import data from "./data.json";

const Langue = () => {
  const deleteSkill = (key) => {


    var  variable= languages[key]
    var tab=languages.filter(sk  =>
      sk !== variable              
    )
  

    setLanguage(tab)




    // var parent = document.getElementById("skillkey");
    // var child = parent.getElementsByTagName("div");
    // if (languages.length > 1) {
    //   parent.removeChild(child[key]);
    // } else {
    //   let skill = document.getElementById("skillkey");
    //   const parent = skill.parentNode;
    //   parent.removeChild(skill);
    // }

    // console.log("after suppression the parent is",parent);
    // console.log("after suppression the child is ", child[key]);
   
   
    // let tab = languages;
   
   
    // console.log("le cléé", key);
   
   
    // tab.splice(key, 1);
    // setLanguage(tab);
    // localStorage.setItem('myObjetLangue', JSON.stringify(tab));
    // window.location.reload();
    // console.log(key);
    if(languages.length == 0){
      setSearchLanguage("");
      setLanguage([]);
      setlanguagePresselection([]);
    }
  };

  /*search language*/
  const [searchLanguage, setSearchLanguage] = useState("");
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
    // let langue = document.getElementById("skill").innerHTML;
    // // setSearchLanguage(e.target.innerHTML);
    // languages.push(e.target.innerHTML);
    // setLanguage(languages)
    let tab = languages;
      tab.push(e.target.innerHTML);
      setSearchLanguage("");
      setlanguagePresselection([]);
      setLanguage(tab);
      localStorage.setItem('myObjetLangue', JSON.stringify(tab))
  };
  const handleLanguage = () => {
    if (searchLanguage !== "") {
      let tab=languages;
      tab.push(searchLanguage);
      setSearchLanguage("");
      setlanguagePresselection([]);
      localStorage.setItem('myObjetLangue', JSON.stringify(tab));
      setLanguage(tab)
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
  let dataStron=localStorage.getItem('myObjetLangue');
  const dataI = dataStron && (
    <Fragment>
      <div className="borderSkills">
        {languages.map((langue, key) => {
          return (
            <div id="skillkey">
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
 
  
  return (
    <div className="middleL">
      <div className="language">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4>langues</h4>
          <FcApproval color="#00FFFF" />
        </div>
        <div className="search ">
          <VscSearch />
          <input
            className="inputSkill"
            type="text"
            placeholder="Add language"
            value={searchLanguage}
            onChange={handleChangeLanguage}
          />
          <BsPlus cursor="pointer" onClick={handleLanguage} />
          {/* <button className="btnProfilSkill" onClick={handleLanguage}>
                  add
                </button> */}
        </div>
        {languageSelection}
        {/* {languageSelect} */}
        {dataI}
      </div>
    </div>
  );
};
export default Langue;
