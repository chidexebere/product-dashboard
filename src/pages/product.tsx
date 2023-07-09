import Layout from '../layout';
import Loading from './loading';
import { useProduct, useTrl } from '../api/hooks';
import ProductHeader from '../components/Product/ProductHeader';
import ProductInfo from '../components/Product/ProductInfo';
import ProductVideo from '../components/Product/ProductVideo';
import ProductDescription from '../components/Product/ProductDescription';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editPage } from '../appState/slice';

interface Props {
  configData: ConfigObject;
}

const Product = ({ configData }: Props) => {
  const { isLoading, isError, data } = useProduct();
  const { data: trl } = useTrl();

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/product') {
      dispatch(editPage());
    }
  }, [location.pathname]);

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
          <ProductDescription product={data} trlList={trl} />
        </div>
      )}
    </Layout>
  );
};

export default Product;
