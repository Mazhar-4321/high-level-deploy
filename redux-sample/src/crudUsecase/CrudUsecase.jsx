import React from "react";
import './CrudUsecase.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux'
import { addUser, editUser, deleteUser } from "../slices/usersSlice";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';

export const CrudUsecase = () => {
    const users = useSelector((state) => state.users.usersArray)
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [isEdit, setEditMode] = React.useState(false)
    const [userObject, setUserObject] = React.useState({
        email: '', password: '', id: ''
    })
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const updateUser = () => {
        isEdit ?
            dispatch(editUser(userObject)) :
            dispatch(addUser(userObject));
        setOpen(false);
        setEditMode(false);
        setUserObject(prevObject => ({ ...prevObject, email: '', password: '', id: '' }))
    }
    const handleEdit = (data) => {
        setOpen(true);
        setUserObject(prevObj => ({ ...prevObj, email: data.email, password: data.password, id: data.id }))
        setEditMode(true)
    }
    return (
        <div className="parent-container">

            <Button sx={{ width: '125px' }} onClick={() => setOpen(true)} variant="contained">Add User</Button>
            {
                users.length > 0 && users.map(e => {
                    return (
                        <div className="child-container" key={e.id}>
                            <div className="section-1">
                                {e.email}
                            </div>
                            <div className="section-2">
                                <IconButton aria-label="delete">
                                    <EditIcon onClick={() => handleEdit(e)} />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteIcon onClick={() => dispatch(deleteUser(e))} />
                                </IconButton>
                            </div>
                        </div>)
                })
            }
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Enter User Details"}
                </DialogTitle>
                <DialogContent sx={{ margin: '20px 20px 20px 20px', padding:'10px 10px 10px 10px', display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                    <TextField sx={{margin:'5px 5px 5px 5px'}} value={userObject.email} onChange={(event) => setUserObject(prevObject => ({ ...prevObject, email: event.target.value }))} id="outlined-basic" label="Enter Email " variant="outlined" />
                    <FormControl  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            value={userObject.password}
                            onChange={(event) => setUserObject(prevObject => ({ ...prevObject, password: event.target.value }))}
                             id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={updateUser}>OK</Button>
                    <Button onClick={() => setOpen(false)} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}