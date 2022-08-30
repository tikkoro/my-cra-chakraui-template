import { Button } from '@chakra-ui/react';

type SampleProps = {
    sample: string;
};

const Sample: React.FC<SampleProps> = ({ sample }: SampleProps) => <Button>{sample}</Button>;

export default Sample;
