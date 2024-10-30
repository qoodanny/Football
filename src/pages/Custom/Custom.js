import './Custom.css';
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import team3 from '../../assets/team3.png';
import team4 from '../../assets/team4.png';
import team5 from '../../assets/team5.png';

export default function Custom() {
  return (
    <div class="custom-page">
      <button id="create-team">Create your own team!</button>
      <div class="board">
        <div class="post">
          <p id="title">My favorite players of all time!!!</p>
          <p id="author">by: LanaDelReyStan123</p>
          <img id="formation" src={team1}></img>
        </div>
        <div class="post">
          <p id="title">squad</p>
          <p id="author">by: csj2003</p>
          <img id="formation" src={team2}></img>
        </div>
        <div class="post">
          <p id="title">superteam</p>
          <p id="author">by: kdisasnake</p>
          <img id="formation" src={team3}></img>
        </div>
        <div class="post">
          <p id="title">yoyo yo yo y</p>
          <p id="author">by: comp3020student</p>
          <img id="formation" src={team4}></img>
        </div>
        <div class="post">
          <p id="title">i hate all these players</p>
          <p id="author">by: ProudHater</p>
          <img id="formation" src={team5}></img>
        </div>
      </div>
    </div>
  );
}
