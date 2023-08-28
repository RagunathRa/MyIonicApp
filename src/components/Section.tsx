// import './Section.css';
import Sec1 from '/Images/i2-1.png'
import Sec2 from '/Images/i3.png'
import Sec3 from '/Images/I4.png'
import Sec4 from '/Images/i5.png'
import Sec5 from '/Images/i6.png'
import Sec6 from '/Images/i7.png'
import Sec7 from '/Images/i8.png'
import Ban1 from '/Images/Ban1.jpg'
import Ban2 from '/Images/Ban2.png'
import Sec8 from '/Images/i8.1.png'
import Sec9 from '/Images/i9.png'
import Sec10 from '/Images/i10.png'
import Sec11 from '/Images/i11.png'
// import Sec12 from '/Images/i12.png'


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
              style={{ height: '209px', }}
              src={Sec1}
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg></IonCol>
          <IonCol> <h3 style={{ color: 'red' }}>HOTSPOT</h3>
            <p> Luxury hotspots: 5 most expensive high streets in the..</p></IonCol>
          <IonCol>
            <IonImg
                 style={{ height: '209px', }}
              src={Sec2}
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg></IonCol>
        </IonRow>
      </IonGrid>
      <IonImg
         
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
          
            <h3  style={{ fontWeight: 'bold', display: 'inline' }}>Letest News </h3>
      <div style={{ borderBottom: '2px solid red',width:'30px', padding: '10px', display: 'flex', alignItems: 'center' }}></div>
        
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
            style={{ height: '209px'}}
            src={Sec7}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg><br/><br/>
  <div style={{backgroundColor:'pink'}}>
  {/* <IonItem style={{backgroundColor:'pink'}}> */}
              <IonGrid fixed={true}>
        <IonRow>
          <IonCol  size="auto">   <IonImg 
            style={{ height: '50px', }}
            src={Sec8}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
            <div  style={{ width: '150px',marginTop:'-20px',fontWeight:'35px'}} > <h1>IR Prime</h1></div>
             <h3    >Top 3  stories of the day</h3> 
          </IonCol>
          
          </IonRow>
   
      </IonGrid> <br/>
  
      
          {/* </IonItem> */}
            <IonGrid  fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
             style={{ height: '169px', }} 
            src={Sec9}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
 
            <p>

            8 retail companies headed by women, These brands are not just famous ...

            </p>
          </IonCol>

        </IonRow>
      </IonGrid>
        <IonGrid fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
             style={{ height: '169px', }}
            src={Sec10}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
        
            <p>

            Joom Marketplace offers a global window for sellers...  
            </p>
          </IonCol>

        </IonRow>
      </IonGrid>
        <IonGrid fixed={true}>
        <IonRow>
          <IonCol>   <IonImg
            style={{ height: '169px', }}
            src={Sec11}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg></IonCol>
          <IonCol>
           
            <p>

            FreshToHome fixing a broken meat market retailing in...
            </p>
          </IonCol>
        </IonRow>
      </IonGrid>  
    
      </div><br/>
      <h3  style={{ fontWeight: 'bold', display: 'inline' }}>Web Special </h3>
      <div style={{ borderBottom: '2px solid red',width:'30px', padding: '10px', display: 'flex', alignItems: 'center' }}>

</div>

     
      <IonImg
            style={{padding:'10px' }}
            src={Ban2}
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></IonImg>
      


    </div>
  );
};

export default Section;
