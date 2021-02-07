import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import {
  Button,
  HeroBar,
  Layout,
  PageHeading,
} from '../components/CustomComponents';

export default function PostGame(): React.ReactElement {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading fontSize={['4xl', '5xl']}>Radiant Victory</PageHeading>
      <HeroBar background="rgba(0, 255, 163, 0.37)" />
      <Heading color="white" fontSize={['lg', 'xl']} fontWeight="300" my={-16}>
        vs
      </Heading>
      <HeroBar />
      <Button onClick={() => router.push('/roleSelection')}>Play Again</Button>
    </Layout>
  );
}
