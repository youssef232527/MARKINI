import { FcApproval } from "react-icons/fc";
import "../style/styleProfil.css";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import data from "./data.json";

const Skill = () => {
  var compteur = 0;
  /*searche competance*/
  const [searchCompetance, setSearchCompetance] = useState("");
  const [sKilLsPreselection, setSkillsPresselection] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    console.log("skill a changer");
  }, [skills]);

  /* function utils in skills */
  function deleteSkill(key) {
    // console.log(key);
    // const skills=Object.assign([],skills);
      var  variable= skills[key]
    var tab=skills.filter(sk  =>
      sk !== variable              
    )
  

    setSkills(tab)

    // skills.splice(key, 1);
    // setSkills(skills);






    // localStorage.setItem("myObjet", JSON.stringify(skills));
    // console.log(JSON.stringify(skills));
    // setSkills(skills);





    //  window.location.reload();
    // window.location.reload(true);
    // console.log("changer" ,skil[key])
    // skil[key].innerHTML("");
    //     let hg=skil[key].getAttribute("span")
    // ;    console.log("attribu",hg);
    // var child = document.querySelectorAll("#skillkeychild");
    // console.log(child[key]);
    // var parent = child[key].parentNode;
    // console.log(parent);
    // parent.removeChild(child[key]);
    // if(skills.length > 1){
    //   parent.removeChild(child[key]); }

    // else{
    //     console.log("reste element")
    // if(skills.length > 1){
    // let skill = document.getElementById(string);
    // const parent = skill.parentNode;
    // parent.removeChild(skill);
    // var newParag=document.createElement('p');
    // newParag.id="noveau";
    // var text =document.createTextNode("vide");
    // newParag.appendChild(text);
    // parent.appendChild(newParag);

    // } else {
    //   parentSki.removeChild(ski)
    // }

    if (skills.length == 0) {
      setSearchCompetance("");
      setSkills([]);
      setSkillsPresselection([]);
    }
    // }else{
    // let skill = document.getElementById("skillkey");
    // const parent = skill.parentNode;
    // parent.removeChild(skill);
    // console.log('skiill', skill ,'parent' ,parent);

    // }

    // console.log("after suppression the parent is",parent);
    // console.log("after suppression the child is ", child[key]);
    // let tab = skills;
    // console.log("le cléé", key);
    // tab.splice(key, 1);
    // setSkills(tab);

    // console.log(key);
    // console.log(typeof skillSelect);

    //    console.log(key);
    //    console.log("skill",searchCompetance);
  }

  var handleClick = (e) => {
    let skill = document.getElementById("skill").innerHTML;
    //setSearchCompetance(e.target.innerHTML);
    let tab = skills;
    tab.push(e.target.innerHTML);
    setSearchCompetance("");
    setSkillsPresselection([]);

    console.log("je suis ici ", skills);
    setSkills(tab);
    localStorage.setItem("myObjet", JSON.stringify(tab));
  };

  const handleChange = (e) => {
    console.log("*********************");

    setSearchCompetance(e.target.value);

    let skills = data.skills.filter((skill) => {
      const regex = new RegExp(`^${searchCompetance}`, "gi");

      return skill.match(regex);
    });
    if (searchCompetance.length === 0) {
      skills = [];
    }
    setSkillsPresselection(skills);

    // setSkillsPresselection(skills);
  };

  const handleSkills = () => {
    // if (searchCompetance !== "") {
    //   let tab = skills;
    //   tab.push(searchCompetance);
    //   setSearchCompetance("");
    //   setSkillsPresselection([]);
    //   console.log("je suis ici ", skills);
    //   setSkills(tab);

    // }
    if (searchCompetance !== "") {
      skills.push(searchCompetance);
      setSearchCompetance("");
      setSkillsPresselection([]);
      localStorage.setItem("myObjet", JSON.stringify(skills));
      setSkills(skills);
    }
  };

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
  // var skillSelect = skills && (
  //   <Fragment>
  //     <div className="borderSkills">
  //       {skills.map((skill, key) => {
  //         compteur = compteur + 1;
  //         let compteurId = compteur;
  //         let string = compteurId.toString();
  //         return (
  //           <Fragment>
  //             <div id="skillkey" className="borderskill">
  //               <span>{skill}</span>
  //               <ImCross
  //                 cursor="pointer"
  //                 onClick={()=>deleteSkill( key, string)}
  //                 size="7px"
  //               />
  //             </div>
  //           </Fragment>
  //         );
  //       })}
  //     </div>
  //   </Fragment>
  // );

  // let dataStron = localStorage.getItem("myObjet");
  // let dataI = dataStron && (
  //   <Fragment>
  //     <div className="borderSkills">
  //       {JSON.parse(dataStron).map((skill, key) => {
  //         compteur = compteur + 1;
  //         let compteurId = compteur;
  //         let string = compteurId.toString();
  //         return (
  //           <Fragment>
  //             <div
  //               id="skillkey"
  //               className="borderskill"                
  //             >
  //               <span>{skill}</span>
  //               {/* <ImCross cursor="pointer" size="7px" /> */}
  //               <button onClick={() => deleteSkill(key, string)}></button>
  //             </div>
  //           </Fragment>
  //         );
  //       })}
  //     </div>
  //   </Fragment>
  // );
  return (
    <div className="skills">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4>skill</h4>
        <FcApproval color="#00FFFF" />
      </div>
      <div className="search ">
        <VscSearch />

        <input
          className="inputSkill"
          type="text"
          placeholder="Add Skill"
          value={searchCompetance}
          onChange={handleChange}
        />
        <BsPlus cursor="pointer" onClick={handleSkills} />
      </div>
      {skillSelection}
      {/* {skillSelect} */}
      <div className="borderSkills">
        {skills.map((l, key) => {         
          return (           
              <div
                id="skillkey"
                className="borderskill"                
              >
                <span>{l}</span>
                <ImCross cursor="pointer" size="7px" onClick={() => deleteSkill(key)} />
                {/* <button onClick={() => deleteSkill(key)}></button> */}
              </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skill;
