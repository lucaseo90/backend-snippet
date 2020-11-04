import { ICity } from 'app/shared/model/city.model';
import { ICountryLanguage } from 'app/shared/model/country-language.model';
import { Continent } from 'app/shared/model/enumerations/continent.model';

export interface ICountry {
  id?: number;
  code?: string;
  name?: string;
  continent?: Continent;
  region?: string;
  surfaceArea?: number;
  population?: number;
  lifeExpectancy?: number;
  localName?: string;
  governmentForm?: string;
  cities?: ICity[];
  countryLanguages?: ICountryLanguage[];
}

export const defaultValue: Readonly<ICountry> = {};
