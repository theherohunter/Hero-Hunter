interface L10nSchema {
  id: string;
  value: string;
}

export interface L10Dictionary {
  navigation: {
    menu: {
      home: L10nSchema;
    };
  };
}
