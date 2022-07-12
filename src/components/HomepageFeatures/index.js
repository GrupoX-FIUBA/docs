import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentos',
    link: '/intro',
    target: '_self',
    Svg: require('@site/static/img/documentacion.svg').default,
    description: (
      <>
        Documentación del proyecto, guías de usuario, bitácora y más.
      </>
    ),
  },
  {
    title: 'Repositorios',
    link: 'https://github.com/GrupoX-FIUBA/',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
        Todos los repositorios se encuentran agrupados en una organización de Github.
      </>
    ),
  },
  {
    title: 'Aplicación',
    link: 'https://app.spotifiuby.com.ar/',
    Svg: require('@site/static/img/app.svg').default,
    description: (
      <>
        Manual de usuario de la aplicación móvil, wireframes y link de descarga.
      </>
    ),
  },
  {
    title: 'Backoffice',
    link: 'https://admin.spotifiuby.com.ar/',
    Svg: require('@site/static/img/backoffice.svg').default,
    description: (
      <>
        Panel de administración para controlar usuarios y contenidos, y visualizar métricas.
      </>
    ),
  },
];

function Feature({Svg, title, description, link, target="_blank"}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link} target={target}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
