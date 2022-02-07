import React, {useEffect} from 'react';
import EditProfile from './EditProfile'
// import { Link, Redirect } from 'react-router-dom';
import { writeUserData, readUserData } from '../db'
import firebase from 'firebase'
import { Grid, Image, Button, Modal } from 'semantic-ui-react'
import '../styles/ProfilePage.css'
import pic from '../assets/mii.png'
import workoutpic from '../assets/workout.png'
import ReactPlayer from 'react-player'
import vid from '../assets/694BEBd9.mp4'


//class ProfilePage extends React.Component {
function ProfilePage() {
    const [open, setOpen] = React.useState(false)
    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState('')
    const [height, setHeight] = React.useState('')
    const [weight, setWeight] = React.useState('')
    const [pic, setPic] = React.useState('')



    
    //var name = "Ryannnnnn"
    //var age
    //var height
    //var weight

    //handleButtonClick = (e,{name})=> {this.setState({activeItem:name})};

    //render() {
    //const {activeItem} = this.state;
    //***Function to access existing, logged in user.***
    const getUser = () => {
        const user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged(function (user) {
            console.log("Status: ");
            console.log(user)
            readUserData(user.uid).then((info) => {
                console.log(info)
                console.log(info.name);
                setName(user.displayName);
                setAge(info.age);
                setHeight(info.height);
                setWeight(info.weight);
                setPic(user.photoURL)
                
            });
        })


    }
    const reDirect = () =>{
        window.location.href = '/upload';
    };
    useEffect(() => {
       getUser();
     }, []);

    const closeModal= () =>{
        setOpen(false)
        getUser();
     };
    

    return (
        <div className="main">

            <h1 className="title" > Profile </h1>

            <div className="centerGrid">
                <Grid columns={2} divided="horizontally" className="mainGrid">

                    <Grid.Row style={{ 'padding-top': '50px' }} />
                    <Grid.Row>
                        <Grid.Column>

                            <Image src={pic} className="pics"></Image>
                            <Grid columns={2}>
                                <Grid.Row>

                                    <Grid.Column className="rightAlignedColumn">
                                        <h2 className="label" > Name:</h2>
                                        <h2 className="label" > Age:</h2>
                                        <h2 className="label" > Height:</h2>
                                        <h2 className="label" > Weight:</h2>
                                    </Grid.Column>
                                    
                                    <Grid.Column className="leftAlignedColumn">
                                        <h2 className="info" > {name}</h2>
                                        <h2 className="info" > {age}</h2>
                                        <h2 className="info" > {height}</h2>
                                        <h2 className="info" > {weight}</h2>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>


                            <Grid.Row style={{ 'padding-top': '30px' }} className="centeredColumn">

                                <Modal
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    open={open}

                                    trigger={<Button className="editButton" > Edit Profile</Button>}
                                >
                                    <Modal.Header>Edit Profile</Modal.Header>
                                    <EditProfile />
                                    <Grid.Row style={{ 'padding-top': '10px' }} className="centeredColumn"></Grid.Row>
                                    <Button color="red" onClick={closeModal} > Close</Button>
                                    
                                </Modal>

                            </Grid.Row>

                        </Grid.Column>
                        <Grid.Column>
                            <h1 className="videos" > My Videos </h1>
                            <Grid.Row style={{ 'padding-top': '10px' }} />
                            {/* <Image src={workoutpic} className="workoutpics"></Image> */}
                            <ReactPlayer url={vid} loop="true" playing="true"></ReactPlayer>
                            <Grid.Row style={{ 'padding-top': '20px' }} />
                            {/* <Image src={workoutpic} className="workoutpics"></Image> */}
                            <ReactPlayer url="http://104.154.143.76/video/video=694BEBd9+t=09:15" loop="true" playing="true"></ReactPlayer>
                            <Grid.Row style={{ 'padding-top': '20px' }} />
                            {/* <Image src={workoutpic} className="workoutpics"></Image> */}
                            <ReactPlayer url="http://104.154.143.76/video/video=originalVid+t=01:10" loop="true" playing="true"></ReactPlayer>
                            <Grid.Row style={{ 'padding-top': '20px' }} className="centeredColumn">

                                <Button className="editButton" onClick={reDirect}>Upload New Video</Button>


                            </Grid.Row>
                        </Grid.Column>



                    </Grid.Row>
                </Grid>
            </div>
        </div>




    )
}
//}

export default ProfilePage