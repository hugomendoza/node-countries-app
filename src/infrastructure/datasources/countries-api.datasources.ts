import axios from 'axios';
export class CountriesApiDatasources {

  api = axios.create({
    baseURL: 'https://jsonmock.hackerrank.com/api/countries/search?region=europe&name=e&page=1',
  })

  async getCountries() {
    const { data } = await this.api.get('');
    return data.data;
  }

}