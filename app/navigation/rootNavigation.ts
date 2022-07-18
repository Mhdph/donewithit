import React from "react";

export interface Navigation {
  navigation: {
    navigate: (route: string, params?: any) => void;
  };
}

export const navigationRef = React.createRef<Navigation>();

export const navigate = (name: string, params = {}) =>
  navigationRef.current?.navigation.navigate(name, params);
