import { Grid, GridItem } from "@chakra-ui/react";
import TypesTravel from "./TypesTravel";

export default function Travel(){
    
    
    return (
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            w="100%"
            justifyContent="space-between"
            mt={["10", "32"]}
            mx="auto"
            maxW="1160px"
            gap={[1, 5]}
        >
            <GridItem>
                <TypesTravel
                    icon="cocktail"
                    text="vida noturna"
                />
            </GridItem>
            <GridItem>
                <TypesTravel
                    icon="surf"
                    text="Praia"
                />
            </GridItem>
            <GridItem>
                <TypesTravel
                    icon="building"
                    text="Moderna"
                />
            </GridItem>
            <GridItem>
                <TypesTravel
                    icon="museum"
                    text="Clássico"
                />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <TypesTravel
                    icon="earth"
                    text="e mais..."
                />
            </GridItem>
        </Grid>
    )
}