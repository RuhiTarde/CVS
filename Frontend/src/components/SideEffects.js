
import React,{useState} from 'react';

const SideEffects=()=>{
    const dummyData = [
        
            {id:1, vaccineName:"BCG", sideEffect:"Fever ,cold , bodypain" , Action:"Painkiller medicine"},
            {id:2, vaccineName:"OPV 0", sideEffect:"Rashes on Body" , Action:"Common symptom"},
            {id:3, vaccineName:"Hepatitis B", sideEffect:"StomachAche" , Action:"Consult your doctop ASAP"},
            {id:4, vaccineName:"OPV1,2,3", sideEffect:"Fever ,cold , bodypain" , Action:"Painkiller medicine"},
            {id:5, vaccineName:"Pentavalent", sideEffect:"Rashes on Body" , Action:"Common symptom"},
            {id:6, vaccineName:"Fractional IPV", sideEffect:"StomachAche" , Action:"Consult your doctop ASAP"},
            {id:7, vaccineName:"Rotavirus", sideEffect:"Fever ,cold , bodypain" , Action:"Painkiller medicine"},
            {id:8, vaccineName:"Measles", sideEffect:"Rashes on Body" , Action:"Common symptom"},
            {id:9, vaccineName:"Vitamin A", sideEffect:"StomachAche" , Action:"Consult your doctop ASAP"},
            {id:10, vaccineName:"Measles/Rubella", sideEffect:"Fever ,cold , bodypain" , Action:"Painkiller medicine"},
            {id:11, vaccineName:"TT", sideEffect:"Rashes on Body" , Action:"Common symptom"},
            {id:12, vaccineName:"Typhoid", sideEffect:"StomachAche" , Action:"Consult your doctop ASAP"},
            {id:13, vaccineName:"Thyriod", sideEffect:"Fever ,cold , bodypain" , Action:"Painkiller medicine"},
            
        
    ]
    const [value,setValue] = useState('');
    const [dataSource,setDataSource] = useState(dummyData);
    const [tableFilter,setTableFilter] = useState([]);

    const filterData =(e) =>{
        if(e.target.value !=""){
        setValue(e.target.value);
        const filterTable=dataSource.filter(o=>Object.keys(o).some(k=>
        String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
        setTableFilter([...filterTable])
    }else {
        setValue(e.target.value);
        setDataSource([...dataSource])
    }
}
    return(

       
    

        <div className="container mt-5">
            <div className="input-group mb-3">
  
  <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"value={value}
  onChange={filterData}
  />
</div>

           
                    
        
            <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">vaccineName</th>
      <th scope="col">sideEffect</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {value.length > 0 ? tableFilter.map((data)=>{
        return(
            <tr>
            <td>{data.id}</td>
            <td>{data.vaccineName}</td>
            <td>{data.sideEffect}</td>
            <td>{data.Action}</td>
            </tr>
        )
    })
    :
    dataSource.map((data)=>{
        return(
            <tr>
            <td>{data.id}</td>
            <td>{data.vaccineName}</td>
            <td>{data.sideEffect}</td>
            <td>{data.Action}</td>
            </tr>
        )
    })
}
  </tbody>
</table>
            </div>
           
            
    )
}
export default SideEffects;