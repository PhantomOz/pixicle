import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import bay from "../../public/images/bay.png";
import { nftCardprops } from "@/utils/types";
import { useContext, useState } from "react";
import { MarketContext } from "@/context/MarketStore";
import { utils } from "near-api-js";

function NftCard({ nft }: nftCardprops) {
  const [isHover, setIsHover] = useState(false);
  const { wallet, handleRouting } = useContext(MarketContext);

  const handleBuying = () => {};
  const handleListing = async () => {
    try {
      // const storageDeposit = await wallet?.callMethod({
      //   contractId: "pixil.phlay.testnet",
      //   method: "storage_deposit",
      //   args: {
      //     account_id: wallet?.accountId,
      //   },
      //   deposit: utils.format.parseNearAmount("1"),
      // });
      // console.log(storageDeposit);
      const newListing = await wallet?.callMethod({
        contractId: "pixil.phlay.testnet",
        method: "nft_approve",
        args: {
          owner_id: "pixil.phlay.testnet",
          token_id: nft.token_id,
          msg: JSON.stringify({
            sale_conditions: utils.format.parseNearAmount("77"),
          }),
        },
        deposit: utils.format.parseNearAmount("1"),
      });
      console.log(newListing);
      console.log("listing added");
    } catch (error) {
      console.log(error);
    }
  };
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
      cursor={"pointer"}
      zIndex={20}
      onClick={() => handleRouting && handleRouting(`assets/${nft.token_id}`)}
    >
      <Image
        src={nft?.metadata?.media || bay}
        alt="bay"
        width={600}
        height={1200}
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
        transition={"all 0.5s ease-in-out"}
        _hover={{ bgColor: "#FFFFFF", color: "#1DB96F" }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        zIndex={20}
      >
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text
            fontSize={["0.59869rem", "0.59869rem", "1.17169rem"]}
            fontWeight={400}
          >
            {nft?.metadata?.title.slice(0, 12) || "Bored Ape Yacht"}
            {nft?.metadata?.title.length > 12 && "..."}
          </Text>
          <Text
            fontSize={["0.71844rem", "0.71844rem", "1.406rem"]}
            fontWeight={400}
          >
            1
          </Text>
        </HStack>
        <HStack
          position={"relative"}
          alignItems={"center"}
          gap={"1rem"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          {nft?.owner_id === wallet?.accountId ? (
            <Button
              variant={"solid"}
              colorScheme="green"
              display={isHover ? ["none", "none", "block"] : "none"}
              transition={"all 0.5s ease-in-out"}
              onClick={handleListing}
              position={"absolute"}
              left={0}
              top={0}
              zIndex={30}
            >
              <Text
                fontSize={["0.59869rem", "0.59869rem", "1.17169rem"]}
                fontWeight={400}
              >
                List For Sale
              </Text>
            </Button>
          ) : (
            <Button
              variant={"solid"}
              colorScheme="green"
              display={isHover ? ["none", "none", "block"] : "none"}
              transition={"all 0.5s ease-in-out"}
              onClick={handleBuying}
            >
              <Text
                fontSize={["0.59869rem", "0.59869rem", "1.17169rem"]}
                fontWeight={400}
              >
                Buy
              </Text>
            </Button>
          )}
          {nft?.owner_id !== wallet?.accountId && (
            <Text
              fontSize={
                isHover ? "1.5rem" : ["0.95788rem", "0.95788rem", "1.875rem"]
              }
              fontWeight={400}
              transition={"all 1s ease-out"}
            >
              77.234 NEAR
            </Text>
          )}
        </HStack>
      </VStack>
    </Box>
  );
}

export default NftCard;
