export type StepFactors = Record<string, number>;

export type Step = {
  label: string;
  title: string;
  meaning: string;
  build: string[];
  factors: StepFactors;
};

export type Attribute = {
  name: string;
  final: number;
  group: string;
  meaning: string;
  build: string[];
};

export type Path = {
  name: string;
  vehicleAttrs: Attribute[];
  driverAttrs: Attribute[];
};

export type Goal = {
  id: string;
  title: string;
  steps: Step[];
  paths: Path[];
};
