export interface QuestionsForm {
  step: number;
  isLoading: boolean;
}

export interface Questions {
  hairType: string;
  hairWash: string;
  hairProducts: string;
  hairConcern: string;
  hairColor: string;
}

export enum HairType {
  Straight = "Straight",
  Curly = "Curly",
  Wavy = "Wavy",
  Fine = "Fine",
}

export enum HairWashFrequency {
  Daily = "Daily",
  EveryOtherDay = "Every other day",
  TwiceAWeek = "Twice a week",
  OnceAWeek = "Once a week",
  OnceEveryTwoWeeks = "Every two weeks",
}

export enum HairProductBenefit {
  AntiBreakage = "Anti-breakage",
  Hydration = "Hydration",
  SoothingDryScalp = "Soothing dry scalp",
  RepairsDamagedHair = "Repairs damaged hair",
  Volume = "Volume",
  CurlAndCoilEnhancing = "Curl & coil enhancing",
}

export enum HairConcern {
  Breakage = "Breakage",
  Frizz = "Frizz",
  ScalpDryness = "Scalp dryness",
  Damage = "Damage",
  Tangling = "Tangling",
}

export enum HairColor {
  Black = "Black",
  Brown = "Brown",
  Blonde = "Blonde",
  RedOrange = "Red/Orange",
  SilverGrey = "Silver/Grey",
}
