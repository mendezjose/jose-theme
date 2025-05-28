import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { RichText, Island } from '@hubspot/cms-components';
import logo from '../../../assets/sprocket.svg';
import styles from '../../../styles/getting-started.module.css';
import Form from '../../islands/Form/index.tsx?island';
import myQuery from '../../../queries/myQuery.graphql';

export function Component({ hublParameters, dataQueryResult }) {
  const { brandColors } = hublParameters;

  console.log(dataQueryResult);

  return (
    <div
      className={styles.wrapper}
      style={{
        opacity: brandColors?.opacity,
      }}
    >
      <h1>Interactive Form</h1>
      <RichText fieldPath="gettingStarted" />
      <Island module={Form} headline={'vaya'} />
    </div>
  );
}

export const fields = [];

export const meta = {
  label: 'Interactive Form',
};
