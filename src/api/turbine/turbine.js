import client from './client';

export default {
  async getTurbineAlarms() {
    const response = await client.get('v3/6a13fe7e-840c-4d82-b58f-c737139f0e55/');
    return response.data;
  },
};
