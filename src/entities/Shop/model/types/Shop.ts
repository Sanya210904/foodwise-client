import {DecimalNumber} from '@src/shared/types/DecimalNumber';

type Discount = {
  activated: boolean;
  automated: boolean;
  default_num: number;
  hour: string;
};

type GeoLocation = {
  _id: string;
  coordinates: [number, number];
  type: 'Point';
};

type Location = {
  address: string;
  geo: GeoLocation;
};

export type Shop = {
  _id: string;
  avrg_score: number;
  banner: string;
  category_id: string;
  creation_date: string;
  description: string;
  discount: Discount;
  is_activated: boolean;
  location: Location;
  logo: string;
  name: string;
  props_count: number;
  start_price: DecimalNumber;
  work_hours: [string, string];
};
