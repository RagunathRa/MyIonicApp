import React from 'react';
import { IonButtons, IonContent, IonImg, IonIcon,   IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import Section from '../components/Section';
// import Footer from '../components/Footer';
import { search } from 'ionicons/icons';  
import LOGO from '/Images/I1.png';  
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
    <IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu Content</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">This is the menu content.</IonContent>
  </IonMenu>
  <IonPage id="main-content">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        {/* <IonTitle>Menu</IonTitle> */}
        <IonImg
        style={{height:'49px'}}
      src={LOGO}
      alt="The Wisconsin State Capitol building in Madison, WI at night"
    ></IonImg>
     <IonIcon icon={search} slot='end' style={{ marginRight: '40px' }} /> 
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding"> 
    <Section />
    {/* <Footer /> */}
    </IonContent>
  </IonPage>
  </>

  );
};

export default Home;
