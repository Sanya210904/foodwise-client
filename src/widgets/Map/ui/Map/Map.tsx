import React, {useEffect, useRef, useState} from 'react';
import MapBox, {Camera, MapView} from '@rnmapbox/maps';
import {MAPBOX_TOKEN} from '@env';
import {DEFAULT_ZOOM} from '../../model/constants/mapConstants';
import {styles} from './styles';
import MapShopCard from '../MapShopCard/MapShopCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ShopMarker from '../ShopMarker/ShopMarker';
import {useGetShopsByRadiusQuery} from '@src/entities/shop/api/shopApi';
import {Shop} from '@src/entities/shop/model/types/Shop';
import ZoomControls from '../ZoomControls/ZoomControls';
import Loader from '@src/shared/ui/Loader/Loader';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LocationButton from '../LocationButton/LocationButton';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '@src/shared/types/Location';
import UserMarker from '../UserMarker/UserMarker';

MapBox.setAccessToken(MAPBOX_TOKEN);
MapBox.setTelemetryEnabled(false);

const Map = () => {
  const {bottom, top} = useSafeAreaInsets();
  const camera = useRef<Camera>(null);
  const [mapZoom, setMapZoom] = useState(DEFAULT_ZOOM);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [chosenShop, setChosenShop] = useState<Shop | null>(null);

  const [userLocation, setUserLocation] = useState<Location | null>(null);

  const zoomControlsBottomPosition = useSharedValue(bottom);

  const {isLoading, data} = useGetShopsByRadiusQuery({
    coordinates: [userLocation?.latitude || 0, userLocation?.longitude || 0],
    radius: 10,
  });

  useEffect(() => {
    zoomControlsBottomPosition.value = withTiming(
      chosenShop === null ? bottom : bottom + 220,
      {
        duration: 300,
      },
    );
  }, [chosenShop, bottom, zoomControlsBottomPosition]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        const {longitude, latitude} = position.coords;
        setUserLocation({longitude, latitude});
      },
      error => {
        console.error('Error getting user location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const onDidFinishLoadingMap = () => {
    console.log('Map loaded');
    setMapLoaded(true);

    if (!camera.current) return;

    camera.current.setCamera({
      centerCoordinate: [
        userLocation?.longitude || 0,
        userLocation?.latitude || 0,
      ],
      zoomLevel: DEFAULT_ZOOM,
      animationDuration: 0,
    });
  };

  const handleMoveToLocation = () => {
    if (!camera.current || !userLocation) return;

    const {longitude, latitude} = userLocation;

    camera.current.setCamera({
      centerCoordinate: [longitude, latitude],
      zoomLevel: 14,
      animationDuration: 1000,
    });
  };

  const onCameraChanged = (event: MapBox.MapState) => {
    const zoom = event.properties.zoom;

    if (Math.trunc(zoom) !== Math.trunc(mapZoom)) {
      console.log('Zoom level changed:', zoom);
      setMapZoom(Math.trunc(zoom));
    }
  };

  const handleZoomControls = (type: 'in' | 'out') => {
    if (!camera.current) return;

    let newZoom;
    if (type === 'in') {
      newZoom = Math.min(mapZoom + 0.5, 20);
    } else {
      newZoom = Math.max(mapZoom - 0.5, 0);
    }

    camera.current.setCamera({
      zoomLevel: newZoom,
      animationDuration: 300,
    });
    setMapZoom(newZoom);
  };

  const handleShopMarkerPress = (id: string) => {
    if (chosenShop?._id === id) {
      setChosenShop(null);
      return;
    }

    const currentShop = data?.data.find(shop => shop._id === id);
    if (!currentShop) {
      console.log(`Shop with id ${id} not found`);
      return;
    }

    setChosenShop(currentShop);
  };

  const handleCloseShop = () => {
    setChosenShop(null);
  };

  const zoomControlsStyle = useAnimatedStyle(() => {
    return {
      bottom: zoomControlsBottomPosition.value,
    };
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <MapView
        style={styles.map}
        onPress={handleCloseShop}
        logoEnabled={false}
        scaleBarEnabled={false}
        onDidFinishLoadingMap={onDidFinishLoadingMap}
        onCameraChanged={event => onCameraChanged(event)}
        gestureSettings={{
          doubleTapToZoomInEnabled: true,
          pitchEnabled: true,
          pinchZoomDecelerationEnabled: true,
          pinchZoomEnabled: true,
          quickZoomEnabled: true,
        }}>
        {data?.data.map(shop => (
          <ShopMarker
            latitude={shop.location.geo.coordinates[0]}
            longitude={shop.location.geo.coordinates[1]}
            id={shop._id}
            onPress={handleShopMarkerPress}
            key={shop._id}
            isSelected={chosenShop?._id === shop._id}
            logo={shop.logo}
          />
        ))}

        <UserMarker location={userLocation} />

        <Camera ref={camera} />
      </MapView>

      <Animated.View style={[styles.zoomControls, zoomControlsStyle]}>
        <ZoomControls handleZoomControls={handleZoomControls} />
      </Animated.View>

      <LocationButton
        style={[styles.locationButton, {top: top}]}
        onPress={handleMoveToLocation}
      />

      {chosenShop !== null && (
        <MapShopCard
          style={[styles.mapShop, {bottom: bottom}]}
          isVisible={chosenShop !== null}
          onClose={handleCloseShop}
          shopInfo={{
            id: chosenShop._id,
            title: chosenShop.name,
            address: chosenShop.location.address,
            banner: chosenShop.banner,
            location: chosenShop.location.geo.coordinates,
          }}
          userLocation={userLocation}
        />
      )}
    </>
  );
};

export default Map;
