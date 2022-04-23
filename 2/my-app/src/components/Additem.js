// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function KeepMountedModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       {/* <Button onClick={handleOpen}>Open modal</Button> */}
//       <Modal
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="keep-mounted-modal-title"
//         aria-describedby="keep-mounted-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }







import React, { useEffect,useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {CheckLogin} from "../context/checkLogin";


export default function Additem() {
    const {data,setData} = useContext(CheckLogin);

    const [user, setUse] = useState({});
    
    function handleChange(e) {
        setUse({ ...user, [e.target.name]: e.target.value });
    }
  
    function handleAddItem(){
            setData(user)
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField id="outlined-text" label="category" name="category" type="text" onChange={handleChange} />

            </div>
            <div>
                <TextField id="outlined-text" label="title" name="title" type="text" onChange={handleChange} />
            </div>
            <div>
                <TextField id="outlined-text" label="description" name="des" type="text" onChange={handleChange} />

            </div>


            <Stack direction="row">
                <Button onClick={handleAddItem} variant="contained" color="success">
                    add
                </Button>

            </Stack>
        </Box>
    );
}
