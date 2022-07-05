import React from 'react'

const UserInfo = (props) => {
  const { users, user } = props

  return (
    <div className="card" style={{ margin: 20, paddingBottom: 40 }} >
      <img className="card-img-top" src={require("../assets/images/defaultclient.png")} alt="display image" width="70" height="70"  ></img>
      <div className="card-body">
        <div> <h3 className="card-text" style={{ color: "gray", fontSize: 15, textAlign: 'center' }} > {user.first_name} {user.last_name} </h3> </div>
          <div className='col'> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} >   :תאריך לידה  </h3>{user.user_birth}  </div>
          <div className='col'> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} >   :מגדר </h3>{user.user_gender}  </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} > :סוג עור   </h3>{user.user_skinType} </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} > :בעיית עור    </h3>{user.user_skinProblem} </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} > :מצב הלחיים   </h3> {user.user_cheek} </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} >  :מצב אזור הטי </h3>  {user.user_Tzone} </div>
           <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} >  :רמת חשיפה לשמש   </h3>{user.user_sunExposure} </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} > :רמת לחץ </h3> {user.user_stress}   </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} > :מצב הווסת   </h3>{user.user_period}  </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} >  :טיפול דרמטולוגי בעבר  </h3>{user.user_dermatology}  </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} >  :מוצרים קיימים בשימוש </h3> {user.user_currentProducts}  </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} > :רגישויות </h3> {user.user_sensitive}    </div>
          <div> <h3 className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} > :אזורים נוספים </h3> {user.user_areas}    </div>
      </div>
    </div>

  );
}
export default UserInfo;