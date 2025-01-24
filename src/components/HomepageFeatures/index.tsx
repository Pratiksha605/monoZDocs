import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import Link from '@docusaurus/Link';


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'monoZ:Jet',
    Svg: require('@site/static/img/monoZZet.svg').default,
    description: '/docs/monoZJet/introduction',
  },
  {
    title: 'monoZ:Link',
    Svg: require('@site/static/img/monoZLink.svg').default,
    description: '/docs/monoZLink/introduction',
  },  
  {
    title: 'monoZ:Connect',
    Svg: require('@site/static/img/monoZConnect.svg').default,
    description: '/docs/monoZConnect/introduction',
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <Link className={clsx('card', styles.cardList)} to={description}>
        <div className="card__body">
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h4">{title}</Heading>
          </div>
        </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
       <section className={clsx('', styles.features)}>
      <div className="container">
        <div  className={styles.featureDeveloper}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          </div>
        </div>
    </section>
  );
}
