import React from "react"

export default function SkillsList(props){
    return(
        <div className=" flex justify-center items-center flex-col gap-1 mx-5 ">
            <h2 className=" text-white text-[26px]" style={{ fontFamily: 'audiowide'}} >{props.nome}</h2>
            <img src={props.imgUrl} alt={props.alt} title={props.title} className=""/>
        </div>

    )
}