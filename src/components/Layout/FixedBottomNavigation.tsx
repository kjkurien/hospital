
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import AddHome from "@mui/icons-material/AddHome";
import Stars from "@mui/icons-material/LocalHotel";
import Profile from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const FixedBottomNavigation = () =>  {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (  
      <BottomNavigation 
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}
        value={value} onChange={(event, newValue) => {
        setValue(newValue);
      }}>
        <BottomNavigationAction label="Home" icon={<AddHome/>} value={value} onClick={() => navigate('/')} />
        <BottomNavigationAction label="Wards / Beds" icon={<Stars />} value={value}  onClick={() => navigate('/rating')}/>
        <BottomNavigationAction label="Profile" icon={<Profile />} value={value}  onClick={() => navigate('/profile')}/>
      </BottomNavigation>
  )
}

export default FixedBottomNavigation;