
import { useState } from 'react';
import './App.css';
import projectContext from './context';
import Invoices from './components/invoices';
function App() {
  const [project,setProject]=useState(null)
  return (
    <projectContext.Provider value={{project,setProject}} >
    <div style={{flexGrow:1,display:'flex',gap:'1rem'}}>
      <div style={{flexBasis:'50%',display:'flex',flexDirection:'column',gap:'1rem'}}>
        <div style={{ backgroundColor: 'white', boxShadow: '0 0 5px 2px lightgray',display:'flex',justifyContent:'space-around', flexBasis: '10%', padding: '0.5rem' ,fontFamily:'arial'}}>
          
          <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'space-around'}}>
            <div>Total Project's</div>
            <div> 29 PO</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'space-around' }}>
            <div>Projects Value</div>
            <div> 236,698,307</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center' ,justifyContent:'space-around'}}>
            <div>As Built</div>
            <div> 136,698,307</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center' ,justifyContent:'space-around'}}>
            <div>Invoiced</div>
            <div> 151,600,250</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'space-around' }}>
            <div>Saving</div>
            <div>36,698,307</div>
          </div>

        </div>
        <div style={{backgroundColor:'white',boxShadow:'0 0 5px 2px lightgray',flexBasis:'15%',flexGrow:1,padding:'0.5rem'}}>
          second
        </div>
        
        <Invoices />
        <div style={{backgroundColor:'white',boxShadow:'0 0 5px 2px lightgray',flexBasis:'25%',flexGrow:1}}>
          third
        </div>
      </div>
      <div style={{flexBasis:'50%',backgroundColor:'white',boxShadow:'0 0 5px 2px lightgray',lineHeight:'1.75rem',fontFamily:'arial'}}>
        <table style={{display:'flex',flexDirection:'column',flexGrow:1}}>
          <thead style={{display:'flex',boxShadow:'0 0 5px 2px lightgray',padding:'0.5rem',marginBottom:'0.5rem'}}>
            <th style={{flexBasis:'50%'}}>Project Numero</th>
            <th style={{flexBasis:'33%'}}>PO Value</th>
            <th style={{flexBasis:'33%'}}>BAC</th>
            <th style={{flexBasis:'33%'}}>PV</th>
            <th style={{flexBasis:'33%'}}>SV</th>
            <th style={{flexBasis:'33%'}}>EV</th>
            <th style={{flexBasis:'33%'}}>CV</th>
            <th style={{flexBasis:'33%'}}>AC</th>
          </thead>
          <tbody >
            <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'33%',textAlign:'center'}}>2024-200059</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$35000</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$250</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-100</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$2800</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-200</td>
            </tr>
            <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'33%',textAlign:'center'}}>2024-200059</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$35000</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$250</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-100</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$2800</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-200</td>
            </tr>
            <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'33%',textAlign:'center'}}>2024-200059</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$35000</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$250</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-100</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$2800</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-200</td>
            </tr>            
            <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'33%',textAlign:'center'}}>2024-200059</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$35000</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$250</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-100</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$2800</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-200</td>
            </tr>
            <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'33%',textAlign:'center'}}>2024-200059</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$35000</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$250</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-100</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$2800</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-200</td>
            </tr>
            <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'33%',textAlign:'center'}}>2024-200059</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$35000</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$250</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-100</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$2800</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-200</td>
            </tr>
            <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'33%',textAlign:'center'}}>2024-200059</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$35000</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$250</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-100</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$2800</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-200</td>
            </tr>
            <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'33%',textAlign:'center'}}>2024-200059</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$35000</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$250</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-100</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$2800</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-200</td>
            </tr>
            <tr className='tableProject' style={{display:'flex',paddingInline:'0.5rem'}}>
              <td style={{flexBasis:'33%',textAlign:'center'}}>2024-200059</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$35000</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$250</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-100</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>$2800</td>
              <td style={{flexBasis:'33%',textAlign:'center'}}>-200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </projectContext.Provider>
  );
}

export default App;
