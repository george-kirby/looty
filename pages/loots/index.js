import { Checkbox, FormControlLabel } from '@mui/material';
import Layout from '../../components/layout';
import LootCardsList from '../../components/LootCardsList';

import loots from '../../data/lootsData'

export async function getStaticProps() {
    return {
      props: {
        allLootsData: loots
      },
    };
  }

export default function LootsIndex( { allLootsData }) {
    return (
        <Layout>
            <main>
            <FormControlLabel control={<Checkbox />} label="Label" />
            <LootCardsList loots={allLootsData} />

            </main>
        </Layout>
    )
}