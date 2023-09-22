import { Hamburger, WalletIconDesk, WalletIconMob } from "@/utils/icons";
import { Button, HStack, Text } from "@chakra-ui/react";

function Header() {
  return (
    <HStack
      fontFamily={"NexaBold"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      padding={["0.98rem 0.88rem", "1.88rem 4.63rem"]}
    >
      {/* {Logo} */}
      <Text fontSize={["1.5rem", "2.5rem"]} fontWeight={400}>
        Pixicle
      </Text>

      {/* {Desktop Menu's} */}
      <HStack
        display={["none", "flex"]}
        gap={"4rem"}
        fontSize={"1.5rem"}
        fontWeight={400}
      >
        <Text color={"#1DB96F"}>Home</Text>
        <Text>Market Place</Text>
        <Text>Trends</Text>
        <Text>FAQ</Text>
      </HStack>

      {/* {Wallet Button} */}
      <Button
        borderRadius={"1rem"}
        background={"#1DB96F"}
        fontSize={"1.5rem"}
        fontWeight={"400"}
        color={"#FFFFFF"}
        display={["none", "flex"]}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"center"}
        padding={"1rem"}
        width={"13.75rem"}
      >
        <WalletIconDesk />
        <Text fontSize={"1.5rem"} fontWeight={400}>
          Wallet
        </Text>
      </Button>

      {/* {Mobile Menu's} */}
      <HStack display={["flex", "none"]} alignItems={"center"} gap={"1rem"}>
        <WalletIconMob />
        <Hamburger />
      </HStack>
    </HStack>
  );
}

export default Header;
