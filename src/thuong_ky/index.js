import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import VerificationScreen from './screens/VerificationScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import EventHomeScreen from './screens/EventHomeScreen';
import EventDetailScreen from './screens/EventDetailScreen';
import MapViewScreen from './screens/MapViewScreen';
import SearchScreen from './screens/SearchScreen';
import SeeAllEventsScreen from './screens/SeeAllEventsScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrganizerProfileScreen from './screens/OrganizerProfileScreen';
import NotificationScreen from './screens/NotificationScreen';

export default function ThuongKyMainScreen({ navigation }) {
  // Master state luồng ứng dụng EventHub
  // Màn hình: 'splash' | 'onboarding' | 'login' | 'reset' | 'verify' | 'signup' | 'home' | 'search' | 'map' | 'see_all' | 'profile' | 'organizer' | 'notifications' | 'detail'
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setCurrentScreen('detail');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'splash' && (
        <SplashScreen onNext={() => setCurrentScreen('onboarding')} />
      )}

      {currentScreen === 'onboarding' && (
        <OnboardingScreen
          onFinish={() => setCurrentScreen('login')}
          onSkip={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'login' && (
        <LoginScreen
          onLoginSuccess={() => setCurrentScreen('home')}
          onGoToSignUp={() => setCurrentScreen('signup')}
          onGoToForgotPassword={() => setCurrentScreen('reset')}
        />
      )}

      {currentScreen === 'reset' && (
        <ResetPasswordScreen
          onSendSuccess={() => setCurrentScreen('verify')}
          onBack={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'verify' && (
        <VerificationScreen
          onVerifySuccess={() => setCurrentScreen('home')}
          onBack={() => setCurrentScreen('reset')}
        />
      )}

      {currentScreen === 'signup' && (
        <SignUpScreen
          onSignUpSuccess={() => setCurrentScreen('verify')}
          onGoToLogin={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'home' && (
        <EventHomeScreen
          onSelectEvent={handleSelectEvent}
          onGoToSearch={() => setCurrentScreen('search')}
          onGoToMap={() => setCurrentScreen('map')}
          onGoToSeeAll={() => setCurrentScreen('see_all')}
          onGoToProfile={() => setCurrentScreen('profile')}
          onGoToNotifications={() => setCurrentScreen('notifications')}
          onLogout={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'notifications' && (
        <NotificationScreen onBack={() => setCurrentScreen('home')} />
      )}

      {currentScreen === 'see_all' && (
        <SeeAllEventsScreen
          onSelectEvent={handleSelectEvent}
          onGoToSearch={() => setCurrentScreen('search')}
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'profile' && (
        <ProfileScreen onBack={() => setCurrentScreen('home')} />
      )}

      {currentScreen === 'organizer' && (
        <OrganizerProfileScreen
          onSelectEvent={handleSelectEvent}
          onBack={() => setCurrentScreen('detail')}
        />
      )}

      {currentScreen === 'search' && (
        <SearchScreen
          onSelectEvent={handleSelectEvent}
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'map' && (
        <MapViewScreen
          onSelectEvent={handleSelectEvent}
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'detail' && (
        <EventDetailScreen
          event={selectedEvent}
          onBack={() => setCurrentScreen('home')}
          onGoToOrganizer={() => setCurrentScreen('organizer')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
