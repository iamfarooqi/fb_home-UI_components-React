import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//FIRST METHOD


const Fbcard = ({profile, title, body, imageUrl}) => {
  return <div className={"body"}>
    
    <h1> <img className={"profile"} src={profile} alt="profile"/> {title}</h1>
    <p> {body}</p>
    <img className={"post-img"} src={imageUrl} alt="fbpostpic"/>
  </div>
}

ReactDOM.render(
  <div>
    <Fbcard
    profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
    title="Facebook Post"
    body="Natural Beauty 1"
    imageUrl ="https://hopeforthebrokenhearted.files.wordpress.com/2020/11/prayer-from-debbie-9.jpg"
    />
    <Fbcard
    profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
    title="Facebook Post"
    body="Natural Beauty 1"
    imageUrl ="https://i.pinimg.com/originals/02/ae/74/02ae74b5ac0a32f60c3bf0d871831f8a.jpg"
    />
    <Fbcard
    profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
    title="Facebook Post"
    body="Natural Beauty 1"
    imageUrl ="https://upload.wikimedia.org/wikipedia/en/e/e3/Konaseema_greenery_1.JPG"
    />
  </div>,
    document.getElementById("root")
);


//SECOND METHOD


// function Fbcard(fb) {

//   return <div className={"body"}>
//     <h1><img className={"profile"} src={fb.profile} alt="profile"/> {fb.title}</h1>
//     <p> {fb.body}</p>
//     <img className={"post-img"} src={fb.imageUrl} alt="fbpostpic" />

//   </div>;

// }

// ReactDOM.render(

//   <div>
//   <Fbcard
//         profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
//     title="Facebook Post" 
//     body = "Natural Beauty 01"
//     imageUrl = "https://hopeforthebrokenhearted.files.wordpress.com/2020/11/prayer-from-debbie-9.jpg"/>
//   <Fbcard
//         profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
//     title="Facebook Post" 
//     body = "Natural Beauty 02"
//     imageUrl = "https://i.pinimg.com/originals/02/ae/74/02ae74b5ac0a32f60c3bf0d871831f8a.jpg"/>
//   <Fbcard
//         profile="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
//     title="Facebook Post" 
//     body = "Natural Beauty 03"
//     imageUrl = "https://upload.wikimedia.org/wikipedia/en/e/e3/Konaseema_greenery_1.JPG"/>
//     </div>, document.querySelector('#root'));





