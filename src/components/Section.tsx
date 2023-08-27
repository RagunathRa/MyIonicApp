// import './Section.css';
import Sec1 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i2-1.png'
import Sec2 from '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i3.png'
import Sec3 from  '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/I4.png'
import Sec4 from  '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i5.png'
import Sec5 from  '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i6.png'
import Sec6 from  '/Users/johnj/Ragu/R4/R5/MyIonicApp/public/i7.png'


import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';
import { IonButtons, IonContent, IonImg,IonItem, IonLabel, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonListHeader,   IonIcon,   IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
interface ContainerProps { }

const Section: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
          <IonGrid>
        <IonRow>
          <IonCol   >
               <IonImg
        style={{height:'209px', }}
      src={Sec1}
      alt="The Wisconsin State Capitol building in Madison, WI at night"
    ></IonImg></IonCol>
          <IonCol> <h3 style={{color:'red'}}>HOTSPOT</h3>
     <p> Luxury hotspots: 5 most expensive high streets in the..</p></IonCol>
          <IonCol>  
             <IonImg
        style={{height:'209px', }}
      src={Sec2}
      alt="The Wisconsin State Capitol building in Madison, WI at night"
    ></IonImg></IonCol>
        </IonRow>
      </IonGrid>
      
  <div>
    <p>Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car</p>
  </div>
  <IonGrid fixed={true}>
      <IonRow>
        <IonCol>   <IonImg
        style={{height:'209px', }}    
      src={Sec3}
      alt="The Wisconsin State Capitol building in Madison, WI at night"
    ></IonImg></IonCol>
        <IonCol>
          <h5 style={{color:'red'}} >Select Citywalk</h5><p>
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
        style={{height:'209px', }}    
      src={Sec4}
      alt="The Wisconsin State Capitol building in Madison, WI at night"
    ></IonImg></IonCol>
        <IonCol>
          <h5 style={{color:'red'}}> Food & Beverage</h5><p>
         
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
        style={{height:'209px', }}    
      src={Sec5}
      alt="The Wisconsin State Capitol building in Madison, WI at night"
    ></IonImg></IonCol>
        <IonCol>
          <h5 style={{color:'red'}}>Select Citywalk</h5><p>
          
FNP (Ferns N Petals) appoints Ashish Goel
# Citywalk
#reel stories podcast
          </p>
</IonCol>
       
      </IonRow>
    </IonGrid>
<IonItem   >
          <IonLabel>Letest News</IonLabel>
          <IonGrid>
        <IonRow>
          <IonCol>
          <IonCard>
      <img alt="Silhouette of mountains" src={Sec6} />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
          </IonCol>
          <IonCol>
          <IonCard>
      <img alt="Silhouette of mountains" src={Sec6} />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
          </IonCol>
       
        </IonRow>
      </IonGrid>
        </IonItem>
        
     
    </div>
  );
};

export default Section;
