import { IonItem, IonList, IonPage } from "@ionic/react";

const Home = () => {
  return (
    <IonPage>
      <IonList>
        <IonItem routerLink="/standard-form" button>
          Standard Form
        </IonItem>
        <IonItem routerLink="/react-hook-form" button>
          React Hook Form
        </IonItem>
      </IonList>
    </IonPage>
  );
};

export default Home;
