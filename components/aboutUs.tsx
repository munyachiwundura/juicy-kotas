import Image from 'next/image'
import styles from '../styles/components/aboutUs.module.css'

const AboutUs = () => {
  return (
  <div className={styles.container}>

          <p>
          Chimoko dheng kupindura
Ndokubva ndatanga kukungura
Yedu yekusada kupfuurwa nezvinhu
Ko, Kakandifumura?
Ndakambogaya chi video call
Pfungwa dzikati maya chisiya so
Ko kakandi recorder kobva kapa
Majournalist kuit zvisvike ku media No
          </p>
          <Image src={'/img/joseph.png'} width={500} height={500}/>
  </div>
  );
};

export default AboutUs;
