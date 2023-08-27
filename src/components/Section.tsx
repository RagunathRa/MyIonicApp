// import './Section.css';
import Sec1 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i2-1.png'
import Sec2 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i3.png'
import Sec3 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/I4.png'
import Sec4 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i5.png'
import Sec5 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i6.png'
import Sec6 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i7.png'
import Sec7 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i8.png'
import Ban1 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/Ban1.jpg'
import Ban2 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/Ban2.png'
import Sec8 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i8.1.png'
import Sec9 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i9.png'
import Sec10 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i10.png'
import Sec11 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i11.png'
// import Sec12 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i12.png'


import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';
import { IonButtons, IonContent, IonImg, IonItem, IonLabel, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonListHeader, IonIcon, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
interface ContainerProps { }

const Section: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonGrid>
        <IonRow>
          <IonCol   >
            <IonImg
              // style={{ height: '209px', }}
              src={Sec1}
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg></IonCol>
          <IonCol> <h3 style={{ color: 'red' }}>HOTSPOT</h3>
            <p> Luxury hotspots: 5 most expensive high streets in the..</p></IonCol>
          <IonCol>
            <IonImg
              // style={{ height: '209px', }}
              src={Sec2}
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg></IonCol>
        </IonRow>
      </IonGrid>
      <IonImg
              // style={{ height: '209px', }}
              src={Ban1}
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
      <div>
        <p>Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car</p>
      </div>
      <IonGrid fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
            style={{ height: '209px', }}
            src={Sec3}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
            <h5 style={{ color: 'red' }} >Select Citywalk</h5><p>
              Wow! Momo Foods enters Bhopal with Wow!
              # Beverage
              #reel stories podcast

            </p>
          </IonCol>

        </IonRow>
      </IonGrid>
      <IonList>
        <IonItem>
          <IonLabel></IonLabel>
        </IonItem>
      </IonList>
      <IonGrid fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
            style={{ height: '209px', }}
            src={Sec4}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
            <h5 style={{ color: 'red' }}> Food & Beverage</h5><p>

              KFC opens another outlet in Punjab KFC opens another outlet in Punjab
              # Beverage
              #reel stories podcast

            </p>
          </IonCol>

        </IonRow>
      </IonGrid>
      <IonList>
        <IonItem>
          <IonLabel></IonLabel>
        </IonItem>
      </IonList>
      <IonGrid fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
            style={{ height: '209px', }}
            src={Sec5}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
            <h5 style={{ color: 'red' }}>Select Citywalk</h5><p>

              FNP (Ferns N Petals) appoints Ashish Goel
              # Citywalk
              #reel stories podcast
            </p>
          </IonCol>

        </IonRow>
      </IonGrid>
          <IonItem   >
            <IonLabel>Letest News</IonLabel>

          </IonItem>
      <IonGrid>
        <IonRow>  
     <IonCol>
            <IonCard>
              <img alt="Silhouette of mountains" src={Sec6} style={{width: '25em'}}/>
              <IonCardHeader>
                <IonCardTitle>Unwrapping the Archies’ reinvention plan
</IonCardTitle>
                <IonCardSubtitle>#Lifestyle</IonCardSubtitle>
              </IonCardHeader>
              </IonCard>
          </IonCol>

        </IonRow>
      </IonGrid>
      <IonItem style={{ padding:25}} >
        <IonLabel><h1>Croma opens 58 outlets in 6, Croma retails more than 16,000</h1>
These companies created a lot of hype when they listed on the...</IonLabel>

      </IonItem>
      <IonItem  style={{ padding:25}} >
        <IonLabel><h1>Select Citywalk opens 4 new stores in June</h1>
These companies created a lot of hype when they listed on the...</IonLabel>

      </IonItem>
    

      <IonImg
            style={{ height: '209px', }}
            src={Sec7}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg>
  <div style={{backgroundColor:'pink'}}>
  {/* <IonItem style={{backgroundColor:'pink'}}> */}
              <IonGrid fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
            style={{ height: '50px', }}
            src={Sec8}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
          <h1>IR Prime</h1>
<h3>Top 3  stories of the day</h3>
          </IonCol>

        </IonRow>
      </IonGrid> 

          {/* </IonItem> */}
            <IonGrid fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
            style={{ height: '209px', }}
            src={Sec4}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
            <h5 style={{ color: 'red' }}> Food & Beverage</h5><p>

              KFC opens another outlet in Punjab KFC opens another outlet in Punjab
              # Beverage
              #reel stories podcast

            </p>
          </IonCol>

        </IonRow>
      </IonGrid>
        <IonGrid fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
            style={{ height: '209px', }}
            src={Sec4}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
            <h5 style={{ color: 'red' }}> Food & Beverage</h5><p>

              KFC opens another outlet in Punjab KFC opens another outlet in Punjab
              # Beverage
              #reel stories podcast

            </p>
          </IonCol>

        </IonRow>
      </IonGrid>
        <IonGrid fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
            style={{ height: '209px', }}
            src={Sec4}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
            <h5 style={{ color: 'red' }}> Food & Beverage</h5><p>

              KFC opens another outlet in Punjab KFC opens another outlet in Punjab
              # Beverage
              #reel stories podcast

            </p>
          </IonCol>
        </IonRow>
      </IonGrid>
      </div>
    </div>
  );
};

export default Section;
