import React, { useState } from 'react';
import './OceanGame.css';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GameBox from "../GameBox"
import kelpPic from './OceanGamePictures/kelp.png'
import coralPic from './OceanGamePictures/coral.png'
import bluePic from './OceanGamePictures/bluefish.png'
import redPic from './OceanGamePictures/redfish.png'






function OceanGame() {
    const [curBlueFish, setCurBlueFish] = useState(0);
    const [curRedFish, setCurRedFish] = useState(0);
    const [curKelp, setCurKelp] = useState(0);
    const [curCoral, setCurCoral] = useState(0);
    const [getData, setGetData] = useState(false);


    const handleImageClick = e => {
        if (e.target.getAttribute("src") === bluePic) {
            e.target.setAttribute('src', redPic);
            setCurRedFish(curRedFish + 1);
            setCurBlueFish(curBlueFish - 1);
        }
        else if (e.target.getAttribute("src") === redPic) {
            e.target.setAttribute('src', "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
            setCurRedFish(curRedFish - 1);
        }
        else {
            e.target.setAttribute("src", bluePic);
            setCurBlueFish(curBlueFish + 1);

        }
    }
    const handleImageClick2 = e => {
        if (e.target.getAttribute("src") === coralPic) {
            e.target.setAttribute('src', kelpPic);
            setCurKelp(curKelp + 1);
            setCurCoral(curCoral - 1);
        }
        else if (e.target.getAttribute("src") === kelpPic) {
            e.target.setAttribute('src', "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
            setCurKelp(curKelp - 1);
        }
        else {
            e.target.setAttribute("src", coralPic);
            setCurCoral(curCoral + 1);

        }
    }
    var AddedBlueFish = Array.from(Array(curBlueFish).keys()).map((d) => <img src={bluePic} alt={bluePic} />);
    var AddedRedFish = Array.from(Array(curRedFish).keys()).map((d) => <img src={redPic} alt={redPic} />);
    var AddedKelp = Array.from(Array(curKelp).keys()).map((d) => <img src={kelpPic} alt={kelpPic} />);
    var AddedCoral = Array.from(Array(curCoral).keys()).map((d) => <img src={coralPic} alt={coralPic} />);

    var row1 = Array.from(Array(390).keys()).map((d) => <img onClick={handleImageClick} src={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="} />);
    var row2 = Array.from(Array(39).keys()).map((d) => <img onClick={handleImageClick2} src={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="} />);
    var buttonText = (getData ? "New Display" : "Check Data");

    var Chart = (
        <Grid container sx={{
            display: "flex", flexWrap: "wrap", padding: 2, mb: 2,
            backgroundColor: '#006994',
            border: "10px solid #FFFFFF",
            borderRadius: "10px"
        }}>
            <Typography>There were {curBlueFish} total blue fish in your last display</Typography>
            <Grid item sx={{ width: "2000px", p: 1 }}>
                {AddedBlueFish}
            </Grid>
            <Typography>There were {curRedFish} total red fish in your last display</Typography>
            <Grid item sx={{ width: "2000px", p: 1 }}>
                {AddedRedFish}
            </Grid>
            <Typography>There were {curCoral} total coral in your last display</Typography>
            <Grid item sx={{ width: "2000px", p: 1 }}>
                {AddedCoral}
            </Grid>
            <Typography>There were {curKelp} total kelp in your last display</Typography>
            <Grid item sx={{ width: "2000px", p: 1 }}>
                {AddedKelp}
            </Grid>
        </Grid>
    );

    var Game = (<Grid item sx={{ width: "2000px", p: 1 }}>
        {row1}
        {row2}
    </Grid>);

    var InUse = (getData ? Chart : Game)


    return (
        <GameBox>
            <Typography sx={{ textTransform: 'none', fontSize: '32pt', m: 2, fontFamily: 'Comic Sans MS' }} >
                Ocean Game!
            </Typography>


            <Grid container
                sx={{
                    minHeight: "550px",
                    padding: 2,
                    display: "flex", flexWrap: "wrap",
                }}>

                <Grid container sx={{
                    display: "inline", flexWrap: "no-wrap", padding: 2, mb: 2,
                    backgroundColor: '#006994',
                    border: "10px solid #FFFFFF",
                    borderRadius: "10px",
                    width: "2000px"

                }}>

                    {InUse}
                </Grid>
            </Grid>
            <button id="data" onClick={() => {
                setGetData(!getData)
                if (getData) {
                    setCurCoral(0);
                    setCurBlueFish(0);
                    setCurRedFish(0);
                    setCurKelp(0);
                }
            }}>
                <b>{buttonText}</b>
            </button>


        </GameBox>
    );
}

export default OceanGame;