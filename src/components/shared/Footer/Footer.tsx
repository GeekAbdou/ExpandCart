import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.contentMd}>
          <div className={styles.footerSection}>
            <div className={styles.logoSection}>
              <h3 className={styles.logoWord}>Creality Egypt</h3>
              <p className={styles.footerListItem}>
                Creality is a professional manufacturer, specializing in
                integrating software research, design, and distributing &
                reselling as a whole. We encourage everyone to join to learn
                more about and enjoy the convenience of technology.
              </p>
            </div>
            <div className={styles.linkSection}>
              <h6 className={styles.sectionTitle}>Quick links</h6>
              <div className={styles.containerFooter}>
                <p className={styles.footerListItem}>
                  <a href="https://crealityegypt.com/info/about-us-4">
                    About us
                  </a>
                </p>
                <p className={styles.footerListItem}>
                  <a href="https://crealityegypt.com/contact/">Contact us</a>
                </p>
                <p className={styles.footerListItem}>
                  <a href="https://crealityegypt.com/info/terms-conditions-5">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.contactSection}>
              <h6 className={styles.sectionTitle}>Contact us</h6>
              <div className={styles.containerFooter}>
                <p className={styles.footerListItem}>Maadi, Cairo, Egypt</p>
                <p className={styles.footerListItem}>Phone: +201094668220</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.pullLeft}>
          <p>
            © 2021, Creality3D Store® Official Store for Creality 3D Printers
            and Accessories.
          </p>
        </div>
        <div className={styles.pullRight}>
          <img
            src="https://crealityegypt.com/ecdata/stores/OWEIQG1011/image/data/custom-wonder/express.png"
            alt="Express"
          />
          <img
            src="https://crealityegypt.com/ecdata/stores/OWEIQG1011/image/data/custom-wonder/k.png"
            alt="K"
          />
          <img
            src="https://crealityegypt.com/ecdata/stores/OWEIQG1011/image/data/custom-wonder/master.jpg"
            alt="MasterCard"
          />
          <img
            src="https://crealityegypt.com/ecdata/stores/OWEIQG1011/image/data/custom-wonder/visa.png"
            alt="Visa"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
