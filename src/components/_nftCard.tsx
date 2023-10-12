import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import bay from "../../public/images/bay.png";
import { nftCardprops } from "@/utils/types";

function NftCard({ nft }: nftCardprops) {
  return (
    <Box
      borderRadius={[
        "0rem 0rem 0.76644rem 0.76644rem",
        "0rem 0rem 0.76644rem 0.76644rem",
        "0rem 0rem 1.5rem 1.5rem",
      ]}
      background={"#1DB96F"}
      backgroundBlendMode={"overlay"}
      w={["10.28319rem", "10.28319rem", "20.125rem"]}
      h={["13.98769rem", "13.98769rem", "27.375rem"]}
      position={"relative"}
    >
      <Image
        src={nft?.metadata?.media || bay}
        alt="bay"
        width={300}
        height={600}
        style={{
          minWidth: "100%",
          minHeight: "100%",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "0rem 0rem 1.5rem 1.5rem",
        }}
      />
      <VStack
        fontFamily={"NexaBold"}
        position={"absolute"}
        bottom={0}
        left={0}
        borderRadius={[
          "0rem 0rem 0.76644rem 0.76644rem",
          "0rem 0rem 0.76644rem 0.76644rem",
          "0rem 0rem 1.5rem 1.5rem",
        ]}
        bgColor={"#1E1E1E94"}
        backdropFilter={"auto"}
        backdropBlur={["10.22px", "10.22px", "20px"]}
        width={"100%"}
        height={["4.02388rem", "4.02388rem", "7.875rem"]}
        padding={["0.9rem 0.7rem", "0.9rem 0.7rem", "1.93rem 1.38rem"]}
        alignItems={"flex-start"}
        gap={"0.1rem"}
        color={"#FFFFFF"}
      >
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text
            fontSize={["0.59869rem", "0.59869rem", "1.17169rem"]}
            fontWeight={400}
          >
            {nft?.metadata?.title || "Bored Ape Yacht"}
          </Text>
          <Text
            fontSize={["0.71844rem", "0.71844rem", "1.406rem"]}
            fontWeight={400}
          >
            2637
          </Text>
        </HStack>
        <Text
          fontSize={["0.95788rem", "0.95788rem", "1.875rem"]}
          fontWeight={400}
        >
          77.234 NEAR
        </Text>
      </VStack>
    </Box>
  );
}

export default NftCard;
