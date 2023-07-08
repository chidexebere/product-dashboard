import Layout from '../layout';
import Loading from './loading';
import { useProduct, useTrl } from '../api/hooks';
import ProductHeader from '../components/Product/ProductHeader';
import ProductInfo from '../components/Product/ProductInfo';
import ProductVideo from '../components/Product/ProductVideo';

interface Props {
  configData: ConfigObject;
}

const Product = ({ configData }: Props) => {
  const { isLoading, isError, data } = useProduct();

  const { data: trl } = useTrl();

  if (isError) {
    return (
      <Layout>
        <div className="flex items-center justify-center">
          <h4 className="mt-20 text-xl font-bold text-center text-gray-800 md:text-2xl">
            <span className="text-red-500">Oops!</span> Something went wrong,
            check product url
          </h4>
        </div>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      {data && trl && (
        <div className="flex flex-col gap-5 px-2.5 py-5 lg:p-0">
          <ProductHeader product={data} />
          <ProductInfo product={data} configData={configData} />
          <ProductVideo product={data} />
        </div>
      )}
    </Layout>
  );
};

export default Product;
