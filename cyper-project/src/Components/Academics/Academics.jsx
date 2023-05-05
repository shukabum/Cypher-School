import React, { useState } from 'react'
import './Acad.scss'
//import Table from 'react-bootstrap/Table';

import './Style.scss'

const Academics = () => {
  
const clss1_data = [
   
   { id:1,
    name:'Shubham Sharma',
    subject:['Html', 'CSS'  ],
    marks1:99,
    marks2:90
  },
  {
    id:2,
    name:'Kakshit Verma',
    subject:['Html', 'CSS'  ],
    marks1:56,
    marks2:20

  },
  {
    id:3,
    name:'Jagriti Gupta',
    subject:['Html', 'CSS'  ],
    marks1:35,
    marks2:78

  },
  {
    id:4,
    name:'Archie Justa',
    subject:['Html', 'CSS'  ],
    marks1:59,
    marks2:87

  },
  {
    id:5,
    name:'Prachi Singla',
    subject:['Html', 'CSS'  ],
    marks1:50,
    marks2:50
  },
  {
    id:6,
    name:'Shailesh Kumar',
    subject:['Html', 'CSS'  ],
    marks1:44,
    marks2:79

  },{
    id:7,
    name:'Devanshi Thakur',
    subject:['Html', 'CSS'  ],
    marks1:64,
    marks2:68

  } ,{
    id:8,
    name:'Arin Sharma',
    subject:['Html', 'CSS'  ],
    marks1:69,
    marks2:62
  }, {
    id:9,
    name:'Tanay Jha',
    subject:['Html', 'CSS'  ],
    marks1:0,
    marks2:10

  } ,{
    id:10,
    name:'Jay Thakur',
    subject:['Html', 'CSS'  ],
    marks1:86,
    marks2:91

  } ,{
    id:11,
    name:'Brahmeshwar',
    subject:['Html', 'CSS'  ],
    marks1:34,
    marks2:22
  }, {
    id:12,
    name:'Kritika Kumari',
    subject:['Html', 'CSS'  ],
    marks1:19,
    marks2:49

  }
  , {
    id:13,
    name:'Shivam Jha',
    subject:['Html', 'CSS'  ],
    marks1:30,
    marks2:70

  }
  ,{
    id:14,
    name:'Mansi Sharma',
    subject:['Html', 'CSS'  ],
    marks1:80,
    marks2:85

  } ,{
    id:15,
    name:'Aastha Thakur',
    subject:['Html', 'CSS'  ],
    marks1:22,
    marks2:11
  }, {
    id:16,
    name:'Madan Kumar',
    subject:['Html', 'CSS'  ],
    marks1:67,
    marks2:78

  }

]
const clss2_data =[
  
 { id:1,
  name:'Manibha Sood',
  subject:['Html', 'CSS'  ],
  marks1:99,
    marks2:90
},
{
  id:2,
  name:'Nandan Sharma',
  subject:['Html', 'CSS'  ],
  marks1:99,
  marks2:90
}, {
  id:3,
  name:'Khushi Janagal',
  subject:['Html', 'CSS'  ],
  marks1:19,
  marks2:49

}
, {
  id:4,
  name:'Manibha Sood',
  subject:['Html', 'CSS'  ],
  marks1:30,
  marks2:70

}
,{
  id:5,
  name:'Tamanna Sen',
  subject:['Html', 'CSS'  ],
  marks1:80,
  marks2:85

} ,{
  id:6,
  name:'Pavas Goyal',
  subject:['Html', 'CSS'  ],
  marks1:22,
  marks2:11
}, {
  id:7,
  name:'Aatish Thakur',
  subject:['Html', 'CSS'  ],
  marks1:67,
  marks2:78

}, {
  id:8,
  name:'Pratham Jain',
  subject:['Html', 'CSS'  ],
  marks1:19,
  marks2:49

}
, {
  id:9,
  name:'Ayush Singh',
  subject:['Html', 'CSS'  ],
  marks1:30,
  marks2:70

}
,{
  id:10,
  name:'Pawan Kumar',
  subject:['Html', 'CSS'  ],
  marks1:80,
  marks2:85

} ,{
  id:11,
  name:'Arunesh Pratap',
  subject:['Html', 'CSS'  ],
  marks1:22,
  marks2:11
}, {
  id:12,
  name:'Lalit Yadav',
  subject:['Html', 'CSS'  ],
  marks1:67,
  marks2:78

}, {
  id:13,
  name:'Kajol Yadav',
  subject:['Html', 'CSS'  ],
  marks1:19,
  marks2:49

}
, {
  id:14,
  name:'Prince Jha',
  subject:['Html', 'CSS'  ],
  marks1:30,
  marks2:70

}
,{
  id:15,
  name:'Utkarsh Sharma',
  subject:['Html', 'CSS'  ],
  marks1:80,
  marks2:85

} ,{
  id:16,
  name:'Aman Ghadge',
  subject:['Html', 'CSS'  ],
  marks1:22,
  marks2:11
}, {
  id:17,
  name:'Pratik Sanap',
  subject:['Html', 'CSS'  ],
  marks1:67,
  marks2:78

}
]


  const[data,setData]=useState(clss1_data);
  const [wt,setWt] = useState('ClassA');
  const [sub,setSub] = useState('HTML'); 
  const [search, setSearch] = useState('');
  
  const handleInput=(e)=>{
    e.preventDefault();
    setSearch(e.target.value);
    if(e.target.value =="" )
    {
      setData(data);
    }
    else{
     const filterdata= data.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    // clss1_data = filterdata
     setData(filterdata);
    }
  }
  

  
  return (
    <div className='acad-page'>
      <header>
        <h1>
          Academics 
        </h1>
      </header>
      <div className='tbl'>
        <div className='table-data'>
          <section>
            <div>
              <label htmlFor='class'>Class</label>
              <select name='class'id='' onChange={(e)=>{
                setWt(e.target.value);
                wt==="ClassB"?setData(clss1_data):setData(clss2_data)
                
                
              }}>
               
                        <option value={"ClassA"}>Class A</option>
                        <option value={"ClassB"}>Class B</option>
              </select>
            </div>
           <div>
            <label htmlFor='Subject'>Subject</label>
            <select onChange={(e)=>{
              setSub(e.target.value); 

              }}>
                
                <option value={'HTML'} >React</option>
                <option value={'CSS'} >Javascript</option>
              
              </select>
           </div>
          </section> 
          <div className='search-br'>
              <input type='text' placeholder='Search Name' value={search} onChange={(e)=>handleInput(e)}/>
          </div>
        </div>
          <table >
            <tbody >
                  <tr >
                    <th >Name</th>
                    <th >Marks</th>
                  </tr>
                    
                  
                  
                    <tr className='data-row' key={2}>
                      
                      <td >
                      {data.map((val,i) => {  
                      
                          return (
                            <>
                            <ul >
                                <li key={val.id} className='names_rows'>
                                  {
                                    val.name
                                  }

                                </li>
                              </ul>
                            </>
                    
                          )
                      })}
                         </td>
                         <td >
                         {data.map((val,i) => {  
                      
                              return (
                                <>
                                  <ul >
                                      {
                                        sub==="HTML"?<li key={val.id} className='marks'>{val.marks1}</li>:<li key={val.id}className='marks'>{val.marks2}</li>
                                      }
                                      
                                  </ul>
                                </>
                        
                              )
                          })}
                          

                      </td>
                    </tr>
 
 
            </tbody>
            
          </table>

        </div>
      
        

    </div>
  )
}

export default Academics
