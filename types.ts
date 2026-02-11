export interface ProposalState {
  yesPressed: boolean;
  noCount: number;
  imageUrl: string | null;
  isLoading: boolean;
}

export interface ButtonPosition {
  top: string | number;
  left: string | number;
  position: 'static' | 'absolute' | 'fixed';
}