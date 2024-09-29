import React from 'react';
import { IonContent, IonPage, IonButton, IonFooter, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import FloatingLightningBolts from '../../components/ui/FloatingLightningBolts/FloatingLightningBolts';
import './Home.scss';

const Home: React.FC = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  };

  const goToRegister = () => {
    history.push('/register');
  };

  return (
    <IonPage className="home-page">
      <IonContent fullscreen>
        <FloatingLightningBolts />
        <div className="content-container">
          <h1 className="flash-logo">Flash</h1>
          <div className="button-container">
            <IonButton expand="block" className="custom-button" onClick={goToLogin}>
            Авторизоваться
            </IonButton>
            <IonButton expand="block" className="custom-button" onClick={goToRegister}>
            Регистратор
            </IonButton>
          </div>
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonText className="footer-text">
        Flash 2024, все права защищены.
        </IonText>
      </IonFooter>
    </IonPage>
  );
};

export default Home;