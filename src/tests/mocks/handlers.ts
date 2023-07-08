import { rest } from 'msw';
import sampleProductData from '../sampleResponseData/sampleProductData.json';
import sampleAppConfig from '../sampleResponseData/sampleProductData.json';

export const configHandlers = [
  rest.get(
    'https://api-test.innoloft.com/configuration/1/',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(sampleAppConfig));
    },
  ),
];

export const productHandlers = [
  rest.get('https://api-test.innoloft.com/product/6781/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sampleProductData));
  }),
];
