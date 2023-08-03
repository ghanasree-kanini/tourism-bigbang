import React,{useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
// import '../../components/User/search.css';
import axios from "axios";

const Packagesget =()=>{

    const [selectedOption, setSelectedOption] = useState("");
    const [uploadedFileData,setUploadedFileData]=useState([]);

    const getFileData = async()=>{
        try{
            const res = await axios.get(`https://localhost:7222/api/Package/Location?destination/${selectedOption}`,{
                responseType:"json",
            });
            console.log(res);
            if(Array.isArray(res.data)){
             setUploadedFileData(res.data);
            }else{
                console.log("Invalid",res.data);
            }
        }catch(ex){
            console.log("Error:",ex);
        }
    };
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };

return(
<div>
<nav style={{backgroundColor:"#5F9EA0"}}>
    <ul className="ulnav">
        <li className="ulnav">KANINI</li>
    </ul>
</nav>
<FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Trip To</InputLabel>
        <Select value={selectedOption} onChange={handleSelectChange} defaultValue="" id="grouped-select" label="Grouping">
          <ListSubheader>Kerala</ListSubheader>
          <MenuItem value="Wayanad">Wayanad</MenuItem>
          <MenuItem value="banglore">Munnar</MenuItem>
          <ListSubheader>Delhi</ListSubheader>
          <MenuItem value="Dubai">Dubai</MenuItem>
          <MenuItem value="Taj Mahal">Taj Mahal</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={getFileData}>Search</Button>

      {uploadedFileData.length > 0 && (
        <div>
          <h2>Uploaded File Data</h2>
          <table>
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Destination</th>
                <th>Price for Adult</th>
                <th>Price for Child</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {uploadedFileData.map((item, index) => (
                <tr key={index}>
                  <td>{item.duration}</td>
                  <td>{item.destination}</td>
                  {/* <td>{item.packageimg}</td> */}
              
                  <td>
                  
                    {item.packageimg && (
                      <img
                        src={`data:image/jpeg;base64,${item.packageimg}`}
                        alt={`Image ${index + 1}`}
                        style={{ maxWidth: '100%', maxHeight: '100px' }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
</div>
);
};

export default Packagesget;