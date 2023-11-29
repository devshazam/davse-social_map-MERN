import React, { useState, useEffect} from 'react';

import Col from "react-bootstrap/Col";
import { TextField} from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch} from "react-redux";

import globalParamsObject from '../../../../parameters/mainAppParameterObject'

const CommonFieldsComp = (props:any) => {
    const [discountObject, setDiscountObject] = useState({name: '', description: '', district: ''});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "COMMON", payload: discountObject})
    }, [discountObject])

    // ==========================================================================================================

    return (
        <>
                <Col xs={12} md={6}>
                            <TextField  id="outlined-basic" label="Ваше название:" variant="outlined" fullWidth
                                        sx={{mb: 1}}
                                        error={Boolean(!discountObject.name && props.flag == 0)}
                                       onChange={(e) => setDiscountObject({...discountObject, name: e.target.value})}/>

                    <FormControl fullWidth sx={{mb: 1}}>
                    <InputLabel  error={Boolean(!discountObject.district && props.flag == 0)}>Ваш район:</InputLabel>
                    <Select
                        value={discountObject.district}
                        error={Boolean(!discountObject.district && props.flag == 0)}
                        onChange={(e: any) => setDiscountObject({...discountObject, district: e.target.value})} >
                        { 
                            globalParamsObject.main.districtsNames.map((item:any, index:any) => {
                                return(
                                    <MenuItem key={index} value={index + 1}>{item}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
                </Col>
                <Col xs={12} md={6}>

                    <TextField  label="Ваше описание:" fullWidth
                                multiline
                                rows={4}
                                sx={{mb: 1}}
                                error={Boolean(!Boolean(discountObject.description) && props.flag == 0)}
                                onChange={(e) => setDiscountObject({...discountObject, description: e.target.value})}/>


                </Col>



        </>
    );
};

export default CommonFieldsComp;
