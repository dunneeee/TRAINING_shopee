import { Images } from '@/constants';

const About = () => {
  return (
    <section className="wrapper">
      <h3 className="mb-10">About</h3>
      <p className="font-body-small mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget
      </p>
      <div className="mb-6">
        <h5 className="mb-3">Top trends</h5>
        <img
          src={Images.ABOUT_TOP_TREND}
          alt="about top trend"
          className="mb-4"
        />
        <p className="font-body-small mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget
        </p>
        <p className="font-body-small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget
        </p>
      </div>
      <div className="">
        <h5 className="mb-3">Produced with care</h5>
        <img
          src={Images.PRODUCT_WITH_CARE}
          alt="product with care"
          className="mb-4"
        />
        <p className="font-body-small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget{' '}
        </p>
      </div>
    </section>
  );
};

export default About;
