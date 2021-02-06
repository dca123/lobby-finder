import GradientCard from './GradientCard';
import { Text, Heading } from '@chakra-ui/react';
interface TeamCardProps {
  teamName: string;
  playerArray?: string[];
}
export default function TeamCard({
  teamName,
  playerArray = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
}: TeamCardProps) {
  return (
    <GradientCard w={36} h={48} py={4}>
      <Heading fontWeight="300" fontSize="2xl" color="white">
        {teamName}
      </Heading>
      <Text fontSize="md" color="white">
        {playerArray[0]}
      </Text>
      <Text fontSize="md" color="white">
        {playerArray[1]}
      </Text>
      <Text fontSize="md" color="white">
        {playerArray[2]}
      </Text>
      <Text fontSize="md" color="pink">
        {playerArray[3]}
      </Text>
      <Text fontSize="md" color="white">
        {playerArray[4]}
      </Text>
    </GradientCard>
  );
}