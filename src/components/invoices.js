import { useContext } from 'react';
import projectContext from '../context';
import '../App.css';

const Invoices=()=>{

const project=useContext(projectContext)
console.log(project.project);
setTimeout(()=>{
    project.setProject('hello')
},2000)

return(
    <div style={{flexBasis:'55%',flexGrow:1,display:'flex',gap:'1rem'}}>
          <div style={{backgroundColor:'var(--my-blue)',flexBasis:'40%',boxShadow:'0 0 5px 2px lightblue'}}>
                card blue
          </div>
          <div style={{flexBasis:'60%',flexGrow:1,display:'flex',flexDirection:'column',justifyContent:'stretch',gap:'1rem'}}>
            {project.project ==null ?<div style={{backgroundColor:'white',boxShadow:'0 0 5px 2px lightgray',flexBasis:'40%',padding:'0.5rem',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
              <div>projects by familyProduct</div>
              <div style={{display:'flex',justifyContent:'space-around'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'end'}}>
                  <div>111M</div>
                  <div  style={{height:'5rem',width:'1.5rem',backgroundColor:'var(--my-blue)',marginTop:'0.25rem'}}></div>
                  <div>Ingénierie</div>
                </div>

                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'end'}}>
                  <div>61M</div>
                  <div  style={{height:'2rem',width:'1.5rem',backgroundColor:'var(--my-blue)',marginTop:'0.25rem'}}></div>
                  <div>G.project</div>
                </div>

                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'end'}}>
                  <div>91M</div>
                  <div  style={{height:'3rem',width:'1.5rem',backgroundColor:'var(--my-blue)',marginTop:'0.25rem'}}></div>
                  <div>procedée</div>
                </div>

                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'end'}}>
                  <div>31M</div>
                  <div  style={{height:'1rem',width:'1.5rem',backgroundColor:'var(--my-blue)',marginTop:'0.25rem'}}></div>
                  <div>E2E</div>
                </div>
              </div>
            </div>:<></>}
            <div style={{backgroundColor:'white',boxShadow:'0 0 5px 2px lightgray',flexGrow:1,flexBasis:'60%'}}>
              second
            </div>
          </div>
        </div>
)


}




export default Invoices