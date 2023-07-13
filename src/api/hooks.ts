import { useMutation, useQuery, useQueryClient } from 'react-query';
import { editData, fetchData, postData } from '.';

const PRODUCT_ID = 6781;

const config: string = process.env.REACT_APP_CONFIG_URL as string;
const product: string = process.env.REACT_APP_PRODUCT_URL as string;
const trl: string = process.env.REACT_APP_TRL as string;

// Get APP configuration
const useAppConfig = (APPID: number) => {
  return useQuery<ConfigObject>(['appConfig', APPID], () =>
    fetchData(`${config}/${APPID}/`),
  );
};

// Get Product
const useProduct = () => {
  return useQuery<ProductObject>(['product'], () =>
    fetchData(`${product}/${PRODUCT_ID}/`),
  );
};

// Get TRL
const useTrl = () => {
  return useQuery<TrlObject[]>(['trl'], () => fetchData(trl));
};

// Add Product
const useAddProduct = () => {
  return useMutation((name: string) =>
    postData(`${product}/${PRODUCT_ID}/`, name),
  );
};

// Edit Product
const useEditProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (payload: PayloadObject) => {
      return editData(`${product}/${PRODUCT_ID}/`, payload);
    },
    {
      // When mutate is called:
      onMutate: async (payload) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries('product');

        // Snapshot the previous value
        const product = queryClient.getQueryData<ProductObject>('product');

        // // Optimistically update to the new value
        if (product) {
          const productKeys = Object.keys(payload)[0];
          const value = Object.values(payload)[0];

          queryClient.setQueryData<ProductObject>('product', () => {
            switch (productKeys) {
              case 'name':
                product.name = value as string;
                return product;
                break;
              case 'description':
                product.description = value as string;
                return product;
                break;
              case 'picture':
                product.picture = value as string;
                return product;
                break;
              case 'type':
                product.type = value as TrlObject;
                return product;
                break;
              case 'categories':
                product.categories = value as ListObject[];
                return product;
                break;
              case 'implementationEffortText':
                product.implementationEffortText = value as string;
                return product;
                break;
              case 'investmentEffort':
                product.investmentEffort = value as string;
                return product;
                break;
              case 'trl':
                product.trl = value as ListObject;
                return product;
                break;
              case 'video':
                product.video = value as string;
                return product;
                break;
              case 'user':
                product.user = value as UserObject;
                return product;
                break;
              case 'company':
                product.company = value as CompanyObject;
                return product;
                break;
              case 'businessModels':
                product.businessModels = value as ListObject[];
                return product;
                break;
              default:
                return product;
            }
          });
        }
      },
    },
  );
};

// Use cached app configuration data
const useCachedAppConfig = (APPID: number) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<ConfigObject>(['appConfig', APPID]);
};

// Use cached product data
const useCachedProduct = () => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<ProductObject>(['product']);
};

export {
  useAppConfig,
  useProduct,
  useTrl,
  useAddProduct,
  useEditProduct,
  useCachedAppConfig,
  useCachedProduct,
};
