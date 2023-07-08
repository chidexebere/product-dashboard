import Card from '../Card';
import VideoPlayer from '../VideoPlayer';

interface Props {
  product: ProductObject;
}

const ProductVideo = ({ product }: Props) => {
  const { video } = product;
  return (
    <Card className="flex flex-col gap-5 py-[30px] px-2.5 lg:p-5">
      <h2>Video</h2>
      <VideoPlayer videoURL={video} />
    </Card>
  );
};

export default ProductVideo;
