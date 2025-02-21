import styles from "../herosection/hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className="box2">
          <img
            src="https://s3-alpha-sig.figma.com/img/dffb/b860/559f834e0275c009608027ccae5ee787?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ptphB~z9TILLT~Y72cYYv5-78aKqhjFpbLJtBKYDpvWhpNDaJ-R28Z4aO~dI8CavbzDlWxsT0UtbQCI-ivI7pzRAOv-9b87ReaRtlTDWpX~j00gFRPrTKGaMfGW0YdRdbJiz6bnpFwFo4Kz0tK3QDoZBHWq51CuOExIBcoF9q5dKhv01LwnEkFCBYdKvB~zcTP923Q5Fk2uu8VZV4dSmMsJ6OwkBIsnHbTOyLV0D-Z~yrt1CTLy8KfEvkf5RvFpajVl823wy1YFluAOjc6efHWqV~LaT7yH9AI20cauv8A1xDyHZU8XmGCzSqX2gR77B6GFH9KVeF9XopJf1ldFaKg__"
            alt=""
          />
        </div>
        <div className="box3">
          <p>CBF:U/A</p>
          <p>Action</p>
          <p>Adventure</p>
          <p>2hr.28m</p>
        </div>
        <div className={styles.heroP}>
          <p className={styles.heroParagraph}>When a spell goes wrong,dangerous foes from other <br></br>worlds start to appear,forcig peter to discover what<br></br>ittruly means to be a spider-man</p>
        </div>
        <div className={styles.heroButton}>
           <button className={styles.playbutton}>
            <img src="/assets/images/playButton.png" alt="" />
            <span>play Buttin</span>
           </button>
           <button className={styles.chevronbutton}>
            <img src="/assets/images/Chevronbutton-two.png" alt="" />
            <span>More info</span>
           </button>
        </div>
      </div>
    </>
  );
}
