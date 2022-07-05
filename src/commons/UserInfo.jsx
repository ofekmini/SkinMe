import React from 'react'

const UserInfo = (props) => {
  const {users, user} = props

  return (
    <div className="card"  style={{margin:20, alignItems:'center', paddingBottom:40}} >
    <img className="card-img-top" src={require("../assets/images/defaultclient.png")} alt="display image" width="70" height="70"  ></img>   
    <div className="card-body">
      <div> <h3 className="card-text" style={{color:"#c4a092",fontSize:15,textAlign:'center'}} > {user.first_name}  </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.appUser_id}  :מספר משתמש </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_birth}  :תאריך לידה  </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_gender}  :מגדר </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_skinType}  :סוג עור </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_skinProblem}  :בעיית עור </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_cheek}  :מצב הלחיים </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_Tzone}  :מצב אזור ה-T </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_sunExposure}  :רמת חשיפה לשמש </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_stress}  :רמת לחץ </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_period}  :מצב הווסת </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_dermatology}  :האם היה בטיפול דרמטולוגי בעבר </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_currentProducts}  :מוצרים קיימים בשימוש </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_sensitive}  :רגישויות </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_areas}  :אזורים נוספים </h3> </div>

    </div>
    </div>
    
   );
  }
   export default UserInfo;