import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonMovieCard = () => {
    return (
        <Box boxShadow="lg" rounded={"lg"}>
            <Skeleton height="200px" rounded={"lg"} />
            <SkeletonText
                p={4}
                mt="4"
                noOfLines={6}
                spacing="4"
                skeletonHeight="2"
            />
        </Box>
    );
};

export default SkeletonMovieCard;
