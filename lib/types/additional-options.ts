export type AdditionalOptionCategory = {
  name: string;
  items: AdditionalOption[];
};

export interface AdditionalOption {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'delivery' | 'mattresses' | 'bedBases' | 'chairs' | 'pillows';
  packType?: 'duo' | 'trio';
}

export interface AdditionalSelection {
  id: string;
  quantity: number;
}