import '../app.css'


const ProjectDetail=({numero,po,bac,pv,sv,ev,cv,ac})=>{




    return(
        <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'50%',textAlign:'center'}}>{numero}</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>{po}</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>{bac}</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>{pv}</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>{sv}</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>{ev}</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>{cv}</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>{ac}</td>
            </tr> 
    )
}



export default ProjectDetail