
export enum FeatureType{

  Numerical = 1,
  Binary = 2,
  Categorical = 3
}

export class Feature {
  id: number;
  name: string;
  type: FeatureType;
  workspaceId: number;
}

