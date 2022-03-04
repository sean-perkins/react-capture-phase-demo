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
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log("Form submitted", data);

  const formatOnlyDigits = (value: any) => value.replace(/\D/g, "");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>React Hook Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>
          <IonText>
            Try typing "123abc" in each input and pressing "Submit".
          </IonText>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">HTML Input</IonLabel>
              <input {...register("html.text")} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Ion Input (Text)</IonLabel>
              <IonInput {...register("ionic.text")} />
            </IonItem>
          </IonList>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">HTML Input (Only Digits)</IonLabel>
              <input
                {...register("html.digits")}
                onChange={(ev) => {
                  const value = formatOnlyDigits(ev.target.value);
                  ev.target.value = value;
                }}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Ion Input (Only Digits), using ionChange
              </IonLabel>
              <IonInput
                {...register("ionic.digitsIonChange")}
                onIonChange={(ev: any) => {
                  const value = formatOnlyDigits(ev.target.value);
                  ev.target.value = value;
                }}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Ion Input (Only Digits), using ionInput
              </IonLabel>
              <IonInput
                {...register("ionic.digitsIonInput")}
                onIonInput={(ev: any) => {
                  const value = formatOnlyDigits(ev.target.value);
                  ev.target.value = value;
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
