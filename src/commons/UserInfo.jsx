import React from 'react'

const UserInfo = (props) => {
  const {users} = props

  return (
    <div className="card"  style={{margin:20, alignItems:'center', paddingBottom:40}} >
    <img className="card-img-top" src={require("../assets/images/defaultclient.png")} alt="display image" width="70" height="70"  ></img>   
    <div className="card-body">
      <div> <h3 className="card-text" style={{color:"#c4a092",fontSize:15,textAlign:'center'}} > {users.first_name}  </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.appUser_id}  :מספר משתמש </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_birth}  :תאריך לידה  </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_gender}  :מגדר </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_skinType}  :סוג עור </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_skinProblem}  :בעיית עור </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_cheek}  :מצב הלחיים </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_Tzone}  :מצב אזור ה-T </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_sunExposure}  :רמת חשיפה לשמש </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_stress}  :רמת לחץ </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_period}  :מצב הווסת </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_dermatology}  :האם היה בטיפול דרמטולוגי בעבר </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_currentProducts}  :מוצרים קיימים בשימוש </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_sensitive}  :רגישויות </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_areas}  :אזורים נוספים </h3> </div>

    </div>
    </div>
    
   );
  }
   export default UserInfo;