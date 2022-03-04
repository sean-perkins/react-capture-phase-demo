import { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const ReactHookForm = () => {
  const [inputText, setInputText] = useState("");
  const [ionInputText, setIonInputText] = useState("");

  const [inputDigits, setInputDigits] = useState("");
  const [digitsIonChange, setDigitsIonChange] = useState("");
  const [digitsIonInput, setDigitsIonInput] = useState("");

  const onSubmit = (ev: any) => {
    ev.preventDefault();
    console.log("Form submitted", {
      html: {
        text: inputText,
        digits: inputDigits,
      },
      ionic: {
        text: ionInputText,
        digitsIonInput,
        digitsIonChange,
      },
    });
  };

  const formatOnlyDigits = (value: any) => value.replace(/\D/g, "");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Standard Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form className="ion-padding" onSubmit={onSubmit}>
          <IonText>
            Try typing "123abc" in each input and pressing "Submit".
          </IonText>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">HTML Input</IonLabel>
              <input
                value={inputText}
                onChange={(ev) => setInputText(ev.target.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Ion Input (Text)</IonLabel>
              <IonInput
                value={ionInputText}
                onIonChange={({ detail }) => setIonInputText(detail.value!)}
              />
            </IonItem>
          </IonList>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">HTML Input (Only Digits)</IonLabel>
              <input
                value={inputDigits}
                onChange={(ev) => {
                  const value = formatOnlyDigits(ev.target.value);
                  setInputDigits(value);
                }}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Ion Input (Only Digits), using ionChange
              </IonLabel>
              <IonInput
                value={digitsIonChange}
                onIonChange={(ev: any) => {
                  const value = formatOnlyDigits(ev.target.value);
                  setDigitsIonChange(value);
                }}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Ion Input (Only Digits), using ionInput
              </IonLabel>
              <IonInput
                value={digitsIonInput}
                onIonChange={(ev: any) => {
                  const value = formatOnlyDigits(ev.target.value);
                  setDigitsIonInput(value);
                }}
              />
            </IonItem>
            <IonButton type="submit" expand="block">
              Submit
            </IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default ReactHookForm;
