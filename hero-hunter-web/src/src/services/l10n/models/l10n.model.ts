interface L10nSchema {
  id: string;
  value: string;
}

export interface L10Dictionary {
  navigation: {
    menu: {
      jobs: L10nSchema;
      companies: L10nSchema;
      candidates: L10nSchema;
    };
    buttons: {
      login: L10nSchema;
      registration: L10nSchema;
    };
  };
}
