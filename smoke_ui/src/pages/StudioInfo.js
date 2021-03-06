import React, { useState } from 'react';
import { useNavigate, useParams} from "react-router-dom";
import { Link, Navigate } from 'react-router-dom';
import {useEffect } from 'react';
import PORT from '../port';

function StudioInfo({StudioToView}){
    const [studioInfo, setStudioInfo] = useState([]);
    let params = useParams();
    if(params.id !== undefined) StudioToView = params.id;
    console.log(StudioToView);

    const GetStudioInfo = async () => {
        //const studio_id = StudioToView.studio_id;
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Studios/{"studio_id":${StudioToView}}`));
        const data = await(request.json());
        console.log(data);
        setStudioInfo(data[0]);
    }

    const [name, setName] = useState(studioInfo.name);
    const [website, setWebsite] = useState(studioInfo.website);
    const [phone, setPhone] = useState(studioInfo.phone);

    const navigate = useNavigate();

    const editStudio = async () => {
        const studio_id = StudioToView;
        console.log(studio_id);
        let editedStudio = {studio_id};
        if(name !== undefined && name !== "") editedStudio.name = name;
        if(website !== undefined && website !== "") editedStudio.website = encodeURIComponent(website);
        if(phone !== undefined) editedStudio.phone = phone;
        //JSON.stringify({studio_id, name, website: encodeURIComponent(website), phone})
        const request = await(fetch(`http://flip2.engr.oregonstate.edu:${PORT}/Studios-Update/${JSON.stringify(editedStudio)}`));
        navigate('/Studios')
    };

    useEffect(()=>{
        GetStudioInfo();
        setName(studioInfo.name);
        setWebsite(studioInfo.website);
        setPhone(studioInfo.phone);
    }, [])

    return(
        <>
          <div>
                <h1>{studioInfo.name}</h1>
                <label for="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder={studioInfo.name}
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <label for="website">Websute URL</label>
                <input
                    type="text"
                    id="website"
                    value={website}
                    placeholder={studioInfo.website}
                    onChange={e => {setWebsite(e.target.value)}} />
                <label for="phone">Phone #</label>
                <input
                    type="number"
                    id="phone"
                    placeholder={studioInfo.phone}
                    value={phone}
                    onChange={e => setPhone(e.target.value)} />
              <button
                    onClick={editStudio}
              >Save</button>
          </div>
          </>
    );
}

export default StudioInfo;